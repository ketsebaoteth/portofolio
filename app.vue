<!-- filepath: /c:/Users/admin/Desktop/Portofolio/app.vue -->
<template>
  <div id="app">
    <NuxtPage />
    <Fol />
    <Trans />
    <Load />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  // This ensures the code runs only on the client.
  if (typeof window !== 'undefined') {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#app'),
      smooth: true,
      lerp: 0.04, // Lower values give a smoother scroll
    });
  }
});
</script>

<style>
/* Replace the cursor with a custom SVG cursor */
* {
  @apply font-Neue;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='black' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mouse-pointer-2'><path d='M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z'/></svg>"), auto;
}
</style>
