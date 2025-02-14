<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/load.vue -->
<template>
  <div
    ref="loader"
    class="absolute top-0 px-10 left-0 w-screen h-screen py-8 bg-background flex items-end pointer-events-none"
  >
    <div class="w-full h-full border border-border  pb-0 flex flex-col gap-5 justify-end">
      <h1
        ref="typingText"
        class="text-[20px] font-bold text-foreground"
      >
        Loading
      </h1>
      <p
        ref="percentText"
        class="text-[110px] leading-[100px] font-bold text-foreground !font-['Amita']"
      >0%</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import SplitType from 'split-type'

const loader = ref(null)
const typingText = ref(null)
const percentText = ref(null)
const shape1 = ref(null)
const shape2 = ref(null)

onMounted(() => {
  // --------- Animate "Loading..." text with a typing effect -----------
  const split = new SplitType(typingText.value, { types: 'chars' })
  gsap.set(split.chars, { opacity: 0, y: 20 })
  gsap.to(split.chars, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out'
  })

  // --------- Animate percent counting from 0% to 100% -----------
  const percentageObj = { value: 0 }
  gsap.to(percentageObj, {
    value: 100,
    duration: 4,
    ease: 'power1.inOut',
    onUpdate: () => {
      percentText.value.textContent = `${Math.round(percentageObj.value)}%`
    },
    onComplete: () => {
      gsap.to(loader.value, {
        opacity: 0,
        duration: 1,
        ease: 'power1.out'
      })
    }
  })

  // --------- Animate Shapes -----------
  gsap.fromTo(shape1.value,
    { opacity: 0, scale: 0, y: -20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.5 }
  )
  gsap.fromTo(shape2.value,
    { opacity: 0, scale: 0, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.7 }
  )
})
</script>

<style scoped>
.char {
  display: inline-block;
}
</style>
