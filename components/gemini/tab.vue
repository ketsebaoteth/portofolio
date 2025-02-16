<template>
  <div class="overlay backdrop-blur-sm p-8 pointer-events-none absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#00000065] to-[#000000a2] opacity-0 z-10 flex items-center justify-center">
    <div class="content w-[900px] h-full p-2 bg-background" ref="content">
      <div class="w-full h-full border border-border flex flex-col">
        <div class="nav w-full h-12 flex border-b border-border">
          <div class="flex place-items-center px-4 border-r border-border gap-1">
            <p class="text-xs">Powered By </p>
            <img src="../../assets/geminiLarge.svg" class="size-12 -mt-1" alt="">
          </div>
          <div @click="closeGeminiTab" class="ml-auto h-full flex place-items-center justify-center w-12 border-l border-border cursor-pointer">
            <Icon name="tabler:x" />
          </div>
        </div>
        <div class="content w-full h-full flex place-items-center justify-center text-sm text-muted-foreground">
          This is Not Ready Yet
        </div>
        <div class="write w-full h-12 border-t border-border flex place-items-center mt-auto p-2">
          <input placeholder="Ask Something About Ketsebaot" type="text" class="h-full text-xs font-['Inter'] w-full bg-[#e6e6e6] dark:bg-[#1f1f1f] px-2 outline-none border border-transparent focus-within:border-border" >
          <CompsBtn class="h-full rounded-none px-2 bg-white border-l border-border dark:bg-[#1f1f1f]" no-border>
            <img src="../../assets/gemini.svg" alt="">
          </CompsBtn>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { geminiTab } from '~/state';
import { watch, ref, onMounted } from 'vue';
import gsap from 'gsap';

const content = ref(null);

watch(geminiTab, (value) => {
  console.log("geminiTab changed:", value);
  if (value) {
    gsap.to(".overlay", {
      duration: 0.5,
      opacity: 1,
      pointerEvents: "all",
      ease: "power4.inOut",
    });
    gsap.to(content.value, {
      duration: 0.2,
      scale: 1,
      ease: "power4.inOut",
    });
  } else {
    gsap.to(".overlay", {
      duration: 0.5,
      opacity: 0,
      pointerEvents: "none",
      ease: "power4.inOut",
    });
    gsap.to(content.value, {
      duration: 0.5,
      scale: 0.9,
      ease: "power4.inOut",
    });
  }
});

function closeGeminiTab() {
  geminiTab.value = false;
}

onMounted(() => {
  // Initially position the content off-screen to the bottom
  gsap.set(content.value, {
    scale: 0.9,
  });
});
</script>

<style scoped>
.overlay {
  opacity: 0; /* ensure overlay is initially hidden */
}
</style>
