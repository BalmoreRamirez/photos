<script setup lang="ts">
import { ref, computed } from 'vue'
import { BookOpen } from '@lucide/vue'

import StoryCover from '@/components/StoryCover.vue'
import ChapterIntro from '@/components/ChapterIntro.vue'
import MemoryScene from '@/components/MemoryScene.vue'
import EmotionalPauseScene from '@/components/EmotionalPauseScene.vue'
import FinalLetter from '@/components/FinalLetter.vue'
import StoryProgress from '@/components/StoryProgress.vue'
import ChapterIndex from '@/components/ChapterIndex.vue'
import QRPrintPage from '@/components/QRPrintPage.vue'

import { useStory } from '@/composables/useStory'

// Si la URL tiene ?qr, mostrar la página de impresión en lugar de la historia
const isPrintMode = new URLSearchParams(window.location.search).has('qr')

const {
  chapters,
  currentScene,
  currentIndex,
  totalScenes,
  totalMemories,
  progress,
  currentChapter,
  memoryNumber,
  goNext,
  goPrev,
  goToChapter,
  restart,
  getMemory,
  getChapter,
  getPause,
} = useStory()

const showIndex = ref(false)

const showProgress = computed(
  () => currentScene.value?.type !== 'cover' && currentScene.value?.type !== 'letter',
)

const chapterIndex = computed(() => {
  const id = currentChapter.value?.id
  if (!id) return 0
  return chapters.findIndex((c) => c.id === id)
})
</script>

<template>
  <!-- Modo impresión QR -->
  <QRPrintPage v-if="isPrintMode" />

  <!-- Historia principal -->
  <div v-else class="app">
    <StoryProgress
      v-if="showProgress"
      :progress="progress"
      :chapter="currentChapter?.title ?? null"
      :memory-index="memoryNumber"
      :total="totalScenes"
    />

    <div v-if="showProgress" class="app__controls">
      <button class="app__ctrl-btn" @click="showIndex = true" aria-label="Capítulos">
        <BookOpen :size="16" />
      </button>
    </div>

    <Transition name="page" mode="out-in">
      <div :key="currentIndex" class="app__scene">
        <StoryCover
          v-if="currentScene.type === 'cover'"
          @start="goNext"
        />

        <ChapterIntro
          v-else-if="currentScene.type === 'chapter-intro' && currentScene.chapterId"
          :chapter="getChapter(currentScene.chapterId)!"
          :chapter-index="chapterIndex"
          @next="goNext"
        />

        <MemoryScene
          v-else-if="currentScene.type === 'memory' && currentScene.memoryId"
          :memory="getMemory(currentScene.memoryId)!"
          :memory-number="memoryNumber"
          :total-memories="totalMemories"
          :can-go-prev="currentIndex > 1"
          :can-go-next="currentIndex < totalScenes - 1"
          @next="goNext"
          @prev="goPrev"
        />

        <EmotionalPauseScene
          v-else-if="currentScene.type === 'pause' && currentScene.pauseId"
          :pause="getPause(currentScene.pauseId)!"
          @next="goNext"
          @prev="goPrev"
        />

        <FinalLetter
          v-else-if="currentScene.type === 'letter'"
          @restart="restart"
        />
      </div>
    </Transition>

    <ChapterIndex
      v-if="showIndex"
      :chapters="chapters"
      :current-chapter-id="currentChapter?.id ?? null"
      @close="showIndex = false"
      @go-to-chapter="(id) => { goToChapter(id); showIndex = false }"
    />
  </div>
</template>

<style scoped>
.app {
  min-height: 100dvh;
  position: relative;
}

.app__scene {
  min-height: 100dvh;
}

.app__controls {
  position: fixed;
  top: 14px;
  right: 12px;
  z-index: 40;
  display: flex;
  gap: 0.4rem;
}

.app__ctrl-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 252, 247, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  color: var(--color-text-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, background 0.2s;
  box-shadow: 0 1px 6px rgba(73, 53, 43, 0.08);
}

.app__ctrl-btn:hover,
.app__ctrl-btn:focus-visible {
  color: var(--color-accent);
  outline: none;
}
</style>
