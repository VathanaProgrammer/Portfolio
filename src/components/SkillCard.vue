<template>
  <li
    class="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/75 p-4 text-center shadow-[0_8px_30px_rgba(20,36,59,0.05)] transition hover:-translate-y-1 hover:border-[#1688dc]/35 hover:shadow-[0_16px_35px_rgba(20,36,59,0.1)]"
  >
    <div
      class="flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
    >
      <Icon :icon="icon" class="h-14 w-14" aria-hidden="true" />
    </div>
    <span class="mt-3 font-semibold text-slate-700">{{ name }}</span>
  </li>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
