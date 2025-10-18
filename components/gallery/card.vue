
<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
    title: { type: String, default: '' },
    src: { type: String, default: '' },
    appsUsed: { type: Array as () => string[], default: () => [] },
})

onMounted(() => {});
</script>

<template>
  <div>
    <img :src="props.src" alt="" class="w-[390px] h-[500px]">
    <p class="text-lg  mt-2">{{ props.title }}</p>
  </div>
</template>

<style lang="css" scoped>
</style>
