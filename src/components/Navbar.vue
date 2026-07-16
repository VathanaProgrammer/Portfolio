<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
      isScrolled
        ? 'border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl'
        : 'border-transparent bg-white/70 backdrop-blur-md',
    ]"
  >
    <div
      class="relative mx-auto flex w-full max-w-[96rem] flex-wrap items-center justify-between px-4 py-4 sm:px-8 lg:px-14 xl:px-20"
    >
      <a
        href="#top"
        class="text-3xl font-bold tracking-[0.08em] text-[#14243b] md:text-4xl"
        aria-label="Sieng Vathana portfolio home"
        @click="closeMenu"
      >
        VATHANA<span class="text-[#1688dc]">.</span>
      </a>

      <button
        type="button"
        class="rounded-lg p-2 text-slate-900 lg:hidden"
        :aria-expanded="isOpen"
        aria-controls="portfolio-navigation"
        :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <svg
          v-if="!isOpen"
          class="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          v-else
          class="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <transition name="menu-fade">
        <nav
          v-if="isOpen || isLargeScreen"
          id="portfolio-navigation"
          aria-label="Portfolio sections"
          class="absolute left-0 top-full w-full border-t border-slate-200 bg-white p-4 shadow-lg lg:static lg:w-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
        >
          <ul class="items-center gap-6 text-slate-700 lg:flex xl:gap-8">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                class="group relative block py-2 text-lg font-semibold leading-tight lg:inline-block lg:py-1"
                @click="closeMenu"
              >
                {{ item.label }}
                <span
                  class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1688dc] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                ></span>
              </a>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isLargeScreen: false,
      isScrolled: false,
      navItems: [
        { label: "Portfolio", href: "#top" },
        { label: "About me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experiences", href: "#experiences" },
        { label: "Certificates", href: "#certificates" },
        { label: "Contact", href: "#contact" },
      ],
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
      this.isLargeScreen = window.innerWidth >= 1024;
      if (this.isLargeScreen) {
        this.isOpen = false;
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
