import { ref, computed } from 'vue'
import type { Memory, Chapter, EmotionalPause, Scene } from '@/types/story'
import { memories } from '@/data/memories'
import { emotionalPauses } from '@/data/memories'
import { chapters } from '@/data/chapters'

export function useStory() {
  // Build flat scene list: cover → [chapter-intro → memories… → pause?]* → letter
  const scenes = computed<Scene[]>(() => {
    const list: Scene[] = [{ type: 'cover' }]

    for (const chapter of chapters) {
      list.push({ type: 'chapter-intro', chapterId: chapter.id })

      const chapterMemories = memories.filter((m) => m.chapterId === chapter.id)
      for (const memory of chapterMemories) {
        list.push({ type: 'memory', memoryId: memory.id, chapterId: chapter.id })

        const pause = emotionalPauses.find((p) => p.afterMemoryId === memory.id)
        if (pause) {
          list.push({ type: 'pause', pauseId: pause.id, chapterId: chapter.id })
        }
      }
    }

    list.push({ type: 'letter' })
    return list
  })

  const currentIndex = ref(0)
  const currentScene = computed(() => scenes.value[currentIndex.value])
  const totalScenes = computed(() => scenes.value.length)

  const progress = computed(() => {
    const storyStart = 1
    const storyEnd = totalScenes.value - 2
    if (currentIndex.value <= storyStart) return 0
    if (currentIndex.value >= totalScenes.value - 1) return 100
    return Math.round(((currentIndex.value - storyStart) / (storyEnd - storyStart)) * 100)
  })

  const currentChapter = computed<Chapter | null>(() => {
    const id = currentScene.value?.chapterId
    return id ? (chapters.find((c) => c.id === id) ?? null) : null
  })

  const memoryNumber = computed(() => {
    if (currentScene.value?.type !== 'memory') return 0
    return memories.findIndex((m) => m.id === currentScene.value.memoryId) + 1
  })

  const totalMemories = memories.length

  function goNext() {
    if (currentIndex.value < totalScenes.value - 1) currentIndex.value++
  }

  function goPrev() {
    if (currentIndex.value > 0) currentIndex.value--
  }

  function goToChapter(chapterId: string) {
    const idx = scenes.value.findIndex(
      (s) => s.type === 'chapter-intro' && s.chapterId === chapterId,
    )
    if (idx !== -1) currentIndex.value = idx
  }

  function restart() {
    currentIndex.value = 0
  }

  function getMemory(id: string): Memory | null {
    return memories.find((m) => m.id === id) ?? null
  }

  function getChapter(id: string): Chapter | null {
    return chapters.find((c) => c.id === id) ?? null
  }

  function getPause(id: string): EmotionalPause | null {
    return emotionalPauses.find((p) => p.id === id) ?? null
  }

  return {
    chapters,
    scenes,
    currentIndex,
    currentScene,
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
  }
}
