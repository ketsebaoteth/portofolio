<template>
  <div ref="circle" class="circle flex flex-col p-2">
    <span v-if="activeProject" class="project-text font-bold">View Project</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { useLocomotiveScroll } from "~/composables/useLocomotiveScroll";

const circle = ref<HTMLDivElement | null>(null);
const activeReactor = ref<HTMLElement | null>(null);
const activeProject = ref<HTMLElement | null>(null);
const shouldFollow = ref(true);

// Store last mouse position so we can adjust on scroll.
const lastMouseX = ref(0);
const lastMouseY = ref(0);

let reactorAnimationFrame: number | null = null;

// Get scroll offsets from Locomotive Scroll
const { scrollX, scrollY } = useLocomotiveScroll();

/**
 * Slightly move (jiggle) the reactor and circle toward the mouse position.
 */
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
    circle.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }
}

/**
 * Handler for mousemove over an active reactor.
 */
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

/**
 * Attach event listeners to each .reactor and track mouse & scroll.
 */
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
        circle.value.style.transform = "translate(-50%, -50%)"; // Reset circle position
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
    if (!circle.value || !shouldFollow.value) return;

    requestAnimationFrame(() => {
      if (circle.value) {
        // Add Locomotive Scroll offsets to the mouse coordinates
        circle.value.style.top = (e.pageY + scrollY.value) + "px";
        circle.value.style.left = (e.pageX + scrollX.value) + "px";
      }
    });
  });
}

// Debounce function to limit the frequency of updates
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Debounce the update of the circle's position
const updateCirclePosition = debounce(() => {
  if (!circle.value || !activeReactor.value) return;
  const rect = activeReactor.value.getBoundingClientRect();
  const computedStyle = getComputedStyle(activeReactor.value);
  circle.value.style.top = (rect.top  + scrollY.value) + "px";
  circle.value.style.left = (rect.left  + scrollX.value) + "px";
  circle.value.style.width = rect.width  + "px";
  circle.value.style.height = rect.height  + "px";
  circle.value.style.borderRadius = computedStyle.borderRadius;
}, 20); // Adjust the debounce wait time as needed

// Initialize event listeners
onMounted(() => {
  circle_follow_mouse();
});

// Watch active reactor to position the circle over it
watch(activeReactor, (newReactor) => {
  if (!circle.value) return;
  if (newReactor) {
    updateCirclePosition();
  } else {
    // Reset circle to default
    circle.value.style.transform = "translate(-50%, -50%)";
    circle.value.style.width = "40px";
    circle.value.style.height = "40px";
    circle.value.style.borderRadius = "100%";
  }
});

watch(activeProject, (newProject) => {
  if (!circle.value) return;

  if (newProject) {
    // When hovering a project, expand the circle a bit
    circle.value.style.width = "80px";
    circle.value.style.height = "80px";
    circle.value.style.borderRadius = "50%"; // Keep it round

    // The circle should still follow the mouse
    circle.value.style.top = (lastMouseY.value + scrollY.value) + "px";
    circle.value.style.left = (lastMouseX.value + scrollX.value) + "px";
  } else {
    // Reset circle to default
    circle.value.style.transform = "translate(-50%, -50%)";
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
  if (!circle.value || !shouldFollow.value) return;
  requestAnimationFrame(() => {
    if (circle.value) {
      circle.value.style.top = circleTop.value;
      circle.value.style.left = circleLeft.value;
    }
  });
});
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
  transition: 0.2s ease-out; /* smoother transition for reduced jitter */
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
