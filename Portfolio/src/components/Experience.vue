<template>
  <div
    id="experiences"
    class="w-full h-full flex flex-col justify-center items-center py-16"
  >
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Experiences</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Highlights of my internships and work experiences
      </p>
    </header>

    <!-- Experiences Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105"
      >
        <img
          src="../assets/image/ACLEDA-banner.jpg"
          alt="Desired Internship Place"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">
            Internship – ACLEDA University of Business
          </h2>

          <p class="text-gray-700 mb-4 line-clamp-5">
            Completed a 6–7 month internship at ACLEDA University of Business,
            contributing to web development projects. Worked collaboratively
            with the team to design interfaces, improve user experience, and
            develop both frontend and backend features using ASP.NET, jQuery,
            Tailwind CSS, and SQL Server. Gained hands-on experience with Git, Github,
            Figma, and web development best practices.
          </p>
        </div>
      </div>
    </div>

    <!-- <!~~ See More Button ~~> -->
    <!-- <div class="mt-10"> -->
      <!-- <a -->
        <!-- href="https://github.com/VathanaProgrammer?tab=repositories" -->
        <!-- target="_blank" -->
        <!-- class="bg-[#1da1ff] px-4 md:text-[18px] py-3 inline-flex items-center text-white rounded-lg shadow-md hover:bg-[#0d8de3] transition gap-2" -->
      <!-- > -->
        <!-- See More on GitHub -->
        <!-- <Icon icon="ic:round-navigate-next" class="w-6 h-6" /> -->
      <!-- </a> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
