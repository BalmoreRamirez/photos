<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{ start: [] }>()

const visible = ref(false)
onMounted(() => {
  setTimeout(() => (visible.value = true), 100)
})
</script>

<template>
  <section class="cover" :class="{ 'cover--visible': visible }" aria-label="Portada">
    <div class="cover__deco cover__deco--top" aria-hidden="true">✦</div>

    <div class="cover__content">
      <p class="cover__subtitle serif">Tengo algo bonito que quiero mostrarte...</p>

      <div class="cover__heart" aria-hidden="true">
        <svg viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 68C40 68 4 46 4 22C4 12.06 12.06 4 22 4C28.6 4 34.44 7.4 38 12.52C41.56 7.4 47.4 4 54 4C63.94 4 72 12.06 72 22C72 46 40 68 40 68Z"
            fill="var(--color-accent-rose)"
            opacity="0.35"
          />
          <path
            d="M40 62C40 62 8 43 8 22C8 14.27 14.27 8 22 8C27.8 8 32.84 11.16 36 16C39.16 11.16 44.2 8 50 8C57.73 8 64 14.27 64 22C64 43 40 62 40 62Z"
            fill="var(--color-accent)"
            opacity="0.6"
          />
        </svg>
      </div>

      <h1 class="cover__name serif">Gaby</h1>

      <p class="cover__hint">Abre este regalo con calma ♡</p>

      <button class="cover__btn" @click="emit('start')" aria-label="Descubrir nuestra historia">
        Descubrir nuestra historia
      </button>
    </div>

    <div class="cover__deco cover__deco--bottom" aria-hidden="true">✦</div>
  </section>
</template>

<style scoped>
.cover {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: var(--color-bg);
  opacity: 0;
  transition: opacity 0.8s ease;
}

.cover--visible {
  opacity: 1;
}

.cover__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  text-align: center;
  max-width: 320px;
}

.cover__subtitle {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--color-text-soft);
  font-weight: 300;
  line-height: 1.5;
}

.cover__heart {
  width: 72px;
  height: 64px;
  animation: heartbeat 3s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(1.08); }
  60% { transform: scale(0.96); }
}

.cover__name {
  font-size: clamp(3rem, 12vw, 5rem);
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--color-text);
  line-height: 1;
}

.cover__hint {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-soft);
}

.cover__btn {
  margin-top: 0.5rem;
  padding: 0.8rem 2rem;
  border: 1.5px solid var(--color-accent);
  border-radius: 60px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  background: transparent;
  transition: background 0.25s, color 0.25s;
}

.cover__btn:hover,
.cover__btn:focus-visible {
  background: var(--color-accent);
  color: var(--color-surface);
  outline: none;
}

.cover__deco {
  font-size: 0.7rem;
  color: var(--color-border);
  letter-spacing: 0.5em;
}

.cover__deco--top { margin-bottom: 2rem; }
.cover__deco--bottom { margin-top: 2rem; }
</style>
