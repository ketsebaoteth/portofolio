<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/projects/index.vue -->
<template>
  <div ref="projectCard" class="w-full h-[580px] bg-background border-y border-border p-4 py-0 flex">
    <div class="content w-1/2 h-full flex place-items-end justify-start project py-3 border-r border-border">
      <div
        class="openworklink border border-border size-12 reactor flex place-items-center justify-center rounded-full bg-background"
      >
        <Icon name="tabler:arrow-up-right" class="text-foreground size-6" />
      </div>
    </div>
    <div class="details w-1/2 flex flex-col p-8 py-8 gap-4 text-foreground">
      <div class="daterange flex place-items-center gap-2">
        <div class="reddote size-2 bg-accent-foreground rounded-full"></div>
        {{ props.date }}
      </div>
      <h1 class="text-3xl font-semibold">{{ props.title }}</h1>
      <p class="text-sm text-muted-foreground">
        <slot />
      </p>
      <div class="flex gap-1">
        <div v-for="tag in props.tags" :key="tag" class="flex gap-2">
          <CompsBtn no-border class="bg-muted py-2 px-3">
            <p class="text-xs">{{ tag }}</p>
          </CompsBtn>
        </div>
      </div>

      <div class="flex gap-3 mt-auto">
        <div class="flex gap-2">
          <CompsBtn no-border v-for="item in props.stack" :key="item" class="flex gap-2">
            <Icon :name="item" class="size-5 text-foreground" />
          </CompsBtn>
        </div>
        <CompsActionbtn class="px-4 ml-auto bg-foreground text-background">
          Open Cosmos
        </CompsActionbtn>
        <CompsBtn class="flex place-items-center gap-2 px-2">
          <Icon name="tabler:brand-github" class="size-5" />
        </CompsBtn>
      </div>
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
