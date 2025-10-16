<template>
  <div
    id="certificates"
    class="w-full h-full flex flex-col justify-center items-center py-16"
  >
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Certificates</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Certificates and achievements that demonstrate my skills
      </p>
    </header>

    <!-- Certificates Grid -->
    <div class="flex flex-col gap-8 mx-auto w-full max-w-4xl">
      <!-- Certificate Card -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden w-full">
        <img
          src="../assets/image/Acledacertificate.png"
          alt="Certificate Image"
          class="w-full h-full object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-1">Internship Certificate – ACLEDA University of Business</h2>
          <p class="text-gray-700 mb-4 line-clamp-4">
            Successfully completed a 6–7 month internship at ACLEDA University of Business, contributing to web development projects and gaining hands-on experience in frontend and backend development, teamwork, and professional workflows.
          </p>
          <a
            href="/Portfolio/AUB-Certificte_C0000092.pdf"
            target="_blank"
            class="text-[#1da1ff] font-semibold hover:underline"
          >
            View Certificate
          </a>
        </div>
      </div>

      <!-- Add more certificates below if needed -->
      <!-- Each will be full-width row -->
    </div>
  </div>
</template>
