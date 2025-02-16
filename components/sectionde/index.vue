<template>
  <div class="w-screen mt-8 h-fit flex flex-col text-foreground px-[33px]">
    <div class="w-full h-full bg-accent-foreground p-8 flex flex-col gap-4">
      <h1 class="text-[120px] leading-[110px] tracking-tight uppercase">Power And Influence</h1>
      <div class="flex flex-wrap">
        <img v-for="img in imgs" :src="img" class="w-[400px] h-[500px]" alt="">
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imgs = ref(['https://i.pinimg.com/736x/db/93/f3/db93f3169edbda9f7472ac32673735c0.jpg','https://i.pinimg.com/736x/56/b0/75/56b0754497913f46669304bc165b2b83.jpg','https://i.pinimg.com/736x/10/77/63/107763e15e4d610f20593920378f3c6a.jpg'])
</script>
