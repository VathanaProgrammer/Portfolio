<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 items-center">
    <!-- Right Section: Image (order changes) -->
    <section
      class="relative w-full h-full order-1 lg:order-2 flex items-center justify-center"
    >
      <div class="relative w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
        <img
          src="../assets/image/doc_2025-07-22_02-23-29........s.png"
          class="w-full h-full object-cover rounded-xl"
          alt=""
        />

        <!-- Icons stay close to image -->
        <VueIcon
          class="absolute left-6 top-24 md:top-32 md:left-14 hover:scale-110 transition"
        />
        <JsIcon
          class="absolute top-16 right-1 md:top-16 md:right-16 hover:scale-110 transition"
        />
        <PhpIcon
          class="absolute top-42 md:top-58 md:left-4 lg:top-68 lg:left-12 hover:scale-110 transition"
        />
        <SpringBootIcon
          class="absolute top-42 -right-2 md:top-48 md:right-1 lg:top-48 lg:right-4 hover:scale-110 transition"
        />
        <ReactIcon
          class="absolute bottom-15 -left-4 md:bottom-12 lg:bottom-22 xl:bottom-62 xl:left-2 hover:scale-110 transition"
        />
        <TailwindIcon
          class="absolute bottom-10 -right-6 md:bottom-35 lg:bottom-55 xl:bottom-78 md:-right-5 hover:scale-110 transition"
        />
      </div>
    </section>

    <!-- Left Section: Text (order changes) -->
    <section
      class="gap-0 md:gap-4 mt-4 lg:mt-0 text-start flex flex-col items-start justify-center order-2 lg:order-1"
    >
      <h1
        class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold"
      >
        Hello Mate
        <span class="text-4xl md:text-5xl xl:text-7xl animate-waving-hand"
          >👋</span
        >
      </h1>

      <h1
        class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-extrabold mt-2"
      >
        I'm <span class="text-[#2DA6FF]">Sieng Vathana</span>
      </h1>

      <p
        class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mt-4 leading-relaxed"
      >
        Junior Full Stack Developer | Crafting modern web experiences with Vue,
        React, Spring Boot, Django and PHP.
      </p>

      <div
        class="w-full flex flex-col gap-2 md:gap-4 mt-6 justify-center sm:justify-start sm:flex-row"
      >
        <a
          href="#about"
          class="bg-[#1da1ff] hover:bg-white hover:text-[#1da1ff] border-2 border-[#1da1ff] transition-all duration-300 px-4 py-2 md:px-8 md:py-3 text-white shadow-lg text-lg md:text-xl xl:text-2xl font-semibold rounded-lg hover:scale-105"
        >
          About Me
        </a>

        <a
          href="SiengVathana_CV.pptx"
          class="bg-white text-[#1da1ff] border-2 border-[#1da1ff] hover:bg-[#1da1ff] hover:text-white transition-all duration-300 px-8 py-3 shadow-lg text-lg md:text-xl xl:text-2xl font-semibold rounded-lg hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import PhpIcon from "./PhpIcon.vue";
import JsIcon from "./JsIcon.vue";
import ReactIcon from "./ReactIcon.vue";
import VueIcon from "./VueIcon.vue";
import TailwindIcon from "./TailwindIcon.vue";
import SpringBootIcon from "./SpringBootIcon.vue";

export default {
  components: {
    VueIcon,
    ReactIcon,
    TailwindIcon,
    SpringBootIcon,
    JsIcon,
    PhpIcon,
  },
};
</script>
