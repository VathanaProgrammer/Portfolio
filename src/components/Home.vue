<template>
  <section
    aria-labelledby="home-title"
    class="grid min-h-screen grid-cols-1 items-center gap-12 pb-20 pt-28 lg:grid-cols-2 lg:gap-16 lg:pt-32"
  >
    <div class="order-2 flex flex-col items-start justify-center lg:order-1">
      <p class="mb-3 text-xl font-semibold text-slate-600 md:text-2xl">
        Hello mate <span aria-hidden="true">👋</span>
      </p>

      <h1
        id="home-title"
        class="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-[#14243b] sm:text-6xl lg:text-7xl"
      >
        I'm <span class="text-[#1688dc]">Sieng Vathana</span>
      </h1>

      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
        <span class="font-semibold text-[#1688dc]">Programmer</span> passionate
        about building modern web and desktop applications. Skilled in
        <span class="font-semibold text-[#14243b]">Vue.js</span>,
        <span class="font-semibold text-[#14243b]">Laravel</span>,
        <span class="font-semibold text-[#14243b]">Spring Boot</span>,
        <span class="font-semibold text-[#14243b]">Django</span>, and
        <span class="font-semibold text-[#14243b]">C#</span>. I enjoy turning ideas
        into clean, functional, and user-friendly software.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#about"
          class="rounded-lg bg-[#1688dc] px-6 py-3 text-center text-lg font-semibold text-white shadow-[0_10px_30px_rgba(22,136,220,0.22)] transition hover:-translate-y-0.5 hover:bg-[#086daf]"
        >
          About me
        </a>
        <a
          :href="cvUrl"
          download="SiengVathana_CV.pdf"
          class="rounded-lg border-2 border-[#1688dc] bg-white/65 px-6 py-3 text-center text-lg font-semibold text-[#086daf] transition hover:-translate-y-0.5 hover:bg-[#1688dc] hover:text-white"
        >
          Download CV
        </a>
      </div>
    </div>

    <div class="order-1 flex justify-center lg:order-2" aria-hidden="true">
      <div class="animate-profile relative w-4/5 max-w-[420px]">
        <div
          class="absolute -inset-4 rounded-full border border-dashed border-[#1688dc]/35 sm:-inset-8"
        ></div>
        <span
          class="absolute -left-4 top-1/3 z-10 h-4 w-4 rounded-full border-4 border-white bg-[#1688dc] shadow-md sm:-left-8"
        ></span>
        <span
          class="absolute -right-4 bottom-1/4 z-10 h-3 w-3 rounded-full bg-[#14243b] shadow-md sm:-right-8"
        ></span>
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1688dc]/30 to-[#75c8ff]/10 blur-3xl"
        ></div>
        <img
          src="../assets/image/anime_profile_user.jpg"
          class="relative aspect-square w-full rounded-full border-8 border-white/80 object-cover shadow-[0_24px_70px_rgba(20,36,59,0.18)]"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const cvUrl = `${import.meta.env.BASE_URL}SiengVathana_CV.pdf`;
</script>

<style scoped>
@keyframes profile-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-profile {
  animation: profile-float 5s ease-in-out infinite;
}
</style>
