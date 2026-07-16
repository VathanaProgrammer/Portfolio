<template>
  <section
    id="about"
    aria-labelledby="about-title"
    class="flex min-h-screen w-full items-center justify-center py-24"
  >
    <div
      class="grid w-full grid-cols-1 place-items-center gap-12 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.5fr)] lg:gap-20"
    >
      <!-- Profile Image -->
      <div
        class="flex w-full min-w-[200px] justify-center p-1"
      >
        <img
          src="../assets/image/anime_profile_user.jpg"
          class="h-72 w-72 rounded-[2rem] border border-white object-cover shadow-[0_24px_60px_rgba(20,36,59,0.16)]"
          alt="Illustrated portrait of Sieng Vathana"
        />
      </div>

      <!-- About Me Text -->
      <div class="w-full max-w-2xl">
        <div class="space-y-6">
          <div class="flex items-center gap-2" aria-hidden="true">
            <span class="h-2 w-2 rounded-full bg-[#1688dc]"></span>
            <span class="h-px w-12 bg-[#1688dc]/45"></span>
            <span class="h-2 w-2 rounded-full border-2 border-[#1688dc]"></span>
          </div>

          <h2 id="about-title" class="text-3xl font-bold tracking-tight text-[#14243b] lg:text-5xl">
            About me
          </h2>

          <p class="text-lg leading-relaxed text-slate-600">
            I’m a <span class="font-semibold">Programmer</span> and a third-year 
            <span class="font-semibold">Computer Science student</span> with over 6 months of internship experience. 
            I’ve built full-stack web and desktop applications using 
            <span class="font-semibold">Vue.js, Laravel, Spring Boot, Django, ASP.NET Core,</span> and 
            <span class="font-semibold">C#</span>.
          </p>

          <p class="text-lg leading-relaxed text-slate-600">
            I enjoy creating <span class="font-semibold">clean, responsive interfaces</span> 
            and developing <span class="font-semibold">reliable backend systems</span>. 
            During my internship, I worked closely with teams to plan, build, and deploy real-world projects.
          </p>

          <p class="text-lg leading-relaxed text-slate-600">
            I’m a <span class="font-semibold">team player</span> who values communication, learning, and problem-solving — 
            whether it’s fixing bugs, integrating APIs, or optimizing database performance. 
            My goal is to grow as a developer and build software that’s both functional and enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
