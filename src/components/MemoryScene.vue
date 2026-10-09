<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Memory } from '@/types/story'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const props = defineProps<{
  memory: Memory
  memoryNumber: number
  totalMemories: number
  canGoPrev: boolean
  canGoNext: boolean
}>()

const emit = defineEmits<{
  next: []
  prev: []
}>()

const imageLoaded = ref(false)

// Reset image state when memory changes
watch(() => props.memory.id, () => {
  imageLoaded.value = false
})
</script>

<template>
  <section
    class="memory"
    :class="[`memory--${memory.layout}`, memory.accent ? `memory--accent-${memory.accent}` : '']"
    :aria-label="`Recuerdo ${memoryNumber} de ${totalMemories}`"
  >

    <!-- ── FULL: foto a pantalla completa, texto superpuesto abajo ── -->
    <template v-if="memory.layout === 'full'">
      <div class="full__wrap">
        <img
          :src="memory.image"
          :alt="memory.title || `Recuerdo ${memoryNumber}`"
          class="full__img"
          :class="{ 'loaded': imageLoaded }"
          loading="lazy"
          @load="imageLoaded = true"
        />
        <div class="full__gradient" />
        <div class="full__text">
          <span class="memory__counter">{{ String(memoryNumber).padStart(2, '0') }} / {{ String(totalMemories).padStart(2, '0') }}</span>
          <h3 v-if="memory.title" class="full__title serif">{{ memory.title }}</h3>
          <p v-if="memory.caption" class="full__caption serif">{{ memory.caption }}</p>
        </div>
      </div>
    </template>

    <!-- ── CINEMATIC: foto con aspecto panorámico, frase centrada encima ── -->
    <template v-else-if="memory.layout === 'cinematic'">
      <div class="cine__wrap">
        <span class="memory__counter memory__counter--top">{{ String(memoryNumber).padStart(2, '0') }} / {{ String(totalMemories).padStart(2, '0') }}</span>
        <p v-if="memory.caption" class="cine__caption serif">{{ memory.caption }}</p>
        <div class="cine__frame">
          <div v-if="!imageLoaded" class="cine__skeleton" />
          <img
            :src="memory.image"
            :alt="memory.title || `Recuerdo ${memoryNumber}`"
            class="cine__img"
            :class="{ 'loaded': imageLoaded }"
            loading="lazy"
            @load="imageLoaded = true"
          />
        </div>
        <h3 v-if="memory.title" class="cine__title serif">{{ memory.title }}</h3>
      </div>
    </template>

    <!-- ── POLAROID: tarjeta blanca con foto + texto debajo ── -->
    <template v-else-if="memory.layout === 'polaroid'">
      <div class="pola__card">
        <span class="memory__counter">{{ String(memoryNumber).padStart(2, '0') }}</span>
        <div class="pola__photo">
          <div v-if="!imageLoaded" class="pola__skeleton" />
          <img
            :src="memory.image"
            :alt="memory.title || `Recuerdo ${memoryNumber}`"
            class="pola__img"
            :class="{ 'loaded': imageLoaded }"
            loading="lazy"
            @load="imageLoaded = true"
          />
        </div>
        <div class="pola__footer">
          <h3 v-if="memory.title" class="pola__title serif">{{ memory.title }}</h3>
          <p v-if="memory.caption" class="pola__caption serif">{{ memory.caption }}</p>
          <p v-if="memory.date" class="pola__date">{{ memory.date }}</p>
        </div>
      </div>
    </template>

    <!-- ── LETTER: foto pequeña + texto largo al lado ── -->
    <template v-else-if="memory.layout === 'letter'">
      <div class="letter__card">
        <span class="memory__counter">{{ String(memoryNumber).padStart(2, '0') }}</span>
        <div class="letter__photo">
          <div v-if="!imageLoaded" class="letter__skeleton" />
          <img
            :src="memory.image"
            :alt="memory.title || `Recuerdo ${memoryNumber}`"
            class="letter__img"
            :class="{ 'loaded': imageLoaded }"
            loading="lazy"
            @load="imageLoaded = true"
          />
        </div>
        <div class="letter__body">
          <h3 v-if="memory.title" class="letter__title serif">{{ memory.title }}</h3>
          <p v-if="memory.caption" class="letter__caption serif">{{ memory.caption }}</p>
          <div v-if="memory.date" class="letter__date">{{ memory.date }}</div>
        </div>
      </div>
    </template>

    <!-- Navigation -->
    <nav class="memory__nav" aria-label="Navegar recuerdos">
      <button
        class="memory__nav-prev"
        :disabled="!canGoPrev"
        @click="emit('prev')"
        aria-label="Recuerdo anterior"
      >
        <ChevronLeft :size="18" />
      </button>

      <button class="memory__nav-next" @click="emit('next')" aria-label="Siguiente recuerdo">
        <ChevronRight :size="20" />
      </button>
    </nav>
  </section>
</template>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────────── */
.memory {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--color-bg);
  padding-bottom: 1rem;
}

.memory__counter {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--color-accent);
  text-transform: uppercase;
}

.memory__counter--top {
  position: absolute;
  top: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
}

/* Image fade-in */
.full__img,
.cine__img,
.pola__img,
.letter__img {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.full__img.loaded,
.cine__img.loaded,
.pola__img.loaded,
.letter__img.loaded {
  opacity: 1;
}

/* ── FULL layout ─────────────────────────────────────────────────── */
.memory--full {
  padding: 0;
  background: #1a1008;
}

.full__wrap {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
}

.full__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.full__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 5, 2, 0.78) 0%,
    rgba(10, 5, 2, 0.2) 50%,
    transparent 100%
  );
}

/* Warm accent: softer overlay */
.memory--accent-warm .full__gradient {
  background: linear-gradient(
    to top,
    rgba(60, 25, 10, 0.75) 0%,
    rgba(60, 25, 10, 0.15) 55%,
    transparent 100%
  );
}

/* Soft accent: lighter overlay */
.memory--accent-soft .full__gradient {
  background: linear-gradient(
    to top,
    rgba(73, 53, 43, 0.65) 0%,
    rgba(73, 53, 43, 0.08) 60%,
    transparent 100%
  );
}

.full__text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 1.5rem 5.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.full__text .memory__counter {
  color: rgba(255, 255, 255, 0.5);
}

.full__title {
  font-size: clamp(1.3rem, 5vw, 2rem);
  font-weight: 400;
  color: #fff;
  line-height: 1.2;
}

.full__caption {
  font-size: 0.95rem;
  font-style: italic;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
  max-width: 320px;
}

/* ── CINEMATIC layout ─────────────────────────────────────────────── */
.memory--cinematic {
  padding: 2rem 1rem 5rem;
  background: var(--color-bg);
}

.cine__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  padding-top: 2rem;
  position: relative;
}

.cine__caption {
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-soft);
  text-align: center;
  line-height: 1.7;
  max-width: 280px;
  padding: 0 0.5rem;
}

.cine__frame {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-polaroid);
  position: relative;
  background: var(--color-border);
}

.cine__skeleton,
.pola__skeleton,
.letter__skeleton {
  width: 100%;
  background: var(--color-border);
  animation: shimmer 1.2s ease-in-out infinite alternate;
}

.cine__skeleton { aspect-ratio: 4/3; }
.pola__skeleton { aspect-ratio: 4/5; }
.letter__skeleton { aspect-ratio: 1/1; }

@keyframes shimmer {
  from { opacity: 0.6; }
  to { opacity: 1; }
}

.cine__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.cine__title {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-text-soft);
  font-style: italic;
  text-align: center;
}

/* ── POLAROID layout ─────────────────────────────────────────────── */
.memory--polaroid {
  padding: 2rem 1.2rem 5.5rem;
}

.pola__card {
  background: var(--color-surface);
  border-radius: 4px;
  box-shadow: var(--shadow-polaroid);
  padding: 0.9rem 0.9rem 1.4rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  transform: rotate(-0.8deg);
}

.pola__card:nth-child(odd) {
  transform: rotate(0.6deg);
}

.pola__photo {
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  background: var(--color-border);
}

.pola__img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
}

.pola__footer {
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.pola__title {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text);
}

.pola__caption {
  font-size: 0.85rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-soft);
  line-height: 1.6;
}

.pola__date {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
}

/* ── LETTER layout ─────────────────────────────────────────────────── */
.memory--letter {
  padding: 2rem 1.2rem 5.5rem;
}

.letter__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 1.4rem 1.2rem;
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-card);
}

.letter__photo {
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  background: var(--color-border);
}

.letter__img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  display: block;
}

.letter__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.letter__title {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-text);
}

.letter__caption {
  font-size: 0.95rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-soft);
  line-height: 1.75;
}

.letter__date {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
}

/* ── Navigation ──────────────────────────────────────────────────── */
.memory__nav {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
  pointer-events: none;
}

.memory__nav-prev,
.memory__nav-next {
  pointer-events: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, background 0.2s;
  flex-shrink: 0;
}

.memory--cinematic .memory__nav-prev,
.memory--cinematic .memory__nav-next,
.memory--polaroid .memory__nav-prev,
.memory--polaroid .memory__nav-next,
.memory--letter .memory__nav-prev,
.memory--letter .memory__nav-next {
  border-color: var(--color-border);
  background: rgba(255, 252, 247, 0.82);
  color: var(--color-text-soft);
}

.memory__nav-prev:disabled {
  opacity: 0.2;
  cursor: default;
}

.memory__nav-prev:hover:not(:disabled),
.memory__nav-next:hover,
.memory__nav-next:focus-visible {
  opacity: 0.65;
  outline: none;
}
</style>
