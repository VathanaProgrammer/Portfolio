<template>
  <section id="skills" class="py-16 w-full h-full">
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Skills & Tech Stack</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Tools and technologies I use to build web applications
      </p>
    </header>

    <!-- Skills Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto justify-items-center items-center"
    >
      <!-- Frontend -->
      <SkillCard icon="vscode-icons:file-type-html" name="HTML5" />
      <SkillCard icon="vscode-icons:file-type-css2" name="CSS3" />
      <SkillCard
        icon="vscode-icons:file-type-js-official"
        name="JavaScript (ES6)"
      />
      <SkillCard icon="vscode-icons:file-type-vue" name="Vue.js" />
      <!-- <SkillCard icon="logos:react" name="React" /> -->
      <SkillCard icon="devicon:tailwindcss" name="Tailwind CSS" />
      <SkillCard icon="devicon:bootstrap" name="Bootstrap" />
      <SkillCard icon="devicon:jquery" name="jQuery" />

      <!--  Backend -->
      <SkillCard icon="logos:php" name="PHP" />
      <SkillCard icon="logos:laravel" name="Laravel" />
      <SkillCard icon="logos:spring-icon" name="Spring Boot" />
      <SkillCard icon="devicon:csharp" name="C#" />
      <SkillCard icon="simple-icons:dotnet" name="ASP.NET Core" />
     <SkillCard icon="mdi:api" name="REST API" />

      <!-- Databases -->
      <SkillCard icon="devicon:microsoftsqlserver" name="SQL Server" />
      <SkillCard icon="devicon:mysql" name="MySQL" />
      <SkillCard icon="devicon:oracle" name="Oracle" />

      <!--  Tools -->
      <SkillCard icon="logos:git-icon" name="Git" />
      <SkillCard icon="logos:github-icon" name="GitHub" />
      <SkillCard icon="logos:docker-icon" name="Docker" />
      <SkillCard icon="devicon:postman" name="Postman" />

      <!--  Design -->
      <SkillCard icon="logos:figma" name="Figma" />
      <SkillCard icon="devicon:photoshop" name="Photoshop" />
    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard.vue"; 

export default {
  components: { SkillCard },
};
</script>
