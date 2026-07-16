<template>
  <section id="projects" class="flex w-full flex-col items-center py-24">
    <SectionHeading
      title="Projects"
      description="A selection of web and desktop applications I've built using different technologies"
    />

    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(20,36,59,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,36,59,0.12)]"
      >
        <div class="overflow-hidden border-b border-slate-100">
          <img
            :src="project.image"
            :alt="project.alt"
            class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div class="p-6">
          <h3 class="mb-3 text-2xl font-bold leading-tight text-[#14243b]">
            {{ project.title }}
          </h3>
          <p class="line-clamp-5 leading-relaxed text-slate-600">
            {{ project.description }}
          </p>
        </div>
      </article>
    </div>

    <div class="mt-10">
      <a
        href="https://github.com/VathanaProgrammer?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-lg bg-[#1688dc] px-5 py-3 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(22,136,220,0.2)] transition hover:-translate-y-0.5 hover:bg-[#086daf]"
      >
        See more on GitHub
        <Icon icon="ic:round-navigate-next" class="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import SectionHeading from "./SectionHeading.vue";
import libraryImage from "../assets/image/Library_mgmt.png";
import posDjangoImage from "../assets/image/Pos_django.png";
import posImage from "../assets/image/Pos.png";

export default {
  components: { Icon, SectionHeading },
  data() {
    return {
      projects: [
        {
          title: "POS System Website",
          image: posImage,
          alt: "Point of sale system product dashboard",
          description:
            "A POS system web app developed during my internship, built together with my teammates. It manages products, sales, customers, and transactions using SQL Server for data storage and jQuery for interactive features. The project helped me gain real experience in teamwork, backend development, and handling database-driven applications.",
        },
        {
          title: "Django Point of Sale Application",
          image: posDjangoImage,
          alt: "Django point of sale application dashboard",
          description:
            "A full-stack Point of Sale (POS) system developed as my final project for the Web Development course. The application manages products, sales, customers, and transactions, with Django handling the backend and SQLite as the database. jQuery is used for interactive frontend features, such as dynamic forms and real-time updates.",
        },
        {
          title: "Library Management System",
          image: libraryImage,
          alt: "Library management desktop application",
          description:
            "Library Management System — A desktop application built with C# and .NET to manage books, users, and borrowing records. Supports full CRUD operations, search, reporting, and real-time stock tracking for borrowed and returned books.",
        },
      ],
    };
  },
};
</script>
