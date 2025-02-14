<template>
  <div class="bottom-10 right-12 z-50 border">
    <!-- Tip: Let the extra callout be shown only when geminiTab is false -->
    <div :class="{'opacity-0': state.geminiTab}" class="absolute transition-all duration-1000 info -top-16 -left-12 flex flex-col gap-5 -rotate-[30deg]">
      <span class="w-32 font-bold">Ask Gemini About Me!</span>
    </div>

    <!-- Toggle 'open-tab' to animate from small circle to large panel -->
    <div
      ref="Gemini"
      @click="openGeminiTab"
      class="flex place-items-center justify-center"
      :class="['gemini-base reactor', state.geminiTab ? 'open-tab' : '']"
    >
      <div :class="{'opacity-0 pointer-events-none absolute': state.geminiTab}">
        <img src="../../assets/gemini.svg" class="size-6" alt="" />
      </div>
      <div class="content absolute w-full h-full p-3 flex flex-col text-white" :class="{'content-visible': state.geminiTab}">
        <div class="w-full flex place-items-center">
          <div class="flex gap-1 text-xs place-items-center h-5">
            Powered By <img src="../../assets/geminiLarge.svg" class="-mt-1" alt="">
          </div>
            <button class="p-[2px] ml-auto hover:bg-white" @click.stop="closeGeminiTab">
              <Icon name="tabler:x" />
            </button>
        </div>
        <div class="chat w-full h-full">

        </div>
        <div class="sendbar h-9 w-full flex place-items-center gap-2">
          <input type="text" class="w-full h-full text-sm bg-accent-foreground py-5 px-5 rounded-lg cursor-text text-white" placeholder="Ask Something About Ketsebaot" />
          <button class="p-2 rounded-md absolute right-4 bg-foreground">
            <img src="../../assets/gemini.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { state } from '~/state';

const Gemini = ref<HTMLDivElement | null>(null);

function openGeminiTab() {
  state.value.geminiTab = true;
}

function closeGeminiTab(){
  state.value.geminiTab = false;
}

// Optional: Add a small rotation on hover
onMounted(() => {
  if (Gemini.value) {
    const img = Gemini.value.querySelector("img");
    if (img) {
      Gemini.value.addEventListener("mouseover", () => {
        img.style.transition = "transform 0.4s ease-in-out";
        img.style.transform = "rotate(10deg)";
      });
      Gemini.value.addEventListener("mouseleave", () => {
        img.style.transition = "transform 0.4s ease-in-out";
      });
    }
  }
});
</script>

<style scoped>
/* Base circle form and transition.
   Setting width/height here gives the browser a clear starting point to animate from. */
.gemini-base {
  @apply w-12 h-12 p-2 bg-accent shadow-2xl;
  border-radius: 50%; /* Initial roundedness */
  transition: all 1.1s cubic-bezier(.82,-0.26,.38,1.23);
  cursor: pointer;
}

/* Expanded form: animated to w-96/h-96 plus a more rectangular corner radius */
.open-tab {
  @apply w-[500px] h-[550px] rounded-md;
  border-radius: 0.375rem; /* Tailwind's rounded-md value */
}

.content {
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease-in-out;
}

.content-visible {
  opacity: 1;
  pointer-events: auto;
}
</style>
