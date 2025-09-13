<script setup></script>

<template>
  <LayoutScrollSmooth>
    <section id="contact" class="max-w-5xl mx-auto px-4 lg:px-0">
      <div
        class="mesh-gradient flex items-center flex-col rounded-3xl border bg-[#0b061a] border-white/10 p-10 relative"
      >
        <div class="flex flex-col items-center">
          <h2 class="text-center !max-w-xl section-title">{{ CTA.label }}</h2>
          <p class="paragraph max-w-xl text-center mt-8">
            {{ CTA.description }}
          </p>

          <!-- Social Icons -->
          <div class="flex gap-6 justify-center items-center mt-10">
            <a
              v-for="(item, i) in HERO.socialIcons"
              :key="i"
              :href="item.url"
              target="_blank"
              class="icon-wrapper p-4 bg-white rounded-full cursor-pointer transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:bg-[#3b82f6] hover:shadow-lg"
            >
              <img :src="item.icon" class="w-6 h-6" />
            </a>
          </div>

          <Button
            class="mt-10"
            variant="btn-primary"
            label="Start Securing"
            disabled
          />
          

          <div
            class="my-8 w-4/5 h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          ></div>

          <div class="flex items-center gap-4 lg:gap-10">
            <NuxtLink
              class="text-white/60 group text-sm lg:text-base"
              v-for="link in NAVLINKS"
              :to="link.url"
            >
              <div class="relative overflow-hidden">
                <p
                  class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  {{ link.label }}
                </p>
                <p
                  class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  {{ link.label }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <p class="text-sm text-white/30 text-center mt-8">
          &copy; Copyright
          <NuxtLink to="htt" target="_blank"
            >Genet Shibru Built with ❤️
          </NuxtLink>
          2025
        </p>

        <div
          class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
        ></div>
        <div
          class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"
        ></div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>
