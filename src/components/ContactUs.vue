<template>
  <section
    id="contact"
    class="flex w-full flex-col items-center justify-center pb-28 pt-24"
  >
    <SectionHeading
      title="Let’s chat"
      description="Reach me by email or connect with me on social platforms"
    />

    <!-- Contact Icons -->
    <div class="flex flex-wrap justify-center gap-4 text-3xl">
      <!-- Email -->
      <a
        href="mailto:siengvathana1@gmail.com"
        class="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:text-red-500"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Sieng Vathana"
      >
        <Icon icon="mdi:email" aria-hidden="true" />
      </a>

      <!-- Facebook -->
      <a
        href="https://www.facebook.com/vathana1234"
        class="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Sieng Vathana on Facebook"
      >
        <Icon icon="mdi:facebook" aria-hidden="true" />
      </a>

      <!-- Telegram -->
      <a
        href="https://t.me/VATHANA1234"
        class="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:text-sky-500"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Sieng Vathana on Telegram"
      >
        <Icon icon="mdi:telegram" aria-hidden="true" />
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/vathana-sieng-307599350/"
        class="rounded-xl border border-slate-200 bg-white p-4 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Sieng Vathana on LinkedIn"
      >
        <Icon icon="mdi:linkedin" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import SectionHeading from "./SectionHeading.vue";

export default {
  components: { Icon, SectionHeading },
};
</script>
