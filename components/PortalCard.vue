<template>
  <a :href="href" class="portal-card" :aria-label="label">
    <div class="portal-icon"><slot name="icon"><svg width="34" height="34" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(89,91,202,0.9)"/></svg></slot></div>
    <div class="portal-title">{{ title }}</div>
    <div class="portal-hint">{{ hint }}</div>
  </a>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  hint: { type: String, default: '' },
  href: { type: String, required: true },
  label: { type: String, default: 'Open portal' }
})
</script>

<style scoped>
/* small local tweaks if needed (globals in main.css) */
</style>
