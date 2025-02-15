// filepath: /c:/Users/admin/Desktop/Portofolio/components/workstrans.vue
<template>
  <div
    ref="workTransRef"
    class="fixed page-trans opacity-0 flex som top-0 left-0 h-screen w-screen pointer-events-none"
  >
    <div
      class="h-full flex-grow bg-accent-foreground"
      v-for="(i, index) in divsCount"
      :key="index"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const divsCount = ref(5);

</script>
