<template>
  <section id="skills" class="py-20">
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">My Skills</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Tools and technologies I use to build web applications
      </p>
    </header>

    <!-- Skills Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto justify-items-center items-center"
    >
      <!-- Skill Card -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon
            icon="vscode-icons:file-type-vue"
            class="w-16 h-16 text-[#42b883]"
          />
        </div>
        <span class="mt-2 font-medium text-gray-700">Vue.js</span>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="mdi:react" class="w-16 h-16 text-[#61dafb]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">React</span>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="mdi:tailwind" class="w-16 h-16 text-[#38bdf8]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Tailwind</span>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="devicon:jquery" class="w-16 h-16 text-[#f7df1e]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">JQuery</span>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:php" class="w-16 h-16 text-[#777bb4]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">PHP</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:laravel" class="w-16 h-16 text-[#42b883]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Laravel</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:spring-icon" class="w-16 h-16 text-[#6db33f]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Spring Boot</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="simple-icons:dotnet" class="w-16 h-16 text-[#512BD4]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">ASP.NET Core</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon
            icon="devicon:microsoftsqlserver"
            class="w-16 h-16 text-[#512BD4]"
          />
        </div>
        <span class="mt-2 font-medium text-gray-700">SQL Server</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="devicon:mysql" class="w-16 h-16 text-[#512BD4]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">MySql</span>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="devicon:oracle" class="w-16 h-16 text-[#512BD4]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Oracle</span>
      </div>
      <!-- Add Git -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:git-icon" class="w-16 h-16 text-[#F05032]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Git</span>
      </div>

      <!-- Add GitHub -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:github-icon" class="w-16 h-16 text-gray-800" />
        </div>
        <span class="mt-2 font-medium text-gray-700">GitHub</span>
      </div>

      <!-- Add Docker -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:docker-icon" class="w-16 h-16 text-[#0db7ed]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Docker</span>
      </div>

      <!-- Add Figma -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="logos:figma" class="w-16 h-16 text-[#F24E1E]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">Figma</span>
      </div>
      <!-- Add Figma -->
      <div class="flex flex-col items-center">
        <div
          class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
        >
          <Icon icon="devicon:photoshop" class="w-16 h-16 text-[#F24E1E]" />
        </div>
        <span class="mt-2 font-medium text-gray-700">photoshop</span>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
