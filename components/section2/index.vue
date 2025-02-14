<template>
  <div class="h-fit bg-background  flex flex-col gap-8 px-[33px] place-items-center justify-center">
    <div class="border border-border w-full flex flex-col gap-8 py-8">
      
      <div class="bento w-full flex flex-col gap-4 h-screen py-8">
        <div class="flex gap-4">
          <div class="location&socials relative p-4 h-80 min-w-[400px] flex-grow border border-border border-l-0">
            <img src="../../assets/loc.png" class="absolute z-0 top-0 left-0 w-full h-full" alt="">
            
            <div class="px-3 absolute z-20 py-2 w-fit gap-1 flex place-items-center rounded-full bg-accent text-accent-foreground">
              <Icon name="i-tabler:map-pin-filled" class="size-4" />
              <p class="text-xs">Location</p>
            </div>
          </div>
          <div class="latestTweetblogs flex flex-col h-80 flex-grow gap-4">
            <div class="thexweet p-4 w-full flex flex-col gap-2 flex-grow border border-border">
              <div class="px-3 z-20 py-2 w-fit gap-1 flex place-items-center rounded-full bg-accent text-accent-foreground">
                <Icon name="i-tabler:brand-x" class="size-4" />
              </div>
              <FuncTweet />
            </div>
            
            <div class="readblog flex place-items-center reactor text-lg mt-auto w-full py-4 border border-border px-4 box-border">
              Read Latest Blog's
              <Icon name="i-tabler:arrow-right" class="size-6 ml-auto" />
            </div>
          </div>
          <div class="lastplayedonspotify relative min-w-[450px] flex flex-col gap-4 wpm h-80 flex-grow">
            <div class="spotify w-full py-4 border border-r-0 border-border">
              <FuncSpot />
            </div>
            <div class="type relative p-4 w-full flex flex-col flex-grow border border-r-0 border-border">
              <div class="px-3 z-20 py-2 w-fit gap-1 flex place-items-center rounded-full bg-accent text-accent-foreground">
                <Icon name="i-simple-icons:monkeytype" class="size-4" />
                <p class="text-xs">Typing Speed</p>
              </div>
              <p class="text-[100px] z-20 relative font-semibold leading-[100px] mt-auto -ml-4">120<span class="text-xl font-bold">WPM</span></p>
              <div class="details flex gap-2 text-sm">
                <div class="time flex place-items-center gap-1">
                  <Icon name="i-tabler:clock" class="size-4" />
                  <p>60s</p>
                </div>
                <div class="accuracy flex place-items-center gap-1">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" class="size-4 group-hover:text-slate-300"><path fill="currentColor" d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9"></path></svg>
                  <p>100%</p>
                </div>
              </div>
              <h1 class="absolute text-[180px] bg-clip-text text-clip bg-gradient-to-b text-transparent from-secondary to-background -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">120</h1>

            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="githubcontrib p-4 h-64 flex-grow border border-border border-l-0">
            <div class="px-3 z-20 py-2 w-fit gap-1 flex place-items-center rounded-full bg-accent text-accent-foreground">
              <Icon name="tabler:brand-github" class="size-4" />
              <p class="text-xs">Github Activity</p>
            </div>
          </div>
          <div class="techstack p-4 h-64 flex-grow border border-border border-r-0">
            <div class="px-3 z-20 py-2 w-fit gap-1 flex place-items-center rounded-full bg-accent text-accent-foreground">
              <Icon name="i-material-symbols:stacks" class="size-4" />
              <p class="text-xs">Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import CompsSkillCard from '../comps/skillCard.vue';
</script>
