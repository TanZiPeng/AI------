<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const visible = ref(false)
const progress = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function start() {
  visible.value = true
  progress.value = 0
  timer = setInterval(() => {
    if (progress.value < 85) progress.value += Math.random() * 8 + 2
  }, 120)
}

function finish() {
  if (timer) { clearInterval(timer); timer = null }
  progress.value = 100
  setTimeout(() => { visible.value = false; progress.value = 0 }, 400)
}

onMounted(() => {
  const router = useRouter()
  router.onBeforeRouteChange = start
  router.onAfterRouteChange = finish
})
</script>

<template>
  <div class="loading-bar-wrap" :class="{ active: visible }">
    <div class="loading-bar" :style="{ width: progress + '%' }" />
  </div>
</template>

<style scoped>
.loading-bar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.loading-bar-wrap.active {
  opacity: 1;
}
.loading-bar {
  height: 2px;
  background: var(--vp-c-brand-1);
  transition: width 0.15s ease, opacity 0.4s;
  box-shadow: 0 0 6px var(--vp-c-brand-1);
}
</style>
