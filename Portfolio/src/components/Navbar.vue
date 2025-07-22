<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 p-2 md:px-14 lg:px-22 xl:px-32 2xl:px-64 flex flex-wrap items-center py-4"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="#" class="text-4xl font-bold text-gray-800"
        >Sieng <span class="text-[#2DA6FF]">Vathana</span></a
      >
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
        <ul class="md:flex items-center gap-8 text-gray-700 pt-4 md:pt-0">
          <li>
            <a
              href="#"
              class="group relative text-xl lg:text-2xl font-semibold inline-block pb-1 leading-tight"
            >
              Portfolio
              <span
                class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative text-xl lg:text-2xl font-semibold inline-block pb-1 leading-tight"
            >
              Projects
              <span
                class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative text-xl lg:text-2xl font-semibold inline-block pb-1 leading-tight"
            >
              About me
              <span
                class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative text-xl lg:text-2xl font-semibold inline-block pb-1 leading-tight"
            >
              Contact
              <span
                class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
