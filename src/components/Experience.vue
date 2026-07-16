<template>
  <section
    id="experiences"
    class="flex w-full flex-col items-center justify-center py-24"
  >
    <SectionHeading
      title="Experience"
      description="Highlights from my internships and professional work"
    />

    <!-- Experiences Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-6xl">
      <a
        v-for="exp in experiences"
        :key="exp.title"
        :href="exp.mapUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${exp.title} — view location on Google Maps`"
        class="group block cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(20,36,59,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,36,59,0.12)]"
      >
        <div class="relative overflow-hidden h-64">
          <img
            :src="exp.image"
            :alt="exp.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute right-4 top-4 rounded-full bg-[#1688dc] px-3 py-1 text-xs font-bold text-white shadow-md">
            {{ exp.period }}
          </div>
        </div>
        <div class="p-8">
          <h3 class="mb-3 text-2xl font-bold text-[#14243b] transition-colors duration-300 group-hover:text-[#1688dc]">
            {{ exp.title }}
          </h3>
          <p class="leading-relaxed text-slate-600" v-html="exp.description"></p>
          <div class="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1688dc]">
            <Icon icon="mdi:map-marker" class="text-lg" />
            View location
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import SectionHeading from "./SectionHeading.vue";

export default {
  components: {
    Icon,
    SectionHeading,
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
