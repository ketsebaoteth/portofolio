<script setup lang="ts">
import forsiteImage from '~/assets/forsite.jpg';
</script>

<template>
  <div class="h-fit w-screen px-[33px]">
    <svg class="absolute z-0 h-[474.19px] w-[900px] -ml-72 -mt-10" id="Layer_7" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664 474.19">
  <path class="ccl-1" d="m77.5,197.69l276-120c8.64-4.4-26.46,69.01-29.59,78.19l-36.41,107.81c-6.83,20.02,27.97,39.54,45,27l118-49c6.97-5.13,106.51-54.52,105-46l31,201"/>
</svg>
    <div class="py-32 flex place-items-center">
      <h1 class="text-[120px] font-black leading-[100px] z-10">Read Something</h1>
      <p class="max-w-[200px] fit mt-8 ml-5">
        Blogs that dive deep into the world of code, design, and development.
      </p>
    </div>
    <div class="w-full flex flex-col gap-52 border-x border-border">
      <FuncBlog />
      <FuncBlog title="Clean Design" :tags="['Design', 'UI/UX']" :bannerimg="forsiteImage" />
      
    </div>
    <div class="py-24 border-x border-border">
      <div class="w-full  bgspec flex place-items-center justify-center py-44">
        <CompsActionbtn >
          Explore Blogs
        </CompsActionbtn>
      </div>
    </div>
    

  </div>
</template>

<style scoped>
      .ccl-1 {
        fill: #fff;
        stroke: #e20622;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 155px;
      }
</style>