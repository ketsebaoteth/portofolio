<template>
  <div class="w-screen relative mt-8 h-fit flex flex-col text-foreground px-[33px] !text-[#360219 ]">
    <div class="w-full h-full bgra-3 p-8 flex flex-col gap-32">
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
<svg id="Layer_6" data-name="Layer 6" class="w-20 slowelyrotate absolute -bottom-[40px] left-1/2 -translate-x-1/2 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-10 -10 160 160">
  <defs>
    <linearGradient id="linear-gradient" x1="5.71" y1="43.86" x2="138.29" y2="100.14" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff4247"/>
      <stop offset=".49" stop-color="#f5262d"/>
      <stop offset="1" stop-color="#97252c"/>
    </linearGradient>
  </defs>
  <circle class="gra-3" cx="72" cy="72" r="78" fill="white"/>
  <circle class="gra-2" cx="72" cy="72" r="72"/>
  <polygon class="gra-1 " points="43 52 54 54 51 62 44 54 45 64 39 65 41 56 34 61 30 54 37 53 30 50.19 34 44 41 51 39 41 46.04 41 43 51 51 44 54 50.96 43 52"/>
  <polygon class="gra-1" points="94 50 105 52 102 60 95 52 96 62 90 63 92 54 85 59 81 52 88 51 81 48.19 85 42 92 49 90 39 97.04 39 94 49 102 42 105 48.96 94 50"/>
  <ellipse class="gra-1" cx="69" cy="86.5" rx="9" ry="8.5"/>
  <ellipse class="gra-1" cx="69" cy="103.5" rx="9" ry="8.5"/>
  <rect class="gra-1" x="60" y="85" width="18" height="20"/>
</svg>
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

<style>
      .gra-1 {
        fill: #00050b;
      }

      .gra-2 {
        fill: #e20622;
      }
      .slowelyrotate {
        animation: slowelyrotate 5s linear infinite;
      }
      .bgra-3 {
      background: #FF94B2;
background: linear-gradient(180deg, rgba(255, 148, 178, 1) 0%, rgba(242, 68, 85, 1) 27%, rgba(229, 32, 58, 1) 75%, rgba(102, 15, 36, 1) 100%);
      }
      @keyframes slowelyrotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
</style>

