<template>
  <header class="mb-12 flex max-w-2xl flex-col items-center text-center">
    <div class="mb-4 flex items-center gap-2" aria-hidden="true">
      <span class="h-2 w-2 rounded-full bg-[#1688dc]"></span>
      <span class="h-px w-12 bg-[#1688dc]/45"></span>
      <span class="h-2 w-2 rounded-full border-2 border-[#1688dc]"></span>
    </div>
    <h2 class="text-3xl font-bold tracking-tight text-[#14243b] lg:text-5xl">
      {{ title }}
    </h2>
    <p class="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
      {{ description }}
    </p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
