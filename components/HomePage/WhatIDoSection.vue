<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <section class="pt-20 md:pb-28 pb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <h2 class="text-comment-100 text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4 my-10">What I can do</h2>

    <!-- front end development -->
    <div
      class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
      <div class="w-full grid place-items-center">
        <Icon icon="mdi:code" class="text-8xl" />
      </div>

      <div class="font-medium text-3xl">Frontend Development</div>

      <p>
        Using
        <a href="https://tailwindcss.com/" target="_blank" class="font-bold" style="color: rgb(0, 182, 252)">Tailwind</a
        >,
        <a href="https://www.typescriptlang.org" target="_blank" class="font-bold" style="color: rgb(48, 102, 201)"
          >Typescript</a
        >,
        <a href="https://vuejs.org/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Vue.js</a>
        and
        <a href="https://nuxt.com/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Nuxt.js</a>
        on the frontend side, I can build your websites making sure that it's fast, responsive and works on all devices.
      </p>
    </div>

    <!-- backend development -->
    <div
      class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
      <div class="w-full grid place-items-center">
        <Icon icon="mdi:server" class="text-8xl" />
      </div>

      <div class="font-medium text-3xl">Backend Development</div>

      <p>
        I use
        <a href="https://nestjs.com/" target="_blank" class="font-bold" style="color: rgb(255, 0, 35)">Nest.js</a>
        or
        <a href="https://adonisjs.com/" target="_blank" class="font-bold" style="color: rgb(110, 0, 214)">Adonis.js</a>
        with
        <a href="https://www.mongodb.com/" target="_blank" class="font-bold" style="color: rgb(29, 155, 82)">Mongodb</a>
        on the backend, with the help of
        <a href="https://www.typescriptlang.org" target="_blank" class="font-bold" style="color: rgb(48, 102, 201)"
          >Typescript</a
        >
        and
        <a href="https://nodejs.org/" target="_blank" class="font-bold" style="color: rgb(72, 177, 97)">Node.js</a>, I
        can build your backend and make sure it's fast, secure, scalable and reliable.
      </p>
    </div>

    <!-- mobile development -->
    <div
      class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
      <div class="w-full grid place-items-center">
        <Icon icon="mdi:cellphone-iphone" class="text-8xl" />
      </div>

      <div class="font-medium text-3xl">Mobile Development</div>

      <p>
        When it comes to mobile app, I prefer using
        <a href="https://reactnative.dev/" target="_blank" class="font-bold" style="color: rgb(0, 218, 255)"
          >React Native</a
        >
        for its simplicity and performance, to ensure that your users will have a great experience.
      </p>
    </div>

    <!-- html5 games development -->
    <div
      class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
      <div class="w-full grid place-items-center">
        <Icon icon="mdi:gamepad-variant-outline" class="text-8xl" />
      </div>

      <div class="font-medium text-3xl">HTML5 games Development</div>

      <p>
        You have a simple 2D game idea? let me help you bring it to life with
        <a href="https://phaser.io/" target="_blank" class="font-bold" style="color: rgb(96, 185, 188)">Phaser</a>,
        making sure it will run smoothly on computers and mobile phones.
      </p>
    </div>
  </section>
</template>
