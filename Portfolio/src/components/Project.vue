<template>
  <div
    id="projects"
    class="w-full h-full flex flex-col justify-center items-center py-16"
  >
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">My Projects</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        A selection of web applications I've built using various technologies
      </p>
    </header>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto"
    >
      <!-- Project Card -->
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md"
      >
        <img
          src="../assets/image/M.png"
          alt="Project 1"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">POS System Website</h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            A POS system web app developed during my internship, built together
            with my teammates. It manages products, sales, customers, and
            transactions using SQL Server for data storage and jQuery for
            interactive features. The project helped me gain real experience in
            teamwork, backend development, and handling database-driven
            applications.
          </p>

          <a
            href="https://github.com/VathanaProgrammer/Intern_pos_project.git"
            class="text-[#1da1ff] font-semibold hover:underline"
          >
            View Project
          </a>
        </div>
      </div>

      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md"
      >
        <img
          src="../assets/image/M.png"
          alt="Project 1"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">POS System Website</h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            A POS system web app developed during my internship, built together
            with my teammates. It manages products, sales, customers, and
            transactions using SQL Server for data storage and jQuery for
            interactive features. The project helped me gain real experience in
            teamwork, backend development, and handling database-driven
            applications.
          </p>

          <a
            href="https://github.com/VathanaProgrammer/Intern_pos_project.git"
            class="text-[#1da1ff] font-semibold hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
