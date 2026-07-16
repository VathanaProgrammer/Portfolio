<template>
  <section id="skills" class="flex w-full flex-col items-center py-24">
    <SectionHeading
      title="Skills & tech stack"
      description="Tools and technologies I use to build web applications"
    />

    <!-- Skills Grid -->
    <ul
      class="mx-auto grid w-full max-w-6xl grid-cols-2 items-stretch gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >

      <!-- Frontend -->
      <SkillCard icon="vscode-icons:file-type-html" name="HTML5" />
      <SkillCard icon="vscode-icons:file-type-css2" name="CSS3" />
      <SkillCard icon="vscode-icons:file-type-js-official" name="JavaScript (ES6)" />
      <SkillCard icon="vscode-icons:file-type-vue" name="Vue.js" />
      <SkillCard icon="devicon:tailwindcss" name="Tailwind CSS" />
      <SkillCard icon="devicon:bootstrap" name="Bootstrap" />
      <SkillCard icon="devicon:jquery" name="jQuery" />

      <!-- Backend -->
      <SkillCard icon="logos:php" name="PHP" />
      <SkillCard icon="logos:laravel" name="Laravel" />
      <SkillCard icon="logos:spring-icon" name="Spring Boot" />
      <SkillCard icon="devicon:csharp" name="C#" />
      <SkillCard icon="simple-icons:dotnet" name="ASP.NET Core" />
      <SkillCard icon="mdi:api" name="REST API" />
      <SkillCard icon="logos:python" name="Python" />

      <!-- Databases -->
      <SkillCard icon="devicon:microsoftsqlserver" name="SQL Server" />
      <SkillCard icon="devicon:mysql" name="MySQL" />
      <SkillCard icon="devicon:oracle" name="Oracle" />

      <!-- Tools & DevOps -->
      <SkillCard icon="logos:git-icon" name="Git" />
      <SkillCard icon="logos:github-icon" name="GitHub" />
      <SkillCard icon="logos:github-actions" name="GitHub Actions" />
      <SkillCard icon="devicon:postman" name="Postman" />
      <SkillCard icon="logos:docker-icon" name="Docker" />
      <SkillCard icon="logos:ubuntu" name="Ubuntu" />

      <!-- Design -->
      <SkillCard icon="logos:figma" name="Figma" />
    </ul>
  </section>
</template>

<script>
import SectionHeading from "./SectionHeading.vue";
import SkillCard from "./SkillCard.vue";

export default {
  components: { SectionHeading, SkillCard },
};
</script>
