<template>
  <div id="top" class="portfolio-page">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main
      id="main-content"
      class="mx-auto min-h-screen w-full max-w-[96rem] px-4 sm:px-8 lg:px-14 xl:px-20"
    >
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Certificates />
      <ContactUs />
    </main>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Navbar from "./Navbar.vue";
import About from "./About.vue";
import ContactUs from "./ContactUs.vue";
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
    ContactUs,
  },
};
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 90% 8%, rgba(22, 136, 220, 0.14), transparent 26rem),
    linear-gradient(180deg, #fbfdff 0%, #f4f8fc 58%, #eef5fa 100%);
}
</style>
