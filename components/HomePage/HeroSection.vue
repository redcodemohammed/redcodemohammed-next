<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import * as THREE from 'three'

onMounted(async () => {
  window.THREE = THREE
  // @ts-ignore
  const { default: GLOBE } = await import('vanta/dist/vanta.globe.min')
  GLOBE({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xff5555,
    color2: 0x282a36,
    size: 1.0,
    backgroundColor: 0x282a36,
    THREE: window.THREE
  })
})

const myWorkButton = ref<HTMLButtonElement | null>(null)
onMounted(() => {
  myWorkButton.value?.addEventListener('click', () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  })
})
</script>

<template>
  <section class="pt-40 md:pb-28 pb-20 relative">
    <div id="vanta" class="absolute inset-0 w-full h-full"></div>
    <!-- top hero text -->
    <div class="flex flex-col gap-5 md:gap-10 z-10 relative text-comment-100">
      <div class="">
        <div class="inline px-3 py-2 bg-background-700 shadow-4 text-comment-400 text-center font-bold">
          👋 Hi there,
        </div>
      </div>

      <div class="text-7xl">I am Mohammed</div>
      <div class="font-bold text-xl">Fullstack web developer</div>

      <div class="mt-5 flex flex-col md:flex-row gap-4">
        <div class="">
          <button
            ref="myWorkButton"
            class="px-3 py-2 border shadow-4 hover:bg-red-600 duration-150 transform bg-background-700 font-bold">
            Check my Work
          </button>
        </div>
        <div class="text-lg font-bold">Or</div>
        <div class="text-lg font-bold">Contact Me On 👇</div>
      </div>

      <div class="flex justify-start items-center gap-5 flex-wrap">
        <a href="https://github.com/redcodemohammed" target="_blank" class="">
          <Icon icon="fa-brands:github" width="25" />
        </a>
        <a href="https://www.instagram.com/s127x/" target="_blank" class="">
          <Icon icon="fa-brands:instagram" width="25" />
        </a>
        <a href="https://www.linkedin.com/in/redcodemohammed/" target="_blank" class="">
          <Icon icon="fa-brands:linkedin-in" width="25" />
        </a>
        <a href="https://codepen.io/redcodemohammed" target="_blank" class="">
          <Icon icon="fa-brands:codepen" width="25" />
        </a>
        <a href="https://www.youtube.com/@redcodemohammed" target="_blank" class="">
          <Icon icon="fa-brands:youtube" width="25" />
        </a>
        <a href="https://discordapp.com/users/463723648851902465" target="_blank" class="">
          <Icon icon="fa-brands:discord" width="25" />
        </a>
        <a href="https://www.reddit.com/user/CharityHuman3233" target="_blank" class="">
          <Icon icon="fa-brands:reddit" width="25" />
        </a>
        <a href="https://www.twitch.tv/redcodemohammed" target="_blank" class="">
          <Icon icon="fa-brands:twitch" width="25" />
        </a>
        <a href="https://redcode9000.t.me" target="_blank" class="">
          <Icon icon="fa-brands:telegram" width="25" />
        </a>
      </div>
    </div>
  </section>
</template>
