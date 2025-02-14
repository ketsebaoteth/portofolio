import { ref, onMounted, onUnmounted } from 'vue';

export function useLocomotiveScroll() {
  const scrollX = ref(0);
  const scrollY = ref(0);
  let locomotiveScroll = null;

  onMounted(() => {
    // Only run on the client
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((module) => {
        const LocomotiveScroll = module.default;
        locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector('#app'),
          smooth: true,
          lerp: 0.05,
        });

        locomotiveScroll.on('scroll', (instance) => {
          scrollX.value = instance.scroll.x;
          scrollY.value = instance.scroll.y;
        });
      });
    }
  });

  onUnmounted(() => {
    if (locomotiveScroll) {
      locomotiveScroll.destroy();
    }
  });

  return { scrollX, scrollY };
}
