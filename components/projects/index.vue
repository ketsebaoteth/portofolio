<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/projects/index.vue -->
<template>
  <div ref="projectCard" class="w-full h-[580px] bg-white border-y border-border p-4 py-0 flex">
    <div class="content w-[60%] h-full flex place-items-end justify-start project py-3 border-r border-border">
      <div
        class="openworklink border border-border size-12 reactor flex place-items-center justify-center rounded-full bg-background"
      >
        <Icon name="tabler:arrow-up-right" class="text-foreground size-6" />
      </div>
    </div>

    <div class="details border-l border-muted w-[40%] flex flex-col p-8 pr-4 py-8 gap-4 text-foreground">
      <div class="nav flex">
        <div class="daterange text-sm flex place-items-center gap-2">
          {{ props.date }}
        </div>
        <CompsBtn class="flex place-items-center ml-auto gap-2 px-2">
          <Icon name="tabler:brand-github" class="size-5" />
        </CompsBtn>
      </div>
      
      <h1 class="text-3xl font-semibold">{{ props.title }}</h1>
      <p class="text-sm text-muted-foreground">
        <slot />
      </p>
      
      <div class="flex gap-1 flex-wrap">
        <div v-for="tag in props.tags" class="text-accent-foreground px-1">
          <p class="text-xs"># {{ tag }}</p>
        </div>
      </div>
        
      <CompsActionbtn class="px-4 mt-auto w-full flex py-3 place-items-center justify-center gap-2 bg-gradient-to-b from-[#3b3b3b] to-accent text-accent-foreground">
        Read More
        <Icon name="i-tabler:arrow-right" class="size-5" />
      </CompsActionbtn>
      
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  date: {
    type: String,
    required: true,
    default: "Mar-2021 - Present",
  },
  title: {
    type: String,
    required: true,
    default: "Title",
  },
  description: {
    type: String,
    required: true,
    default: "Description",
  },
  stack: {
    type: Array,
    required: true,
    default: [],
  },
  tags: {
    type: Array,
    required: true,
    default: [],
  },
});

const projectCard = ref(null);

onMounted(() => {
  gsap.to(projectCard.value, {
    width: "100%",
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: projectCard.value,
      start: "top bottom", // when the top of the trigger hits the bottom of the viewport
      end: "bottom top", // when the bottom of the trigger hits the top of the viewport
      scrub: true, // link the animation to the scrollbar for smooth control
      invalidateOnRefresh: true, // re-calculate on refresh,
      marker: true,
    }
  });
});
</script>
