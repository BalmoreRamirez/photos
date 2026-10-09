<script setup lang="ts">
import type { Chapter } from '@/types/story'

defineProps<{
  chapter: Chapter
  chapterIndex: number
}>()

defineEmits<{ next: [] }>()
</script>

<template>
  <section class="chapter" aria-label="`Capítulo ${chapterIndex + 1}`">
    <div class="chapter__inner">
      <span class="chapter__number">{{ String(chapterIndex + 1).padStart(2, '0') }}</span>
      <div class="chapter__divider" aria-hidden="true" />
      <h2 class="chapter__title serif">{{ chapter.title }}</h2>
      <p class="chapter__intro serif">{{ chapter.introduction }}</p>
      <button class="chapter__btn" @click="$emit('next')" aria-label="Continuar">
        Continuar
        <span aria-hidden="true"> →</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.chapter {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  background: var(--color-bg);
}

.chapter__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  max-width: 300px;
}

.chapter__number {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.chapter__divider {
  width: 32px;
  height: 1px;
  background: var(--color-border);
}

.chapter__title {
  font-size: clamp(1.8rem, 7vw, 2.6rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text);
}

.chapter__intro {
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.chapter__btn {
  margin-top: 0.8rem;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 2px;
  transition: opacity 0.2s;
}

.chapter__btn:hover,
.chapter__btn:focus-visible {
  opacity: 0.7;
  outline: none;
}
</style>
