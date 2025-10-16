<template>
  <div ref="root" class="eye-wrap" aria-hidden="true">
    <svg
      viewBox="0 0 274.13 170.18"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ width: size + 'px', height: (size * 195.18 / 274.13) + 'px' }"
    >
      <defs>
        <linearGradient id="linear-gradient" x1="32.65" y1="31.5" x2="242.8" y2="129.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#e6e6e6"/>
          <stop offset="1" stop-color="#fc5a31"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="68.57" y1="50.59" x2="204.55" y2="114" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#e20622"/>
          <stop offset="1" stop-color="#3c0006"/>
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="110.97" y1="52.86" x2="162.14" y2="111.73" gradientUnits="userSpaceOnUse">
          <stop offset=".72" stop-color="#040000"/>
          <stop offset=".72" stop-color="#070000"/>
          <stop offset=".76" stop-color="#3a020b"/>
          <stop offset=".8" stop-color="#660414"/>
          <stop offset=".84" stop-color="#8b061b"/>
          <stop offset=".88" stop-color="#a70821"/>
          <stop offset=".92" stop-color="#bb0925"/>
          <stop offset=".96" stop-color="#c70928"/>
          <stop offset="1" stop-color="#cb0a29"/>
        </linearGradient>
      </defs>

      <!-- static outer eye shape -->
      <path class="cls-5" d="m8.98,82.29s34.57,71,123.57,81,132.26-81,132.26-81c0,0-26.26-76-122.26-82S8.98,82.29,8.98,82.29Z"/>

      <!-- Slightly move the bigger colored iris (cls-1) but only a little -->
      <g :style="irisStyle">
        <circle class="cls-1" cx="136.56" cy="82.29" r="75"/>
      </g>

      <!-- Move the pupil (smaller circle) more; star stays with the pupil -->
      <g :style="pupilStyle">
        <circle class="cls-4" cx="136.56" cy="82.29" r="39"/>
        <path
          class="cls-2 star"
          d="m164.56,23.29s.01.08.04.24c.49,2.52,5.31,24.11,26.96,29.76-23,6-27,29-27,29,0,0-4-25-27-30,21-5,27.01-28.92,27.01-28.92"
        />
      </g>

      <!-- outlining stroke -->
      <path class="cls-3" d="m8.75,82.03L.56,96.29s33,77,130,84,143-83,143-83l-8.98-15.26"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const root = ref<HTMLElement | null>(null);
const size = 340; // px width of SVG (adjust as needed)

const pupX = ref(0); // current displayed px offset for pupil
const pupY = ref(0);
const targetX = ref(0);
const targetY = ref(0);

let raf = 0;

// tuning
const ease = 0.15; // interpolation speed (0-1)
const maxOffsetPct = 0.18; // fraction of eye width that pupil can move
const irisMoveFactor = 0.25; // how much the larger iris moves relative to pupil (small)
const pupilMoveFactor = 1.0; // full movement for pupil

const pupilStyle = computed(() => {
  return {
    transform: `translate(${pupX.value * pupilMoveFactor}px, ${pupY.value * pupilMoveFactor}px)`,
    transition: 'transform 0.03s linear'
  };
});

const irisStyle = computed(() => {
  return {
    transform: `translate(${pupX.value * irisMoveFactor}px, ${pupY.value * irisMoveFactor}px)`,
    transition: 'transform 0.06s linear'
  };
});

function onMove(ev: MouseEvent) {
  if (!root.value) return;
  const rect = root.value.getBoundingClientRect();
  const centerX = rect.left + rect.width * 0.5;
  const centerY = rect.top + rect.height * 0.5;
  const dx = ev.clientX - centerX;
  const dy = ev.clientY - centerY;

  const max = rect.width * maxOffsetPct;
  const len = Math.hypot(dx, dy) || 1;
  const clampedX = (dx / len) * Math.min(len, max);
  const clampedY = (dy / len) * Math.min(len, max);

  targetX.value = clampedX;
  targetY.value = clampedY;
}

function step() {
  // lerp pupil toward target (iris follows via computed factor)
  pupX.value += (targetX.value - pupX.value) * ease;
  pupY.value += (targetY.value - pupY.value) * ease;

  raf = requestAnimationFrame(step);
}

onMounted(() => {
  window.addEventListener('mousemove', onMove, { passive: true });
  raf = requestAnimationFrame(step);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove);
  cancelAnimationFrame(raf);
});
</script>

<style scoped>
/* reuse the classes from your svg with small tweaks */
.cls-1 {
  fill: url(#linear-gradient-2);
}
.cls-2 {
  fill: #fff;
  transform-origin: 136.56px 82.29px;
}
.cls-3 {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
}
.cls-4 {
  fill: url(#linear-gradient-3);
}
.cls-5 {
  fill: url(#linear-gradient);
}

/* container */
.eye-wrap {
  display: inline-block;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  will-change: transform;
}

/* star wobble via CSS animation (subtle) */
@keyframes star-wobble {
  0% { transform: translate(0,0) rotate(-6deg) scale(1); }
  50% { transform: translate(1px,1px) rotate(6deg) scale(1.02); }
  100% { transform: translate(0,0) rotate(-6deg) scale(1); }
}

.star {
  animation: star-wobble 1.1s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0.95;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25));
}

/* a tiny shadow on the pupil to keep it feeling 3D */
.cls-4 {
  transition: transform 0.2s ease;
  filter: drop-shadow(0 6px 6px rgba(0,0,0,0.25));
}
</style>