<template>
  <section class="container mx-auto dark font-fira-code">
    <div class="border-2 border-t-0 p-5 bg-cyan-50">
      <h2 class="text-center text-2xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Here is a list of projects I built
      </h2>
    </div>

    <!-- frontend -->
    <div class="border-2 border-t-0 p-5 bg-yellow-50">
      <h2 class="text-center text-xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Frontend Development
      </h2>
    </div>
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-yellow-50">
      <div
        v-for="i in 4"
        class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white cursor-pointer">
        <!-- image goes here -->
        <div class="w-full h-56 bg-yellow-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Project name</div>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <button class="bg-yellow hover:bg-yellow-300 active:bg-yellow-600 btn">View More</button>
      </div>
    </div>

    <!-- backend -->
    <div class="border-2 border-t-0 p-5 bg-green-50">
      <h2 class="text-center text-xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Backend Development
      </h2>
    </div>
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-green-50">
      <div
        v-for="i in 4"
        class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white cursor-pointer">
        <!-- image goes here -->
        <div class="w-full h-56 bg-green-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Project name</div>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <button class="bg-green hover:bg-green-300 active:bg-green-600 btn">View More</button>
      </div>
    </div>

    <!-- mobile -->
    <div class="border-2 border-t-0 p-5 bg-red-50">
      <h2 class="text-center text-xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        Mobile Development
      </h2>
    </div>
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-red-50">
      <div
        v-for="i in 4"
        class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white cursor-pointer">
        <!-- image goes here -->
        <div class="w-full h-56 bg-red-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Project name</div>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <button class="bg-red hover:bg-red-300 active:bg-red-600 btn">View More</button>
      </div>
    </div>

    <!-- HTML5 games Development -->
    <div class="border-2 border-t-0 p-5 bg-purple-50">
      <h2 class="text-center text-xl lg:text-4xl md:col-span-2 lg:col-span-3 xl:col-span-4">
        HTML5 games Development
      </h2>
    </div>
    <div
      class="grid border-2 border-t-0 p-5 lg:p-11 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-purple-50">
      <div
        v-for="i in 4"
        class="border-2 p-4 shadow-5 duration-200 grid gap-3 font-karla bg-white cursor-pointer">
        <!-- image goes here -->
        <div class="w-full h-56 bg-purple-500"></div>

        <!-- blog title -->
        <div class="font-medium text-3xl">Project name</div>
      </div>

      <div class="flex justify-center col-span-full py-5">
        <button class="bg-purple hover:bg-purple-300 active:bg-purple-600 btn">View More</button>
      </div>
    </div>
  </section>
</template>
