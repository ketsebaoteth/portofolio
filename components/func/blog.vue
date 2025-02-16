<template>
  <div ref="blogdiv" class="w-full relative h-fit border-t border-border py-4 px-[33px] flex place-items-center">
    <div class="flex gap-[33px] place-items-center z-[40]">
      <h1 class="text-[70px] w-[400px] leading-[100px]">{{ props.title }}</h1>
      <p class="max-w-[400px] text-sm text-foreground">{{ props.des }}</p>
    </div>
    <div class="hoveranimate z-[10] absolute bg-accent-foreground top-0 left-0 w-full h-full scale-y-0">

    </div>
    <Icon name="i-tabler:arrow-right" class="size-16 z-[20] arrow ml-auto text-accent-foreground" :stroke-width="0.5" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "The Craft"
  },
  des: {
    type: String,
    required: true,
    default: "We explore the elegance of code.  Not just its function, but its form.  This isn't about answers, but the questions that drive us.  Join us as we refine the craft, one line at a time.  Discover the potential.  This is The Craft"
  }
})

const blogdiv = ref(null);

onMounted(() => {
  const accentForeground = getComputedStyle(document.documentElement).getPropertyValue('--accent-foreground').trim();

  blogdiv.value.addEventListener('mouseenter', () => {
    gsap.to(blogdiv.value.children[1], {
      scaleY: 1,
      duration: 0.4,
      ease: 'power2.inOut(2.8)',
      delay: 0.3,
    });
    gsap.to(blogdiv.value.querySelector('.arrow'), {
      rotate: -45,
      backgroundColor: "black",
      duration: 0.4,
      ease: 'power2.inOut(2.8)',
      delay: 0.3,
    });
  });

  blogdiv.value.addEventListener('mouseleave', () => {
    gsap.to(blogdiv.value.children[1], {
      scaleY: 0,
      duration: 0.4,
      ease: 'power2.inOut(2.8)',
      delay: 0.3,
    });
    gsap.to(blogdiv.value.querySelector('.arrow'), {
      rotate: 0,
      duration: 0.4,
      backgroundColor: `hsl(${accentForeground})`, // Use the resolved HSL value
      ease: 'power2.inOut(2.8)',
      delay: 0.3,
    });
  });
});
</script>
