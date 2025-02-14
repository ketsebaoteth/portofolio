<template>
  <div class="w-full h-[50vh] flex px-[33px]">
    <div class="w-full flex h-full border-x border-border border-t py-8">
      <div class="secion1 h-full flex flex-col gap-8">
        <span class="font-['Amita'] text-lg"> Ketsebaot Gizachew </span>
        <p class="max-w-60 text-muted-foreground text-sm">
          © Ketsebaot Gizachew 2022 - 2025, All rights reserved.
        </p>

        <div class="socials flex gap-1 mt-auto place-items-center">
          <CompsBtn no-border class="quickbtn">
            <Icon name="tabler:brand-x" class="size-5" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="tabler:brand-instagram" class="size-5" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-discord" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-linkedin" />
          </CompsBtn>
          <CompsBtn no-border class="quickbtn">
            <Icon name="i-tabler:brand-github" />
          </CompsBtn>
          <p class="text-sm quickbtn reactor flex gap-2 px-2 py-1 rounded-md">
            ketsebaot.vibes@gmail.com
          </p>
        </div>
      </div>
      <div class="otherlinks ml-auto flex gap-16">
        <div class="Menu h-full px-8 w-40 text-sm flex flex-col gap-2 text-foreground">
          <p class="font-['Amita']">Menu</p>
          <div class="text-sm flex flex-col gap-2 text-muted-foreground">
            <p>Home</p>
            <p>About</p>
            <p>Resume</p>
            <p>Contact</p>
            <p>Sitemap</p>
          </div>
          
        </div>
        <div class="creative h-full px-8 w-40 text-sm flex flex-col gap-2 text-foreground">
          <p class="font-['Amita']">Creative</p>
          <div class="text-sm flex flex-col gap-2 text-muted-foreground">
            <p>Blog</p>
            <p>Case Studies</p>
            <p>Work</p>
          </div>
        </div>
        <div class="help h-full text-sm px-8 w-40 flex flex-col gap-2 text-foreground">
          <p class="font-['Amita']">Helpfull Link</p>
          <div class="text-sm flex flex-col gap-2 text-muted-foreground">
            <p>Privacy Policy</p>
            <p>Imprint</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
