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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-6xl">
      <a
        v-for="exp in experiences"
        :key="exp.title"
        :href="exp.mapUrl"
        target="_blank"
        class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer no-underline block"
      >
        <div class="relative overflow-hidden h-64">
          <img
            :src="exp.image"
            :alt="exp.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute top-4 right-4 bg-[#1da1ff] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {{ exp.period }}
          </div>
        </div>
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1da1ff] transition-colors duration-300">
            {{ exp.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed" v-html="exp.description"></p>
          <div class="mt-6 flex items-center gap-2 text-[#1da1ff] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon icon="mdi:map-marker" class="text-lg" />
            View Location
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      experiences: [
        {
          title: "Internship – ACLEDA University of Business",
          period: "Dec 2024 – Aug 2025",
          image: new URL("../assets/image/ACLEDA-banner.jpg", import.meta.url).href,
          mapUrl: "https://www.google.com/maps/place/ACLEDA+Institute+of+Business/@11.6275392,104.8575978,929m/data=!3m1!1e3!4m6!3m5!1s0x3109527b5a6c6599:0x947e61c3ff00c21d!8m2!3d11.6290212!4d104.8570103!16s%2Fg%2F11c5s72vjq?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D",
          description: "Completed a 7-month intensive internship at ACLEDA University of Business. Contributed to full-stack web development projects using <span class='font-semibold text-gray-800'>ASP.NET</span>, <span class='font-semibold text-gray-800'>jQuery</span>, and <span class='font-semibold text-gray-800'>SQL Server</span>. Focused on UI design, database optimization, and cross-functional team collaboration."
        },
        {
          title: "Staff of Middleware – ACLEDA Bank Plc.",
          period: "April 2026 – Present",
          image: new URL("../assets/image/HQ-2017-now.jpg", import.meta.url).href,
          mapUrl: "https://www.google.com/maps/place/%E1%9E%92%E1%9E%93%E1%9E%B6%E1%9E%82%E1%9E%B6%E1%9E%9A+%E1%9E%A2%E1%9F%81%E1%9E%9F%E1%9F%8A%E1%9E%B8%E1%9E%9B%E1%9E%B8%E1%9E%8A%E1%9E%B6+%E1%9E%97%E1%9E%B8%E1%9E%A2%E1%9E%B7%E1%9E%9B%E1%9E%9F%E1%9F%8A%E1%9E%B8+-+%E1%9E%80%E1%9E%B6%E1%9E%9A%E1%9E%B7%E1%9E%99%E1%9E%B6%E1%9E%9B%E1%9F%90%E1%9E%99%E2%80%8B%E1%9E%80%E1%9E%8E%E1%9F%92%E1%9E%8F%E1%9E%B6%E1%9E%9B/@11.5776912,104.9156208,390m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3109527b5a6c6599:0x947e61c3ff00c21d!2sACLEDA+Institute+of+Business!8m2!3d11.6290212!4d104.8570103!16s%2Fg%2F11c5s72vjq!3m5!1s0x3109515d38d9e329:0xb7bf8da9bd51db79!8m2!3d11.5775692!4d104.9167245!16s%2Fg%2F1tdg0n_b?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D",
          description: "Leading middleware infrastructure projects for critical banking systems. Responsible for designing and implementing <span class='font-semibold text-gray-800'>API bridges</span>, ensuring <span class='font-semibold text-gray-800'>high availability</span>, and optimizing data exchanges between legacy core banking and modern service architectures."
        }
      ]
    };
  }
};
</script>
