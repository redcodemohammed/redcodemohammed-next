<template>
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
</template>
