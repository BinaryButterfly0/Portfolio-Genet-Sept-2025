<template>
 <LayoutScrollSmooth>
  <section id="work" class="container max-w-6xl mx-auto px-6">
    <!-- Content -->
    <p class="badge text-sm">{{ WORK.label }}</p>
    <h2 class="section-title text-3xl lg:text-4xl">
      {{ WORK.headline }}
    </h2>
    <p class="paragraph mt-4 max-w-lg text-base">
      {{ WORK.subline }}
    </p>

    <!-- Works List -->
    <div class="grid md:grid-cols-2 gap-5 mt-14">

      <div 
        class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group" 
        v-for="item in WORK.works" 
        :key="item.name"
      >
        <div class="overflow-hidden aspect-[4/3] rounded-lg w-full h-52">
          <img 
            class="group-hover:scale-105 transition-all duration-500 w-full h-full object-cover" 
            :src="'/images/work/' + item.thumbnails" 
            :alt="'Thumbnail ' + item.name "
          >
        </div>

        <div class="absolute bottom-5 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-5 bg-gradient-to-t bg-black/85 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4 text-sm">
          <div>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-white text-lg lg:text-xl font-bold tracking-wide">{{ item.name }}</h3>
                <p class="font-medium uppercase tracking-wide text-gray-500">{{item.type}}</p>
              </div>
              <NuxtLink :to="item.live_demo">
                <VsxIcon class="text-blue-400" iconName="ExportSquare" :size="22" type="linear" />
              </NuxtLink>
            </div>
            <div class="bg-gradient-to-r w-40 h-[1px] from-transparent via-blue-500 to-transparent my-2"></div>
            <p class="text-gray-400">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="absolute bottom-0 w-56 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
      </div>
    </div>
  </section>
 </LayoutScrollSmooth>
</template>