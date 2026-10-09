<script setup lang="ts">
import { computed } from 'vue'
import QrcodeVue from 'qrcode.vue'

// URL de la historia = misma URL pero sin el parámetro ?qr
const storyUrl = computed(() => {
  const url = new URL(window.location.href)
  url.searchParams.delete('qr')
  return url.origin + url.pathname
})
</script>

<template>
  <div class="qr-print">
    <div class="qr-print__card">
      <p class="qr-print__hint serif">Para Gaby</p>

      <div class="qr-print__code">
        <QrcodeVue
          :value="storyUrl"
          :size="220"
          level="M"
          render-as="svg"
          :margin="1"
          foreground="#49352B"
          background="#FFFCF7"
        />
      </div>

      <p class="qr-print__label serif">Escanéame ♡</p>
      <p class="qr-print__sub">Abre la cámara de tu teléfono y apúntala aquí</p>
    </div>

    <!-- Solo visible en pantalla, no se imprime -->
    <div class="qr-print__actions no-print">
      <p class="qr-print__url">{{ storyUrl }}</p>
      <button class="qr-print__btn" onclick="window.print()">
        Imprimir
      </button>
    </div>
  </div>
</template>

<style>
/* Estilos de impresión globales */
@media print {
  .no-print { display: none !important; }

  body {
    background: #fff !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .qr-print {
    min-height: unset !important;
  }
}
</style>

<style scoped>
.qr-print {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--color-bg);
}

.qr-print__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem 2.5rem 2.2rem;
  box-shadow: var(--shadow-polaroid);
}

.qr-print__hint {
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text);
}

.qr-print__code {
  padding: 0.6rem;
  background: #FFFCF7;
  border-radius: 4px;
  line-height: 0;
}

.qr-print__label {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-accent);
  letter-spacing: 0.02em;
}

.qr-print__sub {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--color-text-soft);
  text-align: center;
}

/* Pantalla */
.qr-print__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.qr-print__url {
  font-family: monospace;
  font-size: 0.72rem;
  color: var(--color-text-soft);
  word-break: break-all;
  text-align: center;
  max-width: 300px;
}

.qr-print__btn {
  padding: 0.7rem 2.5rem;
  border-radius: 60px;
  border: 1.5px solid var(--color-accent);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  background: transparent;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}

.qr-print__btn:hover {
  background: var(--color-accent);
  color: #fff;
}
</style>
