<template>
  <div class="w-full h-full flex flex-col justify-around">
    <div class="flex gap-2">
      <div >
        <img src="../../assets/pfpnew.jpg" class="size-10 rounded-full" alt="">
      </div>
      <div class="info flex flex-col">
        <p class="text-sm font-semibold">Ketsebaot Gizachew</p>
        <p class="text-xs">@KetsaBytes</p>
      </div>
      
    </div>
    <div class="tweet text-sm py-2 overflow-y-hidden max-h-24">
      <p class="text-sm px-2 text-muted-foreground">
        Hey, I just found this awesome library called Inspira UI. It's made by the Vue community for @vuejsand @nuxt_js inspired by Acceternity UI, and has amazing ...
      </p>
     </div>
     <div class="px-2 flex gap-4">
      <Icon name="i-tabler:share-3" class="scale-x-[-1]" />
      <Icon name="i-garden:arrow-retweet-fill-12" />
      <Icon name="i-tabler:heart" />
      <Icon name="i-tabler:brand-x" class="ml-auto" />
     </div>
  </div>
</template>
