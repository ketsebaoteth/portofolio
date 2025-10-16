<script setup lang="ts">
import galaxyImage from '@/assets/asset3.svg';
</script>

<template>
<client-only>
 <div class="absolute right-[-200px] top-[180px] w-[600px] h-[500px] rotate-[78deg]">
    <img :src="galaxyImage" alt="Galaxy">
  </div>
</client-only>
 
</template>