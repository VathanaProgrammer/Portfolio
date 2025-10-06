<template>
  <div
    class="global-font p-2 md:px-14 lg:px-22 xl:px-32 2xl:px-64 w-full min-h-screen mx-auto bg-gradient-to-r from-gray-100 via-gray-100 to-blue-100"
   >
    <Navbar />
    <Home />
    <About />
    <Skill/>
    <Project/>
    <Experience/>
    <Certificates />
    <ContactUS/>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Navbar from "./Navbar.vue";
import About from "./About.vue";
import ContactUS from "./ContactUs.vue";
import Skill from "./Skill.vue";
import Project from "./Project.vue";
import Experience from "./Experience.vue";
import Certificates from "./Certificates.vue";

export default {
  components: {
    Navbar,
    Experience,
    Certificates,
    Home,
    About,
    Skill,
    Project,
    ContactUS
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
