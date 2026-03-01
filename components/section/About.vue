<script setup lang="ts"></script>

<template>
 <LayoutScrollSmooth>
  <section id="about" class="container">
    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-24">
      <!-- Content -->
      <div>
        <p class="badge">{{ ABOUT.label }}</p>
        <h2
          class="section-title"
        >
          {{ PROFILE.fullname }}
        </h2>

        <p class="paragraph mt-4" v-for="intro in ABOUT.introduce">
          {{ intro }}
        </p>

        <Button
          class="mt-8"
          label="Connect Me"
          to="https://www.linkedin.com/in/genet-shibru-eshetu/"
          variant="btn-dark"
        />
      </div>

      <img
  class="rounded-lg mix-blend-multiply lg:ml-24"
  :src="PROFILE.avatar"
  :alt="`${PROFILE.fullname} - ${PROFILE.role}`"
/>

      

      
    </div>


  </section>
 </LayoutScrollSmooth>
</template>
