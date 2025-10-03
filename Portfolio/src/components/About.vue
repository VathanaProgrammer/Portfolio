<template>
  <div
    id="about"
    class="w-full h-full sm:h-screen flex justify-center items-center pt-32"
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
          class=" object-cover rounded-xl"
          alt="Profile"
        />
      </div>

      <!-- About Me Text -->
      <div class="col-span-2 w-full sm:p-10 p-5">
        <div class="space-y-6">
          <h1 class="lg:text-5xl text-3xl font-semibold">
            About <span class="text-[#1da1ff]">Me</span>
          </h1>

          <p class="text-lg text-gray-700 leading-relaxed">
            I’m a Web Developer and currently a third-year Computer Science student with 6–7 months of internship experience, where I built web applications both independently and as part of a team. I enjoy creating clean and interactive websites using Vue.js, Tailwind CSS, Bootstrap, and jQuery, and building backends with Laravel, Spring Boot and ASP.NET Core.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            I love collaborating with teams, solving problems, and connecting APIs and databases to make apps work smoothly. I’m excited about opportunities where I can build real projects, learn new technologies, and create web experiences that people enjoy using.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
