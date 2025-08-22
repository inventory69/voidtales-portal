<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="container text-center">
      <div v-if="error" class="text-red-300">{{ error }}</div>

      <div v-else-if="loading" class="space-y-6">
        <div class="mx-auto w-48 h-48">
          <div class="portal" aria-hidden="true"></div>
        </div>
        <div>Preparing to open <strong>{{ meta.title }}</strong>…</div>
      </div>

      <div v-else class="space-y-4">
        <div class="mx-auto w-48 h-48"><div class="portal active" aria-hidden="true"></div></div>
        <h2 class="text-2xl">You will be redirected to <strong>{{ meta.title }}</strong></h2>
        <p class="text-[#cfcff0]">{{ meta.target }}</p>

        <div class="flex gap-3 justify-center mt-4">
          <button @click="goNow" class="link-button">Go now</button>
          <button @click="cancel" class="link-button">Cancel</button>
        </div>

        <div class="mt-3">Redirecting in <strong>{{ countdown }}</strong>…</div>

        <noscript>
          <!-- Avoid template-literals and backticks here; use string concat in binding if needed -->
          <meta http-equiv="refresh" :content="'0;url=' + meta.target" />
          <p>No JavaScript: you will be redirected immediately. If not, <a :href="meta.target">click here</a>.</p>
        </noscript>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
const route = useRoute()
const router = useRouter()
const site = route.params.site

const loading = ref(true)
const error = ref('')
const meta = ref({ site: '', title: '', target: '' })
const countdown = ref(4)
let intervalId = null
let timeoutId = null
let redirected = false

async function fetchMeta() {
  try {
    const res = await $fetch(`/api/lookup/${site}`)
    meta.value = res
    loading.value = false
    startCountdown()
  } catch (err) {
    error.value = err?.message || 'Unknown portal'
  }
}

function startCountdown() {
  clearTimer()
  intervalId = setInterval(() => {
    if (countdown.value > 0) countdown.value--
  }, 1000)
  timeoutId = setTimeout(goNow, countdown.value * 1000)
}

function clearTimer(){
  if (intervalId) { clearInterval(intervalId); intervalId = null }
  if (timeoutId) { clearTimeout(timeoutId); timeoutId = null }
}

function goNow() {
  if (redirected) return
  redirected = true
  clearTimer()
  window.location.href = `/api/goto/${site}`
}
function cancel(){ clearTimer(); router.push('/') }

onMounted(fetchMeta)
onUnmounted(clearTimer)
</script>

<style scoped>
.portal{width:100%;height:100%;border-radius:999px;border:8px solid rgba(89,91,202,0.14);box-shadow:0 0 60px rgba(89,91,202,0.06) inset;transition:transform .8s}
.portal.active{transform:scale(1.08);box-shadow:0 0 160px rgba(0,229,255,0.06),0 0 40px rgba(89,91,202,0.12)}
.link-button{padding:10px 16px;border-radius:10px;background:rgba(255,255,255,0.03);cursor:pointer}
</style>
