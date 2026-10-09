<script setup lang="ts">
defineProps<{
  progress: number
  chapter: string | null
  memoryIndex: number
  total: number
}>()
</script>

<template>
  <div class="progress-bar" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar__track">
      <div class="progress-bar__fill" :style="{ width: `${progress}%` }" />
    </div>
    <p v-if="chapter" class="progress-bar__label">{{ chapter }}</p>
  </div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0;
}

.progress-bar__track {
  height: 2px;
  background: var(--color-border);
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-accent);
  transition: width 0.4s ease;
}

.progress-bar__label {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-soft);
  text-align: center;
  padding: 6px 16px 0;
}
</style>
