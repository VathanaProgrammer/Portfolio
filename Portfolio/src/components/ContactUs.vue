<template>
  <div class="flex justify-center items-center sm:h-screen h-full py-30  text-gray-700">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-16 text-xl place-content-center-safe w-full">
      
      <!-- Left: Contact Form -->
      <div class="flex flex-col sm:p-15 p-5 shadow-lg rounded-lg bg-gradient-to-r from-blue-50 via-gray-50 to-white">
        <h4 class="sm:text-5xl text-4xl sm-text-start text-center font-semibold mb-2">
          Contact <span class="text-orange-400">Us</span>
        </h4>
        <h4 class="sm:text-3xl text-xl font-medium mb-4">Get in Touch</h4>
        <p class="mb-6 text-gray-950 sm:text-xl text-sm">
          Have questions or need help? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form class="flex flex-col sm:grid sm:grid-cols-2 gap-5 space-y-4 sm:text-xl text-sm">
          <input
            type="text"
            placeholder="Your Name"
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            class="border border-gray-300 p-2 rounded resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
          ></textarea>
          <button
            type="submit"
            class="bg-blue-500 text-white sm:place-self-start place-self-end sm:col-start-1 mx-2 col-start-2 sm:text-xl text-sm sm:px-4 px-2 py-2 sm:py-2 rounded hover:bg-blue-600 w-max"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-4 sm:p-15 px-5 sm:text-xl text-sm">
        <h5 class="sm:text-5xl text-3xl font-semibold mb-4 sm:text-start text-center">Contact <span class=" text-orange-400">Information</span></h5>
        
        <p class="text-gray-700">
          <i class="fa-solid fa-envelope mx-2"></i>
          <strong>Email :</strong> support@example.com
        </p>

        <p class="text-gray-700">
          <i class="fa-solid fa-phone mx-2"></i>
          <strong>Phone : </strong> +855 12 345 678
        </p>

        <p class="text-gray-700">
          <i class="fa-solid fa-location-dot mx-2"></i>
          <strong>Address : </strong> No. 123, Phnom Penh, Cambodia
        </p>

        <p class="mt-4 text-sm text-gray-500">
          Available Monday to Friday, 8:00 AM – 5:00 PM.
        </p>
      </div>

    </div>
  </div>
</template>
