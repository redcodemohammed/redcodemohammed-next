<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
  <section class="container mx-auto dark font-fira-code grid grid-cols-12">
    <div class="border-2 border-t-0 p-5 bg-green grid gap-3 col-span-full">
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="bg-background-300 shadow-4 btn">
          <Icon icon="ri:home-2-fill" width="20"></Icon>
        </NuxtLink>
        <Icon icon="ic:outline-chevron-right" width="32" />
        <NuxtLink to="/blog" class="hover:underline">My Blogs</NuxtLink>
      </div>

      <h2 class="text-4xl font-bold">My Blogs</h2>
      <h3 class="font-semibold">Simple explanations and code examples.</h3>
    </div>
    <div
      class="border-2 border-t-0 p-5 bg-red-50 col-span-full lg:col-span-2 lg:border-r-0 lg:sticky top-16 lg:h-screen">
      <h2 class="text-lg font-bold">Categories</h2>

      <ul class="space-y-1 my-5">
        <li v-for="i in 8">
          <button class="font-karla font-semibold hover:underline">
            random name
            <span class="font-extralight">({{ Math.floor(Math.random() * 16) + 1 }})</span>
          </button>
        </li>
      </ul>
    </div>

    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-cyan-50 col-span-full lg:col-span-10">
      <div
        v-for="i in 16"
        class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white">
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
    </div>
  </section>
</template>
