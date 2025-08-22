<template>
  <button class="theme-toggle" @click="toggle" :aria-pressed="isDark" aria-label="Toggle theme">
    <span v-if="isDark">🌙</span><span v-else>☀️</span>
  </button>
</template>
<script setup>
import { ref } from 'vue'
const isDark = ref(true)
function toggle(){ isDark.value = !isDark.value; document.documentElement.classList.toggle('light', !isDark.value) }
</script>
<style scoped>
.theme-toggle{background:transparent;border:none;color:#cfcff0;font-size:20px;padding:6px 10px;cursor:pointer}
</style>
