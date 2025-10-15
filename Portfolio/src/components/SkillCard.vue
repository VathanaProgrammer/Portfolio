<template>
  <div class="flex flex-col items-center">
    <div
      class="bg-white rounded-xl shadow-md p-4 flex justify-center items-center hover:scale-105 transition-transform"
    >
      <Icon :icon="icon" class="w-16 h-16" />
    </div>
    <span class="mt-2 font-medium text-gray-700">{{ name }}</span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  props: ["icon", "name"],
  components: { Icon },
};
</script>
