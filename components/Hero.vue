<template>
  <section class="hero">
    <div class="glass">
      <div style="display:flex;align-items:center;gap:18px;">
        <div style="width:120px;height:120px;">
          <img src="/svg/voidtales.svg" alt="VoidTales Emblem" style="width:100%;height:100%;object-fit:contain" />
        </div>
        <div>
          <h1 class="h-title">VoidTales</h1>
          <p class="h-sub">A Station Between the Worlds — choose your portal</p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-3">
        <PortalCard
          v-for="p in portals"
          :key="p.id"
          :title="p.title"
          :hint="p.hint"
          :href="`/goto/${p.id}`"
          :label="`Open ${p.title}`"
        >
          <template #icon>
            <img src="/svg/voidtales.svg" alt="" style="width:34px;height:34px;opacity:.95"/>
          </template>
        </PortalCard>
      </div>
    </div>

    <div>
      <div class="glass" style="padding:28px;">
        <h2 style="font-size:1.15rem; margin:0 0 8px 0">Welcome, Awakened</h2>
        <p class="h-sub">Step through the portal to the forum, blog or wiki — each doorway connects to fragments of a larger truth.</p>

        <div class="relative mt-6" style="height:260px;">
          <img src="/svg/voidtales.svg" alt="" style="width:100%;height:100%;object-fit:contain;opacity:.06;transform:translateY(6%);"/>
          <span v-for="i in 6" :key="i" class="fragment" :style="fragStyle(i)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PortalCard from '~/components/PortalCard.vue'

const portals = [
  { id: 'forum', title: 'Forum', hint: 'forum.voidtales.win' },
  { id: 'blog',  title: 'Blog',  hint: 'blog.voidtales.win' },
  { id: 'wiki',  title: 'Wiki',  hint: 'wiki.voidtales.win' },
  { id: 'discord', title:'Discord', hint: 'discord.voidtales.win' }
]

function fragStyle(i) {
  const left = 6 + i * 14 + (i % 2 ? 6 : 0)
  const top = 6 + (i * 8)
  const delay = (i * 0.45) + 's'
  return {
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: delay
  }
}
</script>

<style scoped>
.mt-6 { margin-top: 1.5rem; }
.grid { display:grid; gap:12px; }
</style>
