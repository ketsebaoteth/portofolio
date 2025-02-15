import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useLocomotiveScroll() {
  const scrollX = ref(0)
  const scrollY = ref(0)
  let locoScroll = null

  onMounted(async () => {
    if (typeof window !== 'undefined') {
      await nextTick() // Wait for the DOM to be fully rendered

      // Dynamically import Locomotive Scroll
      const { default: LocomotiveScroll } = await import('locomotive-scroll');

      locoScroll = new LocomotiveScroll({
        el: document.querySelector('#smooth'),
        smooth: true,
        // Additional options as needed
      })

      // Listen for Locomotive Scroll updates
      locoScroll.on('scroll', (instance) => {
        scrollX.value = instance.scroll.x
        scrollY.value = instance.scroll.y
      })
    }
  })

  onUnmounted(() => {
    if (locoScroll) {
      locoScroll.destroy()
      locoScroll = null
    }
  })

  return { scrollX, scrollY }
}
