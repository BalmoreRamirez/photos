<script setup lang="ts">
import type { Chapter } from '@/types/story'
import { X } from '@lucide/vue'

defineProps<{
  chapters: Chapter[]
  currentChapterId: string | null
}>()

const emit = defineEmits<{
  close: []
  goToChapter: [chapterId: string]
}>()
</script>

<template>
  <div class="index-overlay" role="dialog" aria-modal="true" aria-label="Índice de capítulos" @click.self="emit('close')">
    <div class="index__panel">
      <div class="index__head">
        <h2 class="index__heading serif">Nuestra historia</h2>
        <button class="index__close" @click="emit('close')" aria-label="Cerrar índice">
          <X :size="18" />
        </button>
      </div>

      <ol class="index__list">
        <li
          v-for="(chapter, i) in chapters"
          :key="chapter.id"
          class="index__item"
          :class="{ 'index__item--active': chapter.id === currentChapterId }"
        >
          <button class="index__btn" @click="emit('goToChapter', chapter.id)">
            <span class="index__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="index__title serif">{{ chapter.title }}</span>
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.index-overlay {
  position: fixed;
  inset: 0;
  background: rgba(73, 53, 43, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: flex;
  align-items: flex-end;
}

.index__panel {
  background: var(--color-surface);
  border-radius: 16px 16px 0 0;
  width: 100%;
  padding: 1.5rem 1.5rem calc(2.5rem + env(safe-area-inset-bottom));
  max-height: 80dvh;
  overflow-y: auto;
}

.index__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.index__heading {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text);
}

.index__close {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-soft);
  transition: background 0.2s;
}

.index__close:hover {
  background: var(--color-border);
}

.index__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.index__item {
  border-radius: 8px;
  overflow: hidden;
}

.index__item--active {
  background: var(--color-bg);
}

.index__btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0.6rem;
  text-align: left;
  transition: background 0.2s;
}

.index__btn:hover {
  background: var(--color-bg);
}

.index__num {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--color-accent);
  min-width: 24px;
}

.index__title {
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--color-text);
}
</style>
