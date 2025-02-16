<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/fol.vue -->
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
 * Slightly move (jiggle) the reactor toward the mouse position.
 */
function jiggleReactor(element: HTMLElement, mouseX: number, mouseY: number) {
  setTimeout(() => {
    if (!activeReactor.value || activeReactor.value !== element) return;

    element.style.transition = "0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const factor = 0.2;
    const deltaX = (mouseX - centerX) * factor;
    const deltaY = (mouseY - centerY) * factor;
    const isPressed = element.classList.contains("pressed") ? "" : "";

    element.style.transform = `translate(${deltaX}px, ${deltaY}px)${isPressed}`;
    if (circle.value) {
      circle.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  }, 100);
}

/**
 * Handler for mousemove over an active reactor.
 */
function onReactorMouseMove(e: MouseEvent) {
  if (!activeReactor.value) return;
  if (reactorAnimationFrame) cancelAnimationFrame(reactorAnimationFrame);
  reactorAnimationFrame = requestAnimationFrame(() => {
    // Use pageX/pageY so scrolling is accounted for,
    // then add Locomotive's scroll offset.
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
      element.style.transform = "";
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

  // Track mousemove outside reactors:
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

// Initialize event listeners
onMounted(() => {
  circle_follow_mouse();
});

// Watch active reactor to position the circle over it
watch(activeReactor, (newReactor) => {
  if (!circle.value) return;
  if (newReactor) {
    const rect = newReactor.getBoundingClientRect();
    const computedStyle = getComputedStyle(newReactor);
    circle.value.style.transform = "none";
    // Apply Locomotive Scroll offsets to the reactor's position
    circle.value.style.top = (rect.top - 4 + scrollY.value) + "px";
    circle.value.style.left = (rect.left - 4 + scrollX.value) + "px";
    circle.value.style.width = rect.width + 8 + "px";
    circle.value.style.height = rect.height + 8 + "px";
    circle.value.style.borderRadius = computedStyle.borderRadius;
  } else {
    // Reset circle to default
    circle.value.style.transform = "translate(-50%, -50%)";
    circle.value.style.width = "40px";
    circle.value.style.height = "40px";
    circle.value.style.borderRadius = "100%";
    circle.value.style.transition = "0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }
});

watch(activeProject, (newProject) => {
  if (!circle.value) return;

  if (newProject) {
    // When hovering a project, expand the circle a bit
    circle.value.style.width = "80px";
    circle.value.style.height = "80px";
    circle.value.style.borderRadius = "50%"; // Keep it round
    circle.value.style.transition = "0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    // The circle should still follow the mouse
    circle.value.style.top = (lastMouseY.value + scrollY.value) + "px";
    circle.value.style.left = (lastMouseX.value + scrollX.value) + "px";
  } else {
    // Reset circle to default
    circle.value.style.transform = "translate(-50%, -50%)";
    circle.value.style.width = "40px";
    circle.value.style.height = "40px";
    circle.value.style.borderRadius = "100%";
    circle.value.style.transition = "0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
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
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  color: #ffffff; /* Default color */
  font-size: 12px;
  text-align: center; /* Ensure text is centered */
  mix-blend-mode: difference; /* Invert the color based on the background */
}

.pressed {
  scale: 1.1;
}
</style>
