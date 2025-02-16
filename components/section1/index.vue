<template>
  <div class="h-fit text-foreground p-[33px] pb-0 pt-0 w-screen bg-background z-10">
    <div class="border-x border-border pt-48 flex flex-col gap-48">

      <div class="border-y border-border flex flex-col place-items-center gap-4">

        <div class="px-5 py-2 w-fit gap-1 flex place-items-center rounded-full bg-gradient-to-b from-[#3b3b3b] to-accent text-accent-foreground">
          <Icon name="i-material-symbols:work" class="size-4" />
          <p class="text-xs">Projects</p>
        </div>
        <h1 class="text-[50px] max-w-[500px] leading-[45px] font-semibold text-center">Milestones in the
          learning journey</h1>
        <p class=" max-w-[550px] text-sm leading-tight text-foreground text-center">
          My works are a reflection of my passion for design and development. I love to create beautiful and functional websites that are easy to use and visually appealing. Here are some of my recent projects.
        </p>

      </div>
      
  
      <div class="cont w-full h-full flex flex-col place-items-center gap-52">
        <Projects :tags="['PWA','Web','Graphics','Editing']" title="Cosmos Editor" :stack="['tabler:brand-nuxt','tabler:brand-vue', 'tabler:brand-typescript','i-simple-icons:rust','i-file-icons:webassembly']" >
          An editor to imagine your ideas without leaving the browser. Enables the artistic community to create with freedom and hands designers powerfull tools to show there power. Cosmos marks a new begining of opensource design.
          <p class="mt-5">
            ReImagning the way we design, read more about the project in this blog post.
          </p>
          <NuxtLink to="" class="underline flex place-items-center gap-1 cursor-pointer ">
            Cosmos Blog <Icon name="tabler:arrow-up-right" class="size-4" />
          </NuxtLink>
        </Projects>
  
        <Projects title="Cosmos Editor" :stack="['tabler:brand-nuxt','tabler:brand-vue', 'tabler:brand-typescript','i-simple-icons:rust','i-file-icons:webassembly']" >
          An editor to imagine your ideas without leaving the browser. Enables the artistic community to create with freedom and hands designers powerfull tools to show there power. Cosmos marks a new begining of opensource design.
          <ul class="list-disc list-inside mt-5">
            <li>Intuitive Interface: A user-friendly design that's easy to learn and use.</li>
            <li>Real-time Collaboration: Work seamlessly with others on the same project.</li>
            <li>Advanced Typography: Fine-tune your text with control over fonts and styles.</li>
            <li>Vector Graphics: Create and edit scalable vector graphics with ease.</li>
          </ul>
          <p class="mt-5">
            ReImagning the way we design, read more about the project in this blog post.
          </p>
          <NuxtLink to="" class="underline flex place-items-center gap-1 cursor-pointer ">
            Cosmos Blog <Icon name="tabler:arrow-up-right" class="size-4" />
          </NuxtLink>
        </Projects>
        <Projects title="Cosmos Editor" :stack="['tabler:brand-nuxt','tabler:brand-vue', 'tabler:brand-typescript','i-simple-icons:rust','i-file-icons:webassembly']" >
          An editor to imagine your ideas without leaving the browser. Enables the artistic community to create with freedom and hands designers powerfull tools to show there power. Cosmos marks a new begining of opensource design.
          <ul class="list-disc list-inside mt-5">
            <li>Intuitive Interface: A user-friendly design that's easy to learn and use.</li>
            <li>Real-time Collaboration: Work seamlessly with others on the same project.</li>
            <li>Advanced Typography: Fine-tune your text with control over fonts and styles.</li>
            <li>Vector Graphics: Create and edit scalable vector graphics with ease.</li>
          </ul>
          <p class="mt-5">
            ReImagning the way we design, read more about the project in this blog post.
          </p>
          <NuxtLink to="" class="underline flex place-items-center gap-1 cursor-pointer">
            Cosmos Blog <Icon name="tabler:arrow-up-right" class="size-4" />
          </NuxtLink>
        </Projects>
      </div>

      <div class="w-full flex place-items-center justify-center pb-44">
        <CompsActionbtn class="">
          Explore Projects
        </CompsActionbtn>
      </div>
  
  
    </div>
    
  </div>
</template>
