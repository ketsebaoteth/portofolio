<!-- filepath: /c:/Users/admin/Desktop/Portofolio/components/gemini/index.vue -->
<template>
  <div>
    <!-- Gemini button toggles geminiTab -->
    <div ref="Gemini" @click="openGeminiTab" class="gemini-base reactor bg-accent flex place-items-center justify-center">
      <img src="../../assets/gemini.svg" class="size-6" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { geminiTab } from '~/state';

const Gemini = ref<HTMLElement | null>(null);

function openGeminiTab() {
  geminiTab.value = true; // Sets geminiTab to true
  console.log("Gemini tab opened");
}

// Optional: small rotation on hover
onMounted(() => {
  if (Gemini.value) {
    const img = Gemini.value.querySelector("img");
    if (img) {
      Gemini.value.addEventListener("mouseover", () => {
        img.style.transition = "transform 0.4s ease-in-out";
        img.style.transform = "rotate(10deg)";
      });
      Gemini.value.addEventListener("mouseleave", () => {
        img.style.transform = "rotate(0)";
      });
    }
  }
});
</script>

<style scoped>
.gemini-base {
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.size-6 {
  width: 24px;
  height: 24px;
}
</style>
