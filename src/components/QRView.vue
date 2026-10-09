<script setup lang="ts">
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

defineProps<{ visible: boolean }>()
defineEmits<{ close: [] }>()

// Cambia esta URL por la URL pública donde despliegues la aplicación
const PUBLIC_URL = ref(
  typeof window !== 'undefined'
    ? window.location.origin
    : 'https://tu-sitio.netlify.app',
)

function downloadQR() {
  const canvas = document.querySelector('.qr-view canvas') as HTMLCanvasElement
  if (!canvas) return
  const link = document.createElement('a')
  link.download = 'qr-gaby.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="qr-view" role="dialog" aria-modal="true" aria-label="Código QR">
        <div class="qr-view__panel">
          <h2 class="qr-view__title serif">Código QR</h2>
          <p class="qr-view__hint">Escanea este código para abrir la historia desde cualquier dispositivo.</p>

          <div class="qr-view__code">
            <QrcodeVue :value="PUBLIC_URL" :size="200" level="M" render-as="canvas" />
          </div>

          <label class="qr-view__label">
            URL pública
            <input v-model="PUBLIC_URL" class="qr-view__input" type="url" aria-label="URL pública" />
          </label>

          <p class="qr-view__note">
            ⚠️ Actualiza la URL cuando publiques el sitio. Un enlace difícil de adivinar no
            sustituye una autenticación real.
          </p>

          <div class="qr-view__actions">
            <button class="qr-view__btn qr-view__btn--download" @click="downloadQR">
              Descargar QR
            </button>
            <button class="qr-view__btn qr-view__btn--close" @click="$emit('close')">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.qr-view {
  position: fixed;
  inset: 0;
  background: rgba(73, 53, 43, 0.45);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.qr-view__panel {
  background: var(--color-surface);
  border-radius: var(--radius-card);
  padding: 2rem 1.5rem;
  max-width: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: var(--shadow-polaroid);
}

.qr-view__title {
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-text);
}

.qr-view__hint {
  font-size: 0.82rem;
  color: var(--color-text-soft);
  text-align: center;
  line-height: 1.5;
}

.qr-view__code {
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.qr-view__label {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-soft);
}

.qr-view__input {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  font-size: 0.82rem;
  font-family: monospace;
  background: var(--color-bg);
  color: var(--color-text);
}

.qr-view__input:focus {
  outline: 2px solid var(--color-accent);
}

.qr-view__note {
  font-size: 0.72rem;
  color: var(--color-text-soft);
  line-height: 1.5;
  text-align: center;
}

.qr-view__actions {
  display: flex;
  gap: 0.8rem;
  width: 100%;
}

.qr-view__btn {
  flex: 1;
  padding: 0.7rem;
  border-radius: 60px;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}

.qr-view__btn--download {
  background: var(--color-accent);
  color: #fff;
}

.qr-view__btn--close {
  border: 1px solid var(--color-border);
  color: var(--color-text-soft);
}

.qr-view__btn:hover {
  opacity: 0.8;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
