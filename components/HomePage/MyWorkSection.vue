<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="work" class="container mx-auto dark">
    <div class="p-5">
      <h2 class="text-comment-100 text-4xl lg:text-6xl my-10">Here is a list of projects I built</h2>
    </div>

    <!-- frontend -->
    <div class="p-5 flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center">
      <h2 class="text-comment-100 text-xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">Category</h2>
      <div class="flex gap-5 flex-wrap items-center">
        <button
          class="flex items-center gap-2 px-3 py-2 border shadow-xl hover:bg-background-800 duration-150 transform bg-background-900 text-comment-400 font-bold">
          <span>Frontend</span>
          <Icon icon="mdi:code" width="20" />
        </button>
        <button
          class="flex items-center gap-2 px-3 py-2 border shadow-xl hover:bg-background-800 duration-150 transform bg-background-900 text-comment-400 font-bold">
          <span>Backend</span>
          <Icon icon="mdi:server" width="20" />
        </button>
        <button
          class="flex items-center gap-2 px-3 py-2 border shadow-xl hover:bg-background-800 duration-150 transform bg-background-900 text-comment-400 font-bold">
          <span>Mobile</span>
          <Icon icon="mdi:cellphone-iphone" width="20" />
        </button>
        <button
          class="flex items-center gap-2 px-3 py-2 border shadow-xl hover:bg-background-800 duration-150 transform bg-background-900 text-comment-400 font-bold">
          <span>Games</span>
          <Icon icon="mdi:gamepad-variant-outline" width="20" />
        </button>
      </div>
    </div>
    <div class="grid p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
        <!-- image goes here -->
        <div class="w-full h-56 bg-comment-500 grid place-items-center">
          <img class="" src="@/assets/youtube-downloader.jpg" alt="" />
        </div>

        <!-- blog title -->
        <div class="font-medium text-3xl">YouTube Downloader</div>

        <a
          href="https://yoututbe-downloader.onrender.com/"
          target="_blank"
          class="px-3 text-center py-2 border shadow-xl hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold">
          Open
        </a>
      </div>
      <div
        class="hover:border-purple-300 hover:bg-purple-900 duration-200 border shadow-6 p-4 border-background-300 font-karla text-comment-400 flex flex-col gap-5">
        <!-- image goes here -->
        <div class="w-full h-56 bg-comment-500 grid place-items-center">
          <img class="" src="@/assets/forms-api.jpg" alt="" />
        </div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Forms API</div>

        <a
          href="https://forms-ui-88ek.onrender.com/"
          target="_blank"
          class="px-3 text-center py-2 border shadow-xl hover:bg-background-600 duration-150 transform bg-background-700 text-comment-400 font-bold">
          Open
        </a>
      </div>
    </div>
  </section>
</template>
