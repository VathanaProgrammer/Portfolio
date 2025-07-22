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
        <VueIcon class="absolute top-32 left-14 hover:scale-110 transition" />
        <JsIcon class="absolute top-16 right-16 hover:scale-110 transition" />
        <PhpIcon class="absolute top-48 right-4 hover:scale-110 transition" />
        <ReactIcon
          class="absolute bottom-62 left-2 hover:scale-110 transition"
        />
        <TailwindIcon
          class="absolute bottom-78 -right-5 hover:scale-110 transition"
        />
      </div>
    </section>

    <!-- Left Section: Text (order changes) -->
    <section
      class="gap-2 xl:gap-4 text-start px-8 flex flex-col items-start justify-center order-2 lg:order-1"
    >
      <h1 class="lg:text-5xl xl:text-6xl text-gray-800 font-medium">
        Hello Mate
        <span style="font-size: 4rem; text-shadow: 0 0 5px #ffd700">👋</span>
      </h1>
      <h1 class="lg:text-5xl xl:text-6xl text-gray-800 font-semibold">
        I'm Sieng Vathana
      </h1>
      <h1 class="lg:text-5xl text-6xl text-[#2DA6FF] font-semibold">
        Junior Full Stack Developer
      </h1>
      <div class="xl:gap-4 lg:gap-2 flex flex-col md:flex-row">
        <button class="mt-4">
          <a
            href=""
            class="bg-[#1da1ff] hover:bg-white hover:text-gray-800 transition duration-300 px-6 py-2 text-white shadow-md lg:text-xl xl:text-2xl font-normal cursor-pointer"
          >
            About me
          </a>
        </button>
        <button class="mt-4">
          <a
            href="SiengVathana_CV.pptx"
            class="bg-white hover:bg-[#1da1ff] hover:text-white transition duration-300 px-6 py-2 text-gray-800 shadow-md lg:text-xl xl:text-2xl font-normal cursor-pointer"
          >
            Download CV
          </a>
        </button>
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
    PhpIcon
  },
};
</script>
