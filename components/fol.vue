<template>
  <div ref="circle" class="circle flex flex-col p-2">
    <span v-if="activeProject" class="project-text font-bold">View Project</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import { useLocomotiveScroll } from "~/composables/useLocomotiveScroll";

// ...existing code...
const circle = ref<HTMLDivElement | null>(null);
const activeReactor = ref<HTMLElement | null>(null);
const activeProject = ref<HTMLElement | null>(null);
const shouldFollow = ref(true);

// Store last mouse position so we can adjust on scroll.
const lastMouseX = ref(0);
const lastMouseY = ref(0);

// New: internal target and current positions for smooth interpolation
const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
let animationId: number | null = null;

let reactorAnimationFrame: number | null = null;

// Get scroll offsets from Locomotive Scroll
const { scrollX, scrollY } = useLocomotiveScroll();

// ...existing code...
function jiggleReactor(element: HTMLElement, mouseX: number, mouseY: number) {
  if (!activeReactor.value || activeReactor.value !== element) return;
  element.style.transition = "transform 0.2s cubic-bezier(.31,.58,.6,.93)"; // Disable transition for immediate response
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const factor = 0.1; // Reduced factor for smoother jiggle
  const deltaX = (mouseX - centerX) * factor;
  const deltaY = (mouseY - centerY) * factor;

  // Apply translation to both the reactor and the circle
  element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  if (circle.value) {
    // Keep centering translate plus jiggle offset for smooth combination
    circle.value.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
  }
}

// ...existing code...
function onReactorMouseMove(e: MouseEvent) {
  if (!activeReactor.value) return;
  if (reactorAnimationFrame) cancelAnimationFrame(reactorAnimationFrame);
  reactorAnimationFrame = requestAnimationFrame(() => {
    jiggleReactor(
      activeReactor.value as HTMLElement,
      e.pageX,
      e.pageY
    );
  });
}

// ...existing code...
function circle_follow_mouse() {
  const reactors = document.querySelectorAll(".reactor");
  reactors.forEach((element: HTMLElement) => {
    element.addEventListener("mouseover", () => {
      activeReactor.value = element;
      shouldFollow.value = false;
      element.addEventListener("mousemove", onReactorMouseMove);
    });

    element.addEventListener("mouseleave", () => {
      if (activeReactor.value === element) {
        activeReactor.value = null;
        shouldFollow.value = true;
      }
      element.removeEventListener("mousemove", onReactorMouseMove);
      element.style.transform = ""; // Reset transform on mouse leave
      if (circle.value) {
        circle.value.style.transform = "translate(-50%, -50%)"; // Reset circle transform
      }
    });

    // Pressed effect
    element.addEventListener("mousedown", () => {
      element.classList.add("pressed");
    });
    element.addEventListener("mouseup", () => {
      element.classList.remove("pressed");
    });
  });

  const projects = document.querySelectorAll(".project");
  projects.forEach((element: HTMLElement) => {
    element.addEventListener("mouseover", () => {
      activeProject.value = element;
    });

    element.addEventListener("mouseleave", () => {
      activeProject.value = null;
      shouldFollow.value = true;
    });
  });

  // Track mousemove anywhere on the page:
  document.addEventListener("mousemove", (e) => {
    lastMouseX.value = e.pageX;
    lastMouseY.value = e.pageY;

    // Instead of jumping the circle, update the target position.
    if (shouldFollow.value) {
      targetX.value = e.pageX + scrollX.value;
      targetY.value = e.pageY + scrollY.value;
    }
  });
}

// Debounce function to limit the frequency of updates
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: number | undefined;
  return function(this: any, ...args: any[]) {
    if (timeout) window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait) as unknown as number;
  };
}

// ...existing code...
const updateCirclePosition = debounce(() => {
  if (!circle.value || !activeReactor.value) return;
  const rect = activeReactor.value.getBoundingClientRect();
  const computedStyle = getComputedStyle(activeReactor.value);

  // Set visual size immediately (so circle expands/shrinks smoothly via CSS transition).
  circle.value.style.width = rect.width + "px";
  circle.value.style.height = rect.height + "px";
  circle.value.style.borderRadius = computedStyle.borderRadius;

  // Target the CENTER of the reactor (circle has translate -50% to center)
  targetX.value = rect.left + rect.width / 2 + scrollX.value;
  targetY.value = rect.top + rect.height / 2 + scrollY.value;
}, 20); // Adjust the debounce wait time as needed
// ...existing code...

// Smooth animation loop: lerp current toward target
function startAnimation() {
  const ease = 0.15; // lower = slower follow, adjust to taste
  function step() {
    if (!circle.value) {
      animationId = requestAnimationFrame(step);
      return;
    }

    // Initialize current to target if first frame
    if (!currentX.value && !currentY.value) {
      currentX.value = targetX.value || (lastMouseX.value + scrollX.value);
      currentY.value = targetY.value || (lastMouseY.value + scrollY.value);
    }

    // Lerp towards target
    currentX.value += (targetX.value - currentX.value) * ease;
    currentY.value += (targetY.value - currentY.value) * ease;

    circle.value.style.left = currentX.value + "px";
    circle.value.style.top = currentY.value + "px";

    animationId = requestAnimationFrame(step);
  }
  if (animationId == null) animationId = requestAnimationFrame(step);
}

function stopAnimation() {
  if (animationId != null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

// Initialize event listeners
onMounted(() => {
  circle_follow_mouse();
  // initialize target to last mouse + scroll to avoid initial jump
  targetX.value = lastMouseX.value + scrollX.value;
  targetY.value = lastMouseY.value + scrollY.value;
  startAnimation();
});

onBeforeUnmount(() => {
  stopAnimation();
  if (reactorAnimationFrame) cancelAnimationFrame(reactorAnimationFrame);
});

// Watch active reactor to set target and sizes
watch(activeReactor, (newReactor) => {
  if (!circle.value) return;
  if (newReactor) {
    updateCirclePosition();
  } else {
    // Reset circle to default size and target (mouse)
    circle.value.style.width = "40px";
    circle.value.style.height = "40px";
    circle.value.style.borderRadius = "100%";
    // Re-target to current mouse position
    targetX.value = lastMouseX.value + scrollX.value;
    targetY.value = lastMouseY.value + scrollY.value;

    // Reset transform so we don't keep jiggle offsets
    circle.value.style.transform = "translate(-50%, -50%)";
  }
});

watch(activeProject, (newProject) => {
  if (!circle.value) return;

  if (newProject) {
    // When hovering a project, expand the circle a bit
    circle.value.style.width = "80px";
    circle.value.style.height = "80px";
    circle.value.style.borderRadius = "50%"; // Keep it round

    // Target the mouse while over project
    targetX.value = lastMouseX.value + scrollX.value;
    targetY.value = lastMouseY.value + scrollY.value;
  } else {
    // Reset circle to default
    circle.value.style.width = "40px";
    circle.value.style.height = "40px";
    circle.value.style.borderRadius = "100%";
  }
});

// Update circle position on scroll using computed properties
const circleTop = computed(() => {
  return lastMouseY.value + scrollY.value + "px";
});

const circleLeft = computed(() => {
  return lastMouseX.value + scrollX.value + "px";
});

watch([circleTop, circleLeft], () => {
  // On scroll, update target instead of jumping
  if (!shouldFollow.value) return;
  targetX.value = lastMouseX.value + scrollX.value;
  targetY.value = lastMouseY.value + scrollY.value;
});

// ...existing code...
</script>

<style scoped>
.circle {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #52525230;
  border-radius: 100%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.5s cubic-bezier(0, 0.57, 0.2, 1); /* smoother transition for reduced jitter */
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  backdrop-filter: invert(1);
  justify-content: center;
  text-align: center; /* Ensure text is centered */
}

.project-text {
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  mix-blend-mode: difference;
}

.pressed {
  /* Only scale the reactor a bit when pressed, but no translation. */
  /*
     If you want a bigger effect, do:
     transform: scale(1.05) !important;
     transition: 0.2s ease-in-out;
   */
}
</style>