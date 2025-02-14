<template>
  <button :class="{'border-none': props.noBorder}" class="reactor p-2 flex place-items-center justify-center border-border border rounded-lg">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  noBorder: Boolean,
})
</script>
