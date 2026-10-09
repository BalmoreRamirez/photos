<script setup lang="ts">
import type { EmotionalPause } from '@/types/story'

defineProps<{
  pause: EmotionalPause
}>()

defineEmits<{ next: []; prev: [] }>()
</script>

<template>
  <section class="pause" aria-label="Pausa">
    <div class="pause__inner">
      <div class="pause__ornament" aria-hidden="true">♡</div>
      <p class="pause__text serif">{{ pause.text }}</p>
      <div class="pause__ornament pause__ornament--small" aria-hidden="true">✦</div>
    </div>

    <nav class="pause__nav" aria-label="Continuar">
      <button class="pause__nav-prev" @click="$emit('prev')" aria-label="Volver">← Volver</button>
      <button class="pause__nav-next" @click="$emit('next')" aria-label="Continuar">Continuar →</button>
    </nav>
  </section>
</template>

<style scoped>
.pause {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 5rem;
  background: var(--color-surface);
}

.pause__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  max-width: 280px;
  animation: fadeUp 0.8s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.pause__ornament {
  font-size: 1.4rem;
  color: var(--color-accent-rose);
  opacity: 0.6;
}

.pause__ornament--small {
  font-size: 0.7rem;
  letter-spacing: 0.5em;
  color: var(--color-border);
}

.pause__text {
  font-size: clamp(1.1rem, 4vw, 1.4rem);
  font-style: italic;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.pause__nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(to top, var(--color-surface) 60%, transparent);
}

.pause__nav-prev,
.pause__nav-next {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-soft);
  transition: color 0.2s;
}

.pause__nav-next {
  color: var(--color-accent);
}

.pause__nav-prev:hover,
.pause__nav-next:hover {
  opacity: 0.7;
}
</style>
