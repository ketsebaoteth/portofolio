<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/comps/skillCard.vue -->
<template>
  <div class="justify-start p-4 flex-grow min-w-36 h-32 bg-background border border-[#f0efef] place-items-center justify-center text-foreground flex flex-col gap-4">
    <div class="flex flex-col place-items-center justify-center enimg gap-2">
      <slot />
      <h1>{{ props.title }}</h1>
    </div>
    
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

</script>

<style>
.enimg img{
  width: 40px !important;
  height: 40px !important;
}
</style>
