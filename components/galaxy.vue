<script setup lang="ts">
import galaxyImage from '@/assets/asset3.svg';

let iamhere = ref(true)
</script>

<template>
<client-only>
 <div v-if="iamhere" class="absolute right-[-200px] top-[180px] w-[600px] h-[500px] rotate-[78deg]">
    <img :src="galaxyImage" alt="Galaxy">
  </div>
</client-only>
 
</template>

