<!-- filepath: /c:/Users/admin/Desktop/Portofolio/app.vue -->
<template>
  <div id="app">
    <!-- Keep Blurcover outside #smooth so it won't scroll -->
    <div v-locomotive id="smooth">
      <NuxtPage />
      <Fol />
      <Trans />
      <Load />
    </div>

  </div>
</template>

<script setup>
// No changes needed here for Locomotive Scroll
</script>

<style>
/* Example fixed positioning */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Custom cursor */
* {
  @apply font-Neue;
  cursor: url("data:image/svg+xml;utf8,<svg ... ></svg>"), auto;
}
</style>
