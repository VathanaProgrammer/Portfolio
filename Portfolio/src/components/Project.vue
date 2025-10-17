<template>
  <div
    id="projects"
    class="w-full h-full flex flex-col justify-center items-center py-16"
  >
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Projects</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        A selection of web applications I've built using various technologies
      </p>
    </header>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      <!-- Project Card -->
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105"
      >
        <img
          src="../assets/image/Pos.png"
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
        </div>
      </div>
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105"
      >
        <img
          src="../assets/image/Pos_django.png"
          alt="Project 1"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">
            Django Point of Sale Application
          </h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            A full-stack Point of Sale (POS) system developed as my final
            project for the Web Development course. The application manages
            products, sales, customers, and transactions, with Django handling
            the backend and SQLite as the database. jQuery is used for
            interactive frontend features, such as dynamic forms and real-time
            updates.
          </p>

          <!-- <a -->
          <!-- href="https://github.com/VathanaProgrammer/Intern_pos_project" -->
          <!-- class="text-[#1da1ff] font-semibold hover:underline" -->
          <!-- > -->
          <!-- View Project -->
          <!-- </a> -->
        </div>
      </div>
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105"
      >
        <img
          src="../assets/image/Library_mgmt.png"
          alt="Project 1"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">Library Management System</h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            Library Management System — A desktop application built with C# and
            .NET to manage books, users, and borrowing records. Supports full
            CRUD operations, search, reporting, and real-time stock tracking for
            borrowed and returned books.
          </p>
        </div>
      </div>
    </div>

    <!-- See More Button -->
    <div class="mt-10">
      <a
        href="https://github.com/VathanaProgrammer?tab=repositories"
        target="_blank"
        class="bg-[#1da1ff] px-4 md:text-[18px] py-3 inline-flex items-center text-white rounded-lg shadow-md hover:bg-[#0d8de3] transition"
      >
        See More on GitHub
        <span> <Icon icon="ic:round-navigate-next" class="w-8 h-8" /></span>
      </a>
    </div>
  </div>
</template>
