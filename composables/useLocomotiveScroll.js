// filepath: /c:/Users/admin/Desktop/Portofolio/composables/useLocomotiveScroll.js
import { ref, onMounted, onUnmounted } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

export function useLocomotiveScroll() {
  const scrollX = ref(0)
  const scrollY = ref(0)
  let locoScroll = null
  console

  onMounted(() => {
    if (typeof window !== 'undefined') { // Check if we're on the client-side
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
