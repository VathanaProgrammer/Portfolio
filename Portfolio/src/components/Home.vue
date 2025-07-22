<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 items-center">
    <!-- Right Section: Image (order changes) -->
    <section class="relative w-full h-full order-1 lg:order-2">
      <VueIcon class="absolute lg:top-18 lg:left-34 2xl:top-72 2xl:left-28 xl:top-22 xl:left-22 z-10" />
      <JsIcon class="absolute lg:top-32 lg:left-34 2xl:top-96 2xl:left-14 xl:top-22 xl:left-22 z-10" />
      <ReactIcon class="absolute lg:top-16 lg:left-78  2xl:top-30 2xl:left-[510px] xl:top-28 xl:left-[420px] z-10" />
      <TailwindIcon class="absolute lg:top-45 lg:left-94 2xl:top-86 2xl:left-[550px] xl:top-55 xl:left-[490px] z-10" />
      <SpringBootIcon class="absolute lg:top-22 lg:left-[420px] 2xl:top-60 2xl:left-[640px] xl:top-86 xl:left-[520px] z-10" />
      <img
        src="../assets/image/doc_2025-07-22_02-23-29........s.png"
        class="w-full h-full object-cover"
        alt=""
      />
    </section>

    <!-- Left Section: Text (order changes) -->
    <section class="gap-2 xl:gap-4 text-start px-8 flex flex-col items-start justify-center order-2 lg:order-1">
      <h1 class="lg:text-5xl xl:text-6xl text-gray-800 font-medium">
        Hello Mate
        <span style="font-size: 4rem; text-shadow: 0 0 5px #ffd700">👋</span>
      </h1>
      <h1 class="lg:text-5xl xl:text-6xl text-gray-800 font-semibold">I'm Sieng Vathana</h1>
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
    JsIcon
  },
};
</script>
