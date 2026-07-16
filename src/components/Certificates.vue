<template>
  <section
    id="certificates"
    class="flex w-full flex-col items-center justify-center py-24"
  >
    <SectionHeading
      title="Certificates"
      description="Credentials and achievements that support my practical experience"
    />

    <!-- Certificates Grid -->
    <div class="flex flex-col gap-8 mx-auto w-full max-w-4xl">
      <!-- Certificate Card -->
      <article class="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(20,36,59,0.07)]">
        <img
          src="../assets/image/Acledacertificate.png"
          alt="ACLEDA University of Business internship certificate"
          class="w-full h-full object-cover"
        />
        <div class="p-6">
          <h3 class="mb-2 text-2xl font-bold text-[#14243b]">Internship Certificate – ACLEDA University of Business</h3>
          <p class="mb-4 line-clamp-4 leading-relaxed text-slate-600">
            Successfully completed a 6–7 month internship at ACLEDA University of Business, contributing to web development projects and gaining hands-on experience in frontend and backend development, teamwork, and professional workflows.
          </p>
          <a
            :href="certificateUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold text-[#1688dc] hover:underline"
          >
            View certificate
          </a>
        </div>
      </article>

      <!-- Add more certificates below if needed -->
      <!-- Each will be full-width row -->
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "./SectionHeading.vue";

const certificateUrl = `${import.meta.env.BASE_URL}AUB-Certificte_C0000092.pdf`;
</script>
