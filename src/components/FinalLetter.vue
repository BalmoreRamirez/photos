<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineEmits<{ restart: [] }>()

const visible = ref(false)
onMounted(() => setTimeout(() => (visible.value = true), 200))
</script>

<template>
  <section class="letter" aria-label="Carta final para Gaby">
    <article class="letter__card" :class="{ 'letter__card--visible': visible }">
      <div class="letter__deco" aria-hidden="true">♡</div>

      <div class="letter__body serif">
        <p class="letter__salute">Gaby,</p>

        <p>
          Si llegaste hasta aquí es porque te tomaste el tiempo de recorrer todo esto.
          Gracias por eso.
        </p>

        <p>
          Cada una de estas fotografías guarda algo de lo que hemos vivido juntos.
          Momentos que en su momento parecían pequeños, y que con el tiempo se
          convirtieron en los que más quiero recordar.
        </p>

        <p>
          <!--
            ✏️  Escribe aquí tu dedicatoria personal.
            Reemplaza este párrafo con tus propias palabras antes de imprimir el QR.
          -->
          Quiero que sepas que eres de las cosas más importantes que me han pasado.
          Y que me alegra mucho que estés aquí.
        </p>

        <p class="letter__closing">
          Todavía quiero vivir muchos recuerdos más contigo.
        </p>
      </div>

      <div class="letter__footer">
        <div class="letter__line" aria-hidden="true" />
        <span class="letter__sig serif">Con todo mi cariño ♡</span>
      </div>
    </article>

    <button class="letter__restart" @click="$emit('restart')" aria-label="Volver al inicio">
      ← Volver al inicio
    </button>
  </section>
</template>

<style scoped>
.letter {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.2rem 3.5rem;
  background: var(--color-bg);
}

.letter__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 2.2rem 1.8rem 2rem;
  max-width: 360px;
  width: 100%;
  box-shadow:
    0 2px 8px rgba(73, 53, 43, 0.06),
    0 12px 40px rgba(73, 53, 43, 0.10);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.letter__card--visible {
  opacity: 1;
  transform: translateY(0);
}

.letter__deco {
  text-align: center;
  font-size: 1.3rem;
  color: var(--color-accent-rose);
  margin-bottom: 1.5rem;
}

.letter__body {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  font-size: 0.97rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--color-text);
}

.letter__salute {
  font-size: 1.3rem;
  font-weight: 400;
  font-style: italic;
  color: var(--color-accent);
}

.letter__closing {
  font-style: italic;
  color: var(--color-text-soft);
}

.letter__footer {
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
}

.letter__line {
  width: 40px;
  height: 1px;
  background: var(--color-border);
  margin-left: auto;
}

.letter__sig {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-accent);
}

.letter__restart {
  margin-top: 2.5rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-soft);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  transition: color 0.2s;
}

.letter__restart:hover,
.letter__restart:focus-visible {
  color: var(--color-accent);
  outline: none;
}
</style>
