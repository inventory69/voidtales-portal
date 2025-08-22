<template>
  <main>
    <div class="container">
      <header class="flex items-center justify-between w-full mb-6">
        <Logo />
        <ThemeToggle />
      </header>

      <Hero />

      <footer class="mt-8 text-sm text-[#9fa3d6] text-center">
        <p>© VoidTales — A Station Between the Worlds</p>
      </footer>
    </div>
  </main>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Logo from '~/components/Logo.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
</script>

<style scoped>
.container { text-align:left; width:100%; max-width:1100px; margin:0 auto; padding:56px 20px; }
.header { display:flex; justify-content:space-between; align-items:center; }
</style>
