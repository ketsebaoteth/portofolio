<template>
  <ClientOnly>
    <div class="work-page">
      <div class="w-screen h-screen">
        <p>Works page</p>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'custom-flip',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('Before enter...')
    },
    onEnter: (el) => {
      console.log('Entering...')
    },
    onAfterEnter: (el) => {
      console.log('After enter...')
    }
  }
})
</script>
