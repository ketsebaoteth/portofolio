<script setup>
import { ref } from 'vue'
import { Smoothie } from "vue-smoothie";
import {gsap} from "gsap";
import {onMounted} from "vue";

onMounted(() => {
  gsap.to(".page", {
    scale: 1,
    duration: 0.5,
    delay: 9.8,
    opacity: 1,
    ease: "power1.out",
  });
})
</script>

<template>
    <div class="sticky top-0 opacity-0 -z-50 page scale-[0.95]">
      <Nav />
      <Hero />
    </div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
    
</template>
