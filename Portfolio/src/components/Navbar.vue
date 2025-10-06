<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 p-2 md:px-14 lg:px-22 xl:px-32 2xl:px-64 flex flex-wrap items-center py-4 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="#" class="text-3xl md:text-4xl font-bold text-gray-800">
        <span class="text-[#2DA6FF]">VATHANA</span>
      </a>
    </div>

    <!-- Hamburger / X toggle -->
    <button @click="toggleMenu" class="lg:hidden focus:outline-none">
      <svg
        v-if="!isOpen"
        class="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-gray-900 transition-transform duration-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>

      <svg
        v-else
        class="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-gray-900 transition-transform duration-300 transform rotate-180"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Menu -->
    <transition name="menu-fade">
      <div
        v-if="isOpen || isLargeScreen"
        class="lg:flex lg:items-center lg:w-auto w-full absolute lg:static top-full left-0 bg-white lg:bg-transparent lg:shadow-none shadow-lg p-4 lg:p-0"
      >
        <nav>
          <ul class="lg:flex items-center gap-8 text-gray-700 pt-4 md:pt-0">
            <li>
              <a
                href="#"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                Portfolio
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                About me
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                Skills
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                Projects
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                Experiences
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
              >
                Certificates
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-[#2DA6FF] transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="group relative text-lg lg:text-xl font-semibold inline-block pb-1 leading-tight"
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
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isLargeScreen: false,
      isScrolled: false, // NEW
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      if (!this.isLargeScreen) {
        this.isOpen = false;
      }
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 1024; // md breakpoint
      if (this.isLargeScreen) {
        this.isOpen = false;
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10; // Add background when scroll > 10px
    },
  },
  mounted() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.menu-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #2da6ff;
  transition: width 0.3s ease;
}

.menu-link:hover::after {
  width: 100%;
}

/* Menu animation */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
