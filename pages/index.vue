<script lang="ts" setup>
import { Icon } from '@iconify/vue'
useHead({
  title: 'Mohammed Wisam'
})
</script>
<template>
  <div class="container mx-auto dark font-fira-code">
    <!-- hero -->
    <section class="pt-40 md:pb-28 pb-20">
      <!-- top hero text -->
      <div class="flex flex-col gap-5 md:gap-10">
        <div class="">
          <div class="inline px-3 py-2 bg-background-700 shadow-4 text-comment-400 text-center font-bold">
            👋 Hi there,
          </div>
        </div>

        <div class="text-comment-100 text-7xl">I am Mohammed</div>
        <div class="text-comment-400 font-bold text-xl">Fullstack web developer</div>

        <div class="mt-5 flex flex-col md:flex-row gap-4">
          <div class="">
            <a
              href="#"
              class="px-3 py-2 border shadow-4 hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold"
              >Check my Work</a
            >
          </div>
          <div class="text-lg text-comment-400 font-bold">Or</div>
          <div class="text-lg text-comment-400 font-bold">Contact Me On 👇</div>
        </div>

        <div class="flex justify-start items-center gap-5 flex-wrap">
          <a href="https://github.com/redcodemohammed" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:github" width="25" />
          </a>
          <a href="https://www.instagram.com/s127x/" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:instagram" width="25" />
          </a>
          <a href="https://www.linkedin.com/in/redcodemohammed/" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:linkedin-in" width="25" />
          </a>
          <a href="https://codepen.io/redcodemohammed" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:codepen" width="25" />
          </a>
          <a href="https://www.youtube.com/@redcodemohammed" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:youtube" width="25" />
          </a>
          <a href="https://discordapp.com/users/463723648851902465" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:discord" width="25" />
          </a>
          <a href="https://www.reddit.com/user/CharityHuman3233" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:reddit" width="25" />
          </a>
          <a href="https://www.twitch.tv/redcodemohammed" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:twitch" width="25" />
          </a>
          <a href="https://redcode9000.t.me" target="_blank" class="text-comment-400">
            <Icon icon="fa-brands:telegram" width="25" />
          </a>
        </div>
      </div>
    </section>

    <div role="divider" class="h-px w-full bg-white"></div>

    <!-- what I do -->
    <section class="pt-20 md:pb-28 pb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <h2 class="text-comment-100 text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4 my-10">
        What I can do
      </h2>

      <!-- front end development -->
      <div
        class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
        <div class="w-full grid place-items-center">
          <Icon icon="mdi:code" class="text-8xl" />
        </div>

        <div class="font-medium text-3xl">Frontend Development</div>

        <p>
          Using
          <a href="https://tailwindcss.com/" target="_blank" class="font-bold" style="color: rgb(0, 182, 252)"
            >Tailwind</a
          >,
          <a href="https://www.typescriptlang.org" target="_blank" class="font-bold" style="color: rgb(48, 102, 201)"
            >Typescript</a
          >,
          <a href="https://vuejs.org/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Vue.js</a>
          and
          <a href="https://nuxt.com/" target="_blank" class="font-bold" style="color: rgb(0, 197, 135)">Nuxt.js</a>
          on the frontend side, I can build your websites making sure that it's fast, responsive and works on all
          devices.
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
          <a href="https://adonisjs.com/" target="_blank" class="font-bold" style="color: rgb(110, 0, 214)"
            >Adonis.js</a
          >
          with
          <a href="https://www.mongodb.com/" target="_blank" class="font-bold" style="color: rgb(29, 155, 82)"
            >Mongodb</a
          >
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

    <div role="divider" class="h-px w-full bg-white"></div>

    <!-- blogs -->
    <section v-if="false" class="pt-20 md:pb-28 pb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <h2 class="text-comment-100 text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4 my-10">
        My Latest Blogs and Posts
      </h2>

      <div
        v-for="i in 4"
        class="hover:border-background-300 hover:bg-background-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
        <!-- image goes here -->
        <div class="w-full h-56 bg-comment-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Blog title</div>

        <!-- description -->
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fuga exercitationem ullam inventore....</p>
        <button
          class="px-3 py-2 border shadow-xl hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold">
          Read
        </button>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <NuxtLink
          to="/blog"
          class="w-full md:max-w-sm text-center px-3 py-2 border shadow-4 hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold"
          >View More</NuxtLink
        >
      </div>
    </section>

    <div role="divider" class="h-px w-full bg-white"></div>

    <!-- tech -->
    <section class="pt-20 md:pb-28 pb-20">
      <h2 class="text-comment-100 text-4xl lg:text-6xl my-10">Technologies I have used</h2>

      <div class="flex justify-center items-center gap-5 flex-wrap">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
          target="_blank"
          class="text-comment-400">
          <Icon icon="mdi:language-javascript" width="50" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:language-typescript" width="50" />
        </a>
        <a href="https://vuejs.org/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:vuejs" width="50" />
        </a>
        <a href="https://nuxt.com/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:nuxt" width="50" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:tailwind" width="50" />
        </a>
        <a href="https://nodejs.org/" target="_blank" class="text-comment-400">
          <Icon icon="fa-brands:node-js" width="50" />
        </a>
        <a href="https://adonisjs.com/" target="_blank" class="text-comment-400">
          <Icon icon="file-icons:adonisjs" width="50" />
        </a>
        <a href="https://nestjs.com/" target="_blank" class="text-comment-400">
          <Icon icon="file-icons:nestjs" width="50" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:mongodb" width="50" />
        </a>
        <a href="https://www.postgresql.org/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:postgresql" width="50" />
        </a>
        <a href="https://inkscape.org/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:inkscape" width="50" />
        </a>
        <a href="https://www.docker.com/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:docker" width="50" />
        </a>
        <a href="https://eslint.org/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:eslint" width="50" />
        </a>
        <a href="https://www.notion.so/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:notion" width="50" />
        </a>
        <a href="https://insomnia.rest/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:insomnia" width="50" />
        </a>
        <a href="https://archlinux.org/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:archlinux" width="50" />
        </a>
        <a href="https://manjaro.org/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:manjaro" width="50" />
        </a>
        <a href="https://todoist.com/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:todoist" width="50" />
        </a>
        <a href="https://www.electronjs.org/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:electron-framework" width="50" />
        </a>
        <a href="https://socket.io/" target="_blank" class="text-comment-400">
          <Icon icon="simple-icons:socketdotio" width="50" />
        </a>
        <a href="https://vuetifyjs.com/en/" target="_blank" class="text-comment-400">
          <Icon icon="mdi:vuetify" width="50" />
        </a>
        <a href="https://github.com/redcodemohammed" target="_blank" class="text-comment-400">
          <Icon icon="mdi:github" width="50" />
        </a>
        <a href="https://www.figma.com/" target="_blank" class="text-comment-400">
          <Icon icon="fa-brands:figma" width="35" />
        </a>
        <a href="https://netlify.com/" target="_blank" class="text-comment-400">
          <Icon icon="teenyicons:netlify-solid" width="50" />
        </a>
      </div>
    </section>

    <div role="divider" class="h-px w-full bg-white"></div>
    <section class="text-comment-100 font-bold py-5 text-center">
      Made with :love: by Mohammed {{ new Date().getFullYear() }}
    </section>
  </div>
</template>
<script lang="ts" setup></script>

<script setup></script>
