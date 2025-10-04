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
          class=" object-cover rounded-xl"
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
           I’m a Web Developer and a third-year Computer Science student with 6–7 months of internship experience, where I worked on building web applications both independently and with a team. I enjoy creating clean and interactive websites and building backends that bring projects to life.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed">
            I’m a friendly and open-minded person who values teamwork and clear communication. I like sharing ideas, learning from others, and supporting my teammates to reach goals together. Problem-solving is something I enjoy, whether it’s connecting APIs, managing databases, or fixing unexpected issues
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            I’m always curious to learn new technologies and improve my skills. My goal is to grow as a developer, take on real-world challenges, and create web experiences that are not only functional but also enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
