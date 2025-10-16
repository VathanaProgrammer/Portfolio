<template>
  <div
    id="about"
    class="w-full min-h-screen flex justify-center items-center pt-5 md:pt-32"
  >
    <div
      class="grid xl:grid-cols-3 grid-cols-1 w-full h-full place-content-center place-items-center xl:gap-20 gap-3"
    >
      <!-- Profile Image -->
      <div
        class="xl:w-full w-1/2 max-w-[1000px] min-w-[200px] p-1 flex justify-center items-center"
      >
        <img
          src="../assets/image/vathana.png"
          class="object-cover rounded-xl"
          alt="Profile"
        />
      </div>

      <!-- About Me Text -->
      <div class="col-span-2 w-full max-w-xl px-5 sm:px-10">
        <div class="space-y-6">
          <h1 class="lg:text-5xl text-3xl font-semibold">
            <span class="text-[#1da1ff]">About Me</span>
          </h1>

          <p class="text-lg text-gray-700 leading-relaxed">
            I’m a <span class="font-semibold">Programmer</span> and a third-year 
            <span class="font-semibold">Computer Science student</span> with over 6 months of internship experience. 
            I’ve built full-stack web and desktop applications using 
            <span class="font-semibold">Vue.js, Laravel, Spring Boot, Django, ASP.NET Core,</span> and 
            <span class="font-semibold">C#</span>.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            I enjoy creating <span class="font-semibold">clean, responsive interfaces</span> 
            and developing <span class="font-semibold">reliable backend systems</span>. 
            During my internship, I worked closely with teams to plan, build, and deploy real-world projects.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            I’m a <span class="font-semibold">team player</span> who values communication, learning, and problem-solving — 
            whether it’s fixing bugs, integrating APIs, or optimizing database performance. 
            My goal is to grow as a developer and build software that’s both functional and enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
