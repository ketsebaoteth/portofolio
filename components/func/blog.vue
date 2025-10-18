<template>
  <div class="w-full  h-[300px] border-t border-border py-4 px-[33px] flex gap-8 place-items-center">
    <div class="flex  z-[40]">
      <div class="flex flex-col gap-5">
        <p class="max-w-[400px] text-[18px] text-foreground">{{ props.datewritten }}</p>
        <h1 class="text-[60px] leading-[50px] font-bold">{{ props.title }}</h1>
        <p class="max-w-[400px] text-[18px] text-foreground">{{ props.timetoread }} min read</p>
        <p class="max-w-[400px] text-[18px] text-foreground">{{ props.des }}</p>
        <div class="flex gap-2 mt-4">
          <div v-for="(tag, index) in props.tags" :key="index" class="bg-[#e20622] px-5 py-3 rounded-full">
            <span class="text-[14px] rounded-full font-semibold text-foreground">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <img :src="props.bannerimg" class="w-full z-10 h-[400px] object-cover" alt="">
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
  },
  timetoread: {
    type: Number,
    required: false,
    default: 5
  },
  datewritten: {
    type: String,
    required: false,
    default: "Jan 1, 2024"
  },
  bannerimg: {
    type: String,
    required: false,
    default: "https://i.pinimg.com/736x/dc/bb/ff/dcbbff2d0b5ff620a073f67d2d17dc03.jpg"
  },
  tags: {
    type: Array,
    required: false,
    default: () => ["Design", "Code", "Development"]
  }
})

// const blogdiv = ref(null);

// onMounted(() => {
//   const accentForeground = getComputedStyle(document.documentElement).getPropertyValue('--accent-foreground').trim();

//   blogdiv.value.addEventListener('mouseenter', () => {
//     gsap.to(blogdiv.value.children[1], {
//       scaleY: 1,
//       duration: 0.4,
//       ease: 'power2.inOut(2.8)',
//       delay: 0.3,
//     });
//     gsap.to(blogdiv.value.querySelector('.arrow'), {
//       rotate: -45,
//       backgroundColor: "black",
//       duration: 0.4,
//       ease: 'power2.inOut(2.8)',
//       delay: 0.3,
//     });
//   });

//   blogdiv.value.addEventListener('mouseleave', () => {
//     gsap.to(blogdiv.value.children[1], {
//       scaleY: 0,
//       duration: 0.4,
//       ease: 'power2.inOut(2.8)',
//       delay: 0.3,
//     });
//     gsap.to(blogdiv.value.querySelector('.arrow'), {
//       rotate: 0,
//       duration: 0.4,
//       backgroundColor: `hsl(${accentForeground})`, // Use the resolved HSL value
//       ease: 'power2.inOut(2.8)',
//       delay: 0.3,
//     });
//   });
// });
</script>
