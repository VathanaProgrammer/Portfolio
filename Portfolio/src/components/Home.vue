<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-20 items-center gap-8"
  >
    <!-- Right Section: Profile Image -->
    <section class="relative flex justify-center order-1 lg:order-2">
      <div
        class="relative w-4/5 max-w-[420px] md:max-w-[380px] animate-profile"
      >
        <!-- Glow background -->
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1da1ff]/30 to-[#2DA6FF]/10 blur-3xl"
        ></div>

        <!-- Profile image -->
        <img
          src="../assets/image/vathana.png"
          class="relative w-full h-full object-cover rounded-2xl md:mt-10 mt-6 shadow-xl"
          alt="Sieng Vathana"
        />
      </div>
    </section>

    <!-- Left Section: Text -->
    <section
      class="text-start flex flex-col items-start justify-center order-2 lg:order-1 space-y-4"
    >
      <h1 class="text-2xl md:text-3xl text-gray-700 font-medium">
        Hello Mate <span class="animate-waving-hand">👋</span>
      </h1>

      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
        I'm <span class="text-[#1da1ff]">Sieng Vathana</span>
      </h1>

      <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
        <span class="font-semibold text-[#1da1ff]">Programmer</span> passionate
        about building modern web and desktop applications. Skilled in
        <span class="font-semibold">Vue.js</span>,
        <span class="font-semibold">Laravel</span>,
        <span class="font-semibold">Spring Boot</span>,
        <span class="font-semibold">Django</span>, and
        <span class="font-semibold">C#</span>. I enjoy turning ideas into clean,
        functional, and user-friendly software.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="#about"
          class="bg-[#1da1ff] hover:bg-[#0d8adf] text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold transition-transform hover:scale-105"
        >
          About Me
        </a>
        <a
          href="/Portfolio/SiengVathana_CV.pdf"
          download="/Portfolio/SiengVathana_CV.pdf"
          class="border-2 border-[#1da1ff] text-[#1da1ff] hover:bg-[#1da1ff] hover:text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold transition-transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Floating animation for profile */
@keyframes profileFloat {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-12px) scale(1.02);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
.animate-profile {
  animation: profileFloat 4s ease-in-out infinite;
}
</style>
