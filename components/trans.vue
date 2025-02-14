<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/trans.vue -->
<template>
  <div class="absolute gen-cover top-0 bg-background left-0 w-screen h-screen">
    <div class="absolute cover top-0 left-0 w-screen h-screen"></div>
    <div class="absolute full-cover opacity-0 scale-[0.9] scale-x-[0.95] flex overflow-hidden cover2 top-0 left-0 w-screen h-screen">
      <div v-for="(div, index) in divs" :key="index" class="h-full gop flex-grow bg-accent-foreground" />
      <h1 class="absolute welcome text-nowrap opacity-0 top-1/2 left-1/2 z-50 font-extrabold -translate-x-1/2 -translate-y-1/2 text-foreground text-[90px]">
        Ketsebaot Gizachew
      </h1>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const divs = ref(5);
const fullAnimationDelay = 6; // Define the full animation delay variable

onMounted(() => {
  const split = new SplitType('.welcome', {
    types: 'chars',
    charClass: 'welcomechars opacity-0 transform translate-y-20 scale-50 !font-["Amita"]',
  });
  
  gsap.to('.gen-cover', {
    duration: 6,
    backgroundColor: 'transparent',
    ease: 'back.inOut',
    delay: fullAnimationDelay,
  });
  
  // Animate full-cover sequentially: first opacity then scale
  const fullCoverTl = gsap.timeline();
  fullCoverTl
    .to('.full-cover', {
      duration: 1,
      opacity: 1,
      ease: 'power1',
      delay: fullAnimationDelay,
    })
    .to('.full-cover', {
      duration: 0.8,
      scale: 1,
      ease: 'back.in(8.5)',
    });
  
  gsap.set('.welcome', {
    opacity: 1,
  });
  
  gsap.to('.welcomechars', {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    y: 0,
    stagger: 0.05,
    delay: 2 + fullAnimationDelay,
    ease: 'power3.out',
    onComplete: () => {
      gsap.set('.gen-cover',{
        pointerEvents: 'none',
      })
    }
  });
  
  gsap.to('.cover', {
    duration: 1,
    height: 0,
    top: -50,
    ease: 'power3.inOut',
    delay: 3.4 + fullAnimationDelay,
  });
  
  gsap.to('.gop', {
    duration: 0.7,
    height: 0,
    top: -50,
    ease: 'power3.inOut',
    stagger: 0.1,
    delay: 3.2 + fullAnimationDelay,
  });
  
  gsap.to('.welcome', {
    duration: 0.8,
    opacity: 0,
    top: -50,
    ease: 'power3.inOut',
    delay: 3.2 + fullAnimationDelay,
  });
});
</script>
