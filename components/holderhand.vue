<template>
  <div
    class="hand-wrap"
    :class="{ idle: isIdle }"
    :style="wrapStyle"
    aria-hidden="true"
  >
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 752.19 721.04"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="linear-gradient" x1="5.78" y1="489.01" x2="51.43" y2="484.21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff1d25"/>
          <stop offset="1" stop-color="#000"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="165.5" y1="94.09" x2="404.61" y2="68.96" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-3" x1="11.28" y1="511.3" x2="147" y2="497.03" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-4" x1="74.94" y1="491.04" x2="156.93" y2="482.42" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-5" x1="3.2" y1="569.74" x2="365.04" y2="531.7" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff1d25"/>
          <stop offset=".11" stop-color="#eb1a22"/>
          <stop offset=".32" stop-color="#b9151a"/>
          <stop offset=".63" stop-color="#690c0f"/>
          <stop offset="1" stop-color="#000"/>
        </linearGradient>
        <linearGradient id="linear-gradient-6" x1="125.68" y1="617.01" x2="749.88" y2="551.4" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-7" x1="147.5" y1="91.09" x2="386.61" y2="65.96" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-8" x1="159.93" y1="284.22" x2="744.5" y2="222.77" xlink:href="#linear-gradient"/>
      </defs>

      <path class="cls-6" d="m9.69,474.66c20-6,42,12,42,12l-13.98,13.43s-25.02-15.43-33.02-21.43"/>
      <path class="cls-1" d="m171.09,142.45c5.25,6.3,12.08,10.07,20.14,10.21.3,0,.61-.03.9-.12,8.2-2.45,25.78-17.99,37.56-23.88s27.19-32.59,37.23-38.58c.46-.27.97-.42,1.5-.44,12.48-.46,42.39-12.18,48.27-21.99s3-9,6-5,16,16,26,20,7,11,15,15,44.5-26.5,40.5-30.5-109-50-118-47-36,35-43,44c-6.6,8.48-62.08,61.41-72.18,74.56-.85,1.11-.81,2.66.08,3.73Z"/>
      <path class="cls-5" d="m6.69,467.66c2,2,21,14,23,28,8,8,35,27,42,38s20,18,20,18l60-10-16.7-32s-15.8,2.5-23.8-1.5-25-19-33-23c-6-7-19-18-35-22s-27.53-1-31.27,0-5.23,4.5-5.23,4.5Z"/>
      <path class="cls-7" d="m73.69,474.66c4.74,7.91,52,40,52,40l32-25s-12-5-22-7-19-10-23-13-18.96-11.04-26.98-8.52-15.02,8.52-12.02,13.52Z"/>
      <path class="cls-3" d="m2.19,544.16c15,10,97,34,108.5,39.5,12,1,69-6,79-6s34,6,45,10c17-2,24-8.9,42-14.45s82.27-31.16,88.64-31.85-36.14-43.2-52.14-41.2-159,24-173,30-4.23,9.09-25.12,9.54c-32.88,2.46-72.88-12.54-87.88-14.54-11,0-21,5.06-24.5,8.03s-3.5,7.97-.5,10.97Z"/>
      <path class="cls-2" d="m381.69,539.16c43-3,55,4.5,55,4.5,0,0,31,11.5,91,45.5s224.5,131.88,224.5,131.88v-147.64l-319.5-127.24s-72-28-113-19-83,36-99,45c-18,5-79,16-85,19s-18,8-20,17,1,22,7,27,40,4,55,1,29-10,38-13,37-3,50-3,34-12,36-11,4,10,15,18,24,21,26,22c0,0,12.87-10.02,52.94-10.51"/>
      <path class="cls-4" d="m153.09,139.45c5.25,6.3,12.08,10.07,20.14,10.21.3,0,.61-.03.9-.12,8.2-2.45,25.78-17.99,37.56-23.88s27.19-32.59,37.23-38.58c.46-.27.97-.42,1.5-.44,12.48-.46,42.39-12.18,48.27-21.99s3-9,6-5,16,16,26,20,7,11,15,15,44.5-26.5,40.5-30.5-109-50-118-47-36,35-43,44c-6.6,8.48-62.08,61.41-72.18,74.56-.85,1.11-.81,2.66.08,3.73Z"/>
      <path class="cls-8" d="m752.19,487.66c-30.5-25-129.5-115-155.5-148s-99-142-109-155-17.5-15.5-45.5-21.5-77-24-100-25c-24,4-61.19,7-79.1,0s-17.9-22-10.9-32,36-11,48-11,41-1,51-7,24.56-11.51,14.78-27.76-45.78-23.24-58.78-19.24-42.7,11.26-59.35,10.63-41.65-1.63-56.65,3.37-41,7-52-5-1-13.51,12.5-16.76,72.5-20.24,98.5-21.24S315.19,1.16,336.19.16s19.56,2.79,29.78,7.39,51.22,28.61,81.22,39.61,82,43,97,55,112,123,156,148c40,36,52,45.78,52,45.78v191.72Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: { type: Number, default: 700 },
  x: { type: Number, default: 0 },        // left offset in px
  y: { type: Number, default: 0 },        // top offset in px
  z: { type: [Number, String], default: 'auto' }, // z-index or 'auto'
  interactive: { type: Boolean, default: false }, // if true, pointer-events enabled
  idle: { type: Boolean, default: true } // enable small idle motion
});

const width = computed(() => props.width);
const height = computed(() => Math.round(width.value * 721.04 / 752.19));

const wrapStyle = computed(() => ({
  position: 'absolute',
  right: `${props.x}px`,
  top: `${props.y}px`,
  zIndex: props.z === 'auto' ? undefined : props.z,
  pointerEvents: props.interactive ? 'auto' : 'none',
  overflow: 'visible',
  lineHeight: 0,
  transform: 'translateZ(0)',
  /* small CSS variables to tune idle motion from parent if needed */
  '--idle-translate': '16px',
  '--idle-rotate': '1.2deg',
  '--idle-duration': '5s'
}));

const isIdle = computed(() => props.idle);
</script>

<style scoped>
.hand-wrap {
  /* default container styling, can be overridden by props */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* ensure svg children won't be clipped */
svg { overflow: visible; display: block; }

/* subtle idle motion */
@keyframes hand-idle {
  0%   { transform: translateY(0) rotate(0); }
  50%  { transform: translateY(calc(var(--idle-translate, 4px) * -1)) rotate(calc(var(--idle-rotate, 0.6deg) * -1)); }
  100% { transform: translateY(0) rotate(0); }
}

.hand-wrap.idle > svg {
  will-change: transform;
  animation-name: hand-idle;
  animation-duration: var(--idle-duration, 4s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transform-origin: 50% 50%;
}

/* svg classes (moved from svg <style> so framework doesn't strip them) */
.cls-1{fill:url(#linear-gradient-2)}
.cls-2{fill:url(#linear-gradient-6)}
.cls-3{fill:url(#linear-gradient-5)}
.cls-4{fill:url(#linear-gradient-7)}
.cls-5{fill:url(#linear-gradient-3)}
.cls-6{fill:url(#linear-gradient)}
.cls-7{fill:url(#linear-gradient-4)}
.cls-8{fill:url(#linear-gradient-8)}
</style>