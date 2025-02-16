<template>
  <div class="w-full h-20 px-[33px]">
    <div class="w-full h-full flex border-x py-4 border-border place-items-center">
      <div class="flex w-full h-full place-items-center border-y border-border">
        <div class="name flex flex-col gap-0 overflow-hidden">
          <h1 class="font-bold to-left text-xl leading-6 flex text-accent-foreground place-items-center font-['Amita']">Ketsebaot Gizachew</h1>
          <div class="text-container to-left relative w-96 h-[1.0rem] overflow-hidden">
            <p
              class="text-xs absolute top-0 text-nowrap transition-transform duration-500"
              :class="showTime ? 'translate-y-[-2.0rem]' : ''"
            >
            Software Developer / UI UX Designer
            </p>
            <p
              class="text-xs absolute top-[1.6rem] transition-transform duration-500"
              :class="showTime ? 'translate-y-[-1.6rem]' : ''"
              v-html="localTimeMessage"
            ></p>
          </div>
        </div>
        
        <div class="links ml-auto h-fit flex place-items-center text-sm  pr-2 ">
          <div class="reactor px-5 py-2 h-full">
            <NuxtLink to="work">Projects</NuxtLink>
          </div>
          <div class="reactor px-5 py-2 h-full">
            <NuxtLink to="">Blog</NuxtLink>
          </div>
          <div class="reactor px-5 py-2 h-full">
            <NuxtLink to="">About</NuxtLink>
          </div>
          <div class="reactor px-5 py-2 h-full">
            <NuxtLink to="">Workshop</NuxtLink>
          </div>
          
          <div class="reactor px-5 py-2 h-full">
            <NuxtLink to="">Connect</NuxtLink>
          </div>
          <CompsBtn class="h-full rounded-none px-2" no-border @click="toggleTheme">
            <Icon name="tabler:sun" />
          </CompsBtn>
        </div>
  
        
  
      </div>
      
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';


function toggleTheme(){
  document.body.classList.toggle('dark');
}
const showTime = ref(false);
const localTimeMessage = ref("");
const developerTimeZone = "Africa/Addis_Ababa";

let timeUpdateInterval: number | null = null;
let toggleInterval: number | null = null;

/**
 * Fetch the current temperature (in °C) from an API (example: Open-Meteo).
 */
async function fetchTemperature(): Promise<number | null> {
  try {
    const latitude = 8.980603; // Addis Ababa latitude
    const longitude = 38.757760; // Addis Ababa longitude
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    return data.current.temperature_2m;
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}

/**
 * Updates the local time message to include both time and temperature.
 */
async function updateLocalTimeAndTemperature() {
  // Current time in developer's time zone
  const now = new Date();
  const devTime = new Intl.DateTimeFormat("en-US", {
    timeZone: developerTimeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);

  // Fetch temperature
  const temp = await fetchTemperature();

  // Build message
  if (temp !== null) {
    localTimeMessage.value = `Addis Ababa | <span class='font-bold'>${devTime}</span> | ${temp.toFixed(
      1
    )}°C`;
  } else {
    localTimeMessage.value = `Addis Ababa | <span class='font-bold'>${devTime}</span> | Temp unavailable`;
  }
}

onMounted(() => {
  // Initial update
  updateLocalTimeAndTemperature();

  gsap.fromTo('.to-left',{
    opacity: 0
  },{
    opacity: 1,
    duration: 4,
    ease: 'power2.out',
    stagger: 0.2
  })

  // Update time & temperature every minute (adjust as needed)
  timeUpdateInterval = setInterval(updateLocalTimeAndTemperature, 60_000);

  // Toggle text every 5 seconds (adjust as needed)
  toggleInterval = setInterval(() => {
    showTime.value = !showTime.value;
  }, 5000);
});

onUnmounted(() => {
  if (timeUpdateInterval !== null) clearInterval(timeUpdateInterval);
  if (toggleInterval !== null) clearInterval(toggleInterval);
});
</script>
