<template>
  <div class="h-[calc(100vh-80px)] px-8 border border-border w-screen flex place-items-end">
    <div class="w-full h-full border-x border-border flex">
      <div class="flex flex-col h-fit mt-auto mb-8 gap-2 text-xl border-y border-border">
        <div class="socials flex gap-1 place-items-center">
          <CompsBtn no-border class="quickbtn">
            <Icon name="tabler:brand-x" class="size-5" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="tabler:brand-instagram" class="size-5" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-discord" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-linkedin" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-github" />
          </CompsBtn>
          <p class="text-sm quickbtn reactor flex gap-2 px-2 py-1 rounded-md">
            ketsebaot.vibes@gmail.com
          </p>
        </div>
  
        <p class="max-w-[300px] description ml-2 text-[14px] leading-tight">
          I combine technical expertise and creative vision to build effective web
          solutions.
        </p>
        <h1
          class="main-text tracking-tighter text-[70px] place-items-center font-semibold max-w-[620px] leading-[70px] inline-block"
        >
          Building <span class="bg-clip-text text-accent-foreground ">Quality</span>, Line by Line.
        </h1>
  
        <div class="flex">
          <CompsActionbtn class="letstalk text-nowrap bg-gradient-to-b from-[#3b3b3b] to-accent">Let's Connect</CompsActionbtn>
          <div
            class="reactor flex place-items-center justify-center p-2 border-2 border-accent rounded-full"
          >
            <Icon name="tabler:arrow-up-right" class="text-accent size-5" />
          </div>
        </div>
      </div>
      <div class="w-1/2 h-full pb-8">
        <div class="w-full border border-t-0 border-border border-r-0 h-full flex place-items-end justify-end">
          <Gemini />
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import SplitType from "split-type";
import { onMounted } from "vue";

onMounted(() => {
  // Split the text into words and characters.
  const mainTextSplit = new SplitType(".main-text", {
    types: "words, chars",
    wordClass: "word",
    charClass: "char"
  });

  gsap.fromTo(".letstalk",{
    opacity: 0,
    width: 0,
    x: -20,
  },{
    opacity: 1,
    duration: 0.5,
    ease: "power1.out",
    width: "auto",
    stagger: 0.1,
    delay: 8,
    x:0
  })

  const descriptionSplit = new SplitType(".description", {
    types: "words, chars",
    wordClass: "word",
    charClass: "char"
  });

  gsap.fromTo(".quickbtn",{
    opacity: 0,
    x: -20
  },{
    opacity: 1,
    x: 0,
    duration: 0.4,
    stagger: 0.1,
    delay: 8,
  })
  // Animate each character with a stagger.
  gsap.fromTo(
    ".word",
    { opacity: 0, y: 40, scaleY: 0, },
    { opacity: 1, y: 0, duration: 0.6, scaleY: 1, stagger: 0.03,ease: "back.out", delay:9.6 }
  );
});
</script>
