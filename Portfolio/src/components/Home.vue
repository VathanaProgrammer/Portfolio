<template>
  <div class="flex items-center justify-center h-screen">
    <section
      class="welcome-text-and-name gap-4 text-start lg:w-1/2 flex flex-col items-start justify-center"
    >
      <h1 class="text-6xl text-start text-gray-800 font-medium">
        Hello Mate
        <span style="font-size: 4rem; text-shadow: 0 0 5px #ffd700">👋</span>
      </h1>
      <h1 class="text-6xl text-gray-800 font-semibold">I'm Sieng Vathana</h1>
      <h1 class="text-6xl text-[#2DA6FF] font-semibold">
        Junior Full Stack Developer
      </h1>
      <div class="gap-4 flex flex-col md:flex-row">
        <button class="mt-4">
          <a
            href=""
            class="bg-[#1da1ff] hover:bg-white hover:text-gray-800 transition duration-300 px-6 py-2 text-white shadow-md text-2xl font-normal cursor-pointer"
          >
            About me
          </a>
        </button>
        <button class="mt-4">
          <a
            href="SiengVathana_CV.pptx"
            class="bg-white hover:bg-[#1da1ff] hover:text-white transition duration-300 px-6 py-2 text-gray-800 shadow-md text-2xl font-normal cursor-pointer"
          >
            Download CV>
          </a>
        </button>
      </div>
    </section>
<section class="lg:w-1/2 relative">
  <VueIcon class="absolute 2xl:top-72 2xl:left-28 xl:top-22 xl:left-22  z-10" />
  <ReactIcon class="absolute 2xl:top-30 2xl:left-[540px] xl:top-28 xl:left-[340px] z-10" />
  <TailwindIcon class="absolute 2xl:top-86 2xl:left-[580px] xl:top-55 xl:left-[420px] z-10" />
  <SpringBootIcon class="absolute 2xl:top-78 2xl:left-[680px] xl:top-78 xl:left-[450px] z-10" />

  <img
    src="../assets/image/doc_2025-07-22_02-23-29........s.png"
    class="w-full h-full object-cover"
    alt=""
  />
</section>

  </div>
</template>
<script>
import ReactIcon from "./ReactIcon.vue";
import VueIcon from "./VueIcon.vue";
import TailwindIcon from "./TailwindIcon.vue";
import SpringBootIcon from "./SpringBootIcon.vue";
export default {
  components: {
    VueIcon,
    ReactIcon,
    TailwindIcon,
    SpringBootIcon
  },
};
</script>
