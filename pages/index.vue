<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <section class="container mx-auto dark font-fira-code">
    <!-- hero -->
    <div class="lg:grid-cols-2 grid bg-red-50">
      <div
        class="border-2 border-t-0 p-2 py-10 gap-3 grid place-items-center md:place-content-center lg:place-content-around lg:gap-10">
        <div class="flex justify-center">
          <h2 class="text-5xl lg:text-8xl lg:max-w-md">
            I am
            <span class="text-red">Mohammed</span>
          </h2>
        </div>
        <div class="">Developer, designer, game maker, and more.</div>
        <div class="flex justify-center">
          <button class="bg-orange hover:bg-orange-300 active:bg-orange-600 btn">Contact Me</button>
        </div>
      </div>

      <div
        class="border-2 border-t-0 p-2 lg:px-11 py-10 gap-10 grid place-items-center lg:border-l-0">
        <p>
          Hello and welcome! This is my personal website, here you will find some of my best
          projects.
          <br />
          I am full-stack developer, designer and sometimes I make games (that run on the web of
          course) I have been working on this field for over 7 years now.
          <br />
          <br />
          I am a self taught developer, made my way in this field by searching and trying new stuff
          everyday. <br />
          <br />
          When I was a kid I had my first computer, I used it primarily for playing video games, but
          that gave me a lot of experiences of working with computers. <br />
          <br />
          Then I started working in this fields when some of my friends and I had an idea to make a
          website, then soon I realized that making websites if what I want to do.
        </p>
        <button class="border-2 btn bg-white">Check My Work</button>
      </div>
    </div>

    <!-- what I do -->
    <div
      class="grid border-2 border-t-0 p-5 2xl:px-52 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-pink-50">
      <h2 class="text-center text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        What I can do
      </h2>

      <!-- front end development -->
      <div class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-foreground-100">
        <div class="w-full h-56 bg-yellow-200 grid place-items-center">
          <Icon icon="mdi:code" class="text-8xl text-yellow-700" />
        </div>

        <div class="font-medium text-3xl">Frontend Development</div>

        <p>
          Using
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="font-bold"
            style="color: rgb(0, 182, 252)"
            >Tailwind</a
          >,
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            class="font-bold"
            style="color: rgb(48, 102, 201)"
            >Typescript</a
          >,
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="font-bold"
            style="color: rgb(0, 197, 135)"
            >Vue.js</a
          >
          and
          <a
            href="https://nuxt.com/"
            target="_blank"
            class="font-bold"
            style="color: rgb(0, 197, 135)"
            >Nuxt.js</a
          >
          on the frontend side, I can build your websites making sure that it's fast, responsive and
          works on all devices.
        </p>
      </div>

      <!-- backend development -->
      <div class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-foreground-100">
        <div class="w-full h-56 bg-green-200 grid place-items-center">
          <Icon icon="mdi:server" class="text-8xl text-green-700" />
        </div>

        <div class="font-medium text-3xl">Backend Development</div>

        <p>
          I use
          <a
            href="https://nestjs.com/"
            target="_blank"
            class="font-bold"
            style="color: rgb(255, 0, 35)"
            >Nest.js</a
          >
          and
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            class="font-bold"
            style="color: rgb(29, 155, 82)"
            >Mongodb</a
          >
          on the backend, with the help of
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            class="font-bold"
            style="color: rgb(48, 102, 201)"
            >Typescript</a
          >
          and
          <a
            href="https://nodejs.org/"
            target="_blank"
            class="font-bold"
            style="color: rgb(72, 177, 97)"
            >Node.js</a
          >, I can build your backend and make sure it's fast, secure, scalable and reliable.
        </p>
      </div>

      <!-- mobile development -->
      <div class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-foreground-100">
        <div class="w-full h-56 bg-red-200 grid place-items-center">
          <Icon icon="mdi:cellphone-iphone" class="text-8xl text-red-700" />
        </div>

        <div class="font-medium text-3xl">Mobile Development</div>

        <p>
          When it comes to mobile app, I prefer using
          <a
            href="https://reactnative.dev/"
            target="_blank"
            class="font-bold"
            style="color: rgb(0, 218, 255)"
            >React Native</a
          >
          for its simplicity and performance, to ensure that your users will have a great
          experience.
        </p>
      </div>

      <!-- html5 games development -->
      <div class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-foreground-100">
        <div class="w-full h-56 bg-purple-200 grid place-items-center">
          <Icon icon="mdi:gamepad-variant-outline" class="text-8xl text-purple-700" />
        </div>

        <div class="font-medium text-3xl">HTML5 games Development</div>

        <p>
          You have a simple 2D game idea? let me help you bring it to life with
          <a
            href="https://phaser.io/"
            target="_blank"
            class="font-bold"
            style="color: rgb(96, 185, 188)"
            >Phaser</a
          >, making sure it will run smoothly on computers and mobile phones.
        </p>
      </div>
    </div>

    <!-- blogs -->
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-cyan-50">
      <h2 class="text-center text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        My Latest Blogs and Posts
      </h2>

      <div v-for="i in 4" class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white">
        <!-- image goes here -->
        <div class="w-full h-56 bg-pink-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Blog title</div>

        <!-- description -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fuga exercitationem ullam
          inventore....
        </p>
        <button class="bg-orange hover:bg-orange-300 active:bg-orange-600 btn">Read</button>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <NuxtLink to="/blog" class="bg-orange hover:bg-orange-300 active:bg-orange-600 btn"
          >View More</NuxtLink
        >
      </div>
    </div>

    <!-- find me -->
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-green-50">
      <h2 class="text-center text-4xl lg:text-6xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Find me on social media
      </h2>

      <div class="col-span-full flex items-center justify-center gap-10">
        <a href="https://github.com/redcodemohammed" target="_blank" class="text-black">
          <Icon icon="fa-brands:github" width="40" />
        </a>
        <a href="https://www.instagram.com/s127x/" target="_blank" class="text-red-500">
          <Icon icon="fa-brands:instagram" width="40" />
        </a>
        <a
          href="https://www.linkedin.com/in/redcodemohammed/"
          target="_blank"
          class="text-cyan-800">
          <Icon icon="fa-brands:linkedin-in" width="40" />
        </a>
        <a href="https://codepen.io/redcodemohammed" target="_blank" class="text-black">
          <Icon icon="fa-brands:codepen" width="40" />
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>

<script setup></script>
