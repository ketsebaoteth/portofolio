<template>
  <div id="app">
    <NuxtPage :transition="pageTransition" />
    <Workstrans />
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { useRoute } from "vue-router"

const route = useRoute();

const pageTransition = {
  name: 'page',
  mode: 'out-in',
  onEnter: (el, done) => {
    console.log("On enter of a page called");
    if (route.path !== '/') {
      gsap.to(".page-trans", {
        opacity: 1,
        duration: 0.1,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".page-trans", {
              opacity: 0,
              duration: 0.5,
              onComplete: done
            });
          }, 500); // Adjust delay as needed
        }
      });
    } else {
      done(); // Skip animation on home page
    }
  },
  onLeave: (el, done) => {
    done(); // Ensure onLeave is always called
  }
}
</script>

<style>
* {
  @apply font-Neue;
  cursor: url("data:image/svg+xml;utf8,<svg ... ></svg>"), auto;
}
</style>
