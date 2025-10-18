<template>
  <div class="w-screen mt-8 h-fit flex flex-col text-foreground px-[33px]">
    <div class="w-full h-full bg-[#e20622] p-8 flex flex-col gap-32">
      <div class="flex flex-wrap">
        <div v-for="img in imgs" >
          <gallery-card :src="img.src" :title="img.title" />
        </div>
      </div>
      <div class="flex w-full">
        <h1 class="text-[120px] leading-[110px] tracking-tight uppercase">08</h1>
        <h1 class="text-[120px] leading-[110px] tracking-tight uppercase ml-auto">Gallery</h1>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imgs = ref(
  [
    {'src':'https://i.pinimg.com/1200x/2f/e6/de/2fe6de5266005a66aa88fb8be98708a8.jpg', 'title': 'placeholder'},
    {'src':'https://i.pinimg.com/736x/fe/d8/53/fed853bab64498decb100da0d5d595e5.jpg', 'title': 'placeholder'},
    {'src':'https://i.pinimg.com/736x/54/ce/9a/54ce9a6d135177c70a79b133483f2833.jpg', 'title': 'placeholder'},
    {'src':'https://i.pinimg.com/736x/93/ed/cc/93edcc447d5cac8382402fefc754b8ec.jpg', 'title': 'placeholder'},
  ]
)
</script>
