<template>
  <div class="flex justify-center items-center xl:h-screen h-full py-30  text-gray-700">
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-16 text-xl place-content-center w-full">

      <!-- Right: Contact Info -->
      <div class="flex flex-col gap-4 px-5 sm:text-xl text-sm">
        <h5 class="sm:text-6xl text-2xl font-semibold mb-4 ">Get in <span class=" text-orange-400">Touch</span></h5>
        <p class="text-2xl">I'd like to hear from you!</p>
        <p class="text-2xl">if you have any inquire or just want to say hi, please use the contact from!</p>
        
        <p class="text-gray-700 sm:text-xl text-sm">
          <i class="fa-solid fa-envelope mx-2"></i>
          <strong>Email :</strong> support@example.com
        </p>

        <p class="text-gray-700 sm:text-xl text-sm ">
          <i class="fa-solid fa-phone mx-2"></i>
          <strong>Phone : </strong> +855 12 345 678
        </p>

        <p class="text-gray-700 sm:text-xl text-sm ">
          <i class="fa-solid fa-location-dot mx-2"></i>
          <strong>Address : </strong> No. 123, Phnom Penh, Cambodia
        </p>
        <div class="flex items-center gap-2  h-15">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-telegram"></i>
        <i class="fa-brands fa-tiktok"></i>
        </div>

        <p class="mt-4 text-sm text-gray-500">
          Available Monday to Friday, 8:00 AM – 5:00 PM.
        </p>
      </div>
      
      <!-- Left: Contact Form -->
      <div class="flex flex-col sm:p-15 p-5 bg-gradient-to-r from-gray-100 via-gray-100 to-blue-100 shadow-sm shadow-gray-400">
        <form class="flex flex-col lg:grid lg:grid-cols-2 gap-5 space-y-4 sm:text-xl text-sm">
          <div>
            <p>First Name</p>
          <input
            type="text"
            placeholder="Your Name"
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          </div>
          <div>
            <p>First Name</p>
          <input
            type="text"
            placeholder="Your Name"
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          </div>
          <div class="w-full col-span-2"> 
            <p>Your Email</p>
          <input
            type="email"
            placeholder="Your Email"
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          </div>
          <div class="w-full col-span-2">
            <p>Your Message</p>
          <textarea
            placeholder="Your Message"
            class="border border-gray-300  p-2 rounded resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white sm:place-self-start place-self-end sm:col-start-1 mx-2 col-start-2 sm:text-xl text-sm sm:px-4 px-2 py-2 sm:py-2 rounded hover:bg-blue-600 w-max"
          >
            Send Message
          </button>
        </form>
      </div>

      

    </div>
  </div>
</template>
