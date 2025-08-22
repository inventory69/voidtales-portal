<template>
  <button class="theme-toggle" @click="toggle" :aria-pressed="isDark" aria-label="Toggle theme">
    <span v-if="isDark">🌙</span><span v-else>☀️</span>
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

function applyTheme(dark) {
  document.documentElement.classList.toggle('light', !dark)
  try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
}

function toggle() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  let saved
  try { saved = localStorage.getItem('theme') } catch {}
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  isDark.value = saved ? saved === 'dark' : prefersDark
  applyTheme(isDark.value)
})
</script>
<style scoped>
.theme-toggle{background:transparent;border:none;color:#cfcff0;font-size:20px;padding:6px 10px;cursor:pointer}
</style>
