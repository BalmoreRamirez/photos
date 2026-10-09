<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

// El audio arranca cuando el componente se monta (ya hubo gesto del usuario)
const audio = ref<HTMLAudioElement | null>(null)
const playing = ref(false)
const mounted = ref(false)

function init() {
  if (audio.value) return
  const el = new Audio('/music/bgm.mp3')
  el.loop = true
  el.volume = 0
  audio.value = el

  el.play().then(() => {
    playing.value = true
    fadeIn()
  }).catch(() => {
    // El navegador bloqueó el autoplay: mostramos el botón sin reproducir
    playing.value = false
  })

  mounted.value = true
}

function fadeIn() {
  if (!audio.value) return
  const step = () => {
    if (!audio.value) return
    if (audio.value.volume < 0.55) {
      audio.value.volume = Math.min(0.55, audio.value.volume + 0.01)
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

function fadeOut(then?: () => void) {
  if (!audio.value) return
  const step = () => {
    if (!audio.value) return
    if (audio.value.volume > 0.01) {
      audio.value.volume = Math.max(0, audio.value.volume - 0.015)
      requestAnimationFrame(step)
    } else {
      audio.value.pause()
      then?.()
    }
  }
  requestAnimationFrame(step)
}

function toggle() {
  if (!audio.value) {
    init()
    return
  }
  if (playing.value) {
    fadeOut(() => { playing.value = false })
  } else {
    audio.value.play().then(() => {
      playing.value = true
      fadeIn()
    })
  }
}

defineExpose({ init })

onUnmounted(() => {
  if (audio.value) {
    audio.value.pause()
    audio.value = null
  }
})
</script>

<template>
  <button
    class="audio-btn"
    :class="{ 'audio-btn--playing': playing }"
    :aria-label="playing ? 'Pausar música' : 'Reproducir música'"
    :title="playing ? 'Pausar música' : 'Reproducir música'"
    @click="toggle"
  >
    <span class="audio-btn__icon" aria-hidden="true">
      <svg v-if="playing" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <!-- Pause icon -->
        <rect x="4" y="3" width="4" height="14" rx="1" />
        <rect x="12" y="3" width="4" height="14" rx="1" />
      </svg>
      <svg v-else viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <!-- Music note -->
        <path d="M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9z"/>
      </svg>
    </span>
  </button>
</template>

<style scoped>
.audio-btn {
  position: fixed;
  bottom: 1.2rem;
  right: 1.2rem;
  z-index: 60;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(255, 252, 247, 0.80);
  backdrop-filter: blur(10px);
  color: var(--color-text-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.25s, background 0.25s, transform 0.25s;
  box-shadow: 0 2px 10px rgba(73, 53, 43, 0.10);
}

.audio-btn:hover,
.audio-btn:focus-visible {
  color: var(--color-accent);
  outline: none;
}

.audio-btn--playing {
  color: var(--color-accent);
  background: rgba(255, 252, 247, 0.95);
}

.audio-btn--playing .audio-btn__icon {
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
</style>
