<template>
  <div
    class="global-font px-20 lg:px-64 w-full min-h-screen mx-auto bg-gradient-to-r from-gray-100 via-gray-100 to-blue-100"
  >
    <Navbar />
    <Home />
    <About />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Navbar from "./Navbar.vue";
import About from "./About.vue";

export default {
  components: {
    Navbar,
    Home,
    About
  },
  data() {
    return {
      name: [],
      age: 15,
    };
  },
  methods: {
    fn1() {
      console.log("Hello");
    },
  },
};
</script>
<style>
.global-font {
  font-family: "Archivo Narrow", sans-serif;
}
</style>
