<script setup>
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
  <div>
    <GeminiTab />
    <div v-locomotive id="smooth">
      <div class="sticky top-0 opacity-0 -z-50 page scale-[0.95]">
        <Nav />
        <Hero />
      </div>
      <Fol />
      <Trans />
      <Load />
      <Sectionde />
      <Section1 />
      <Sectionblog />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  </div>
    
</template>
