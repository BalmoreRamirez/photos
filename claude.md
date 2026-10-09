# Proyecto: Una historia para Gaby ❤️

## 1. Contexto y objetivo

Quiero desarrollar una experiencia web romántica e interactiva dedicada a mi novia, Gaby.

Tengo aproximadamente 75 fotografías de distintos encuentros, salidas y momentos que hemos compartido. Quiero convertirlas en una historia visual que ella pueda descubrir escaneando un código QR impreso en un regalo físico, como un cuadro personalizado.

La experiencia debe sentirse como un regalo íntimo, emocional, elegante y hecho a mano digitalmente. No quiero una galería fotográfica genérica, una página comercial ni una plantilla romántica convencional.

Quiero que la navegación transmita la sensación de recorrer nuestra historia juntos, recordar momentos y descubrir un mensaje personal al final.

## 2. Tecnologías y restricciones

Trabaja exclusivamente con frontend.

Tecnologías preferidas:
- Vue 3.
- Composition API con `<script setup lang="ts">`.
- TypeScript.
- Vite.
- CSS moderno, preferiblemente CSS propio.
- lucide-vue-next para iconos cuando sean necesarios.
- qrcode.vue para generar el código QR.

No implementar:
- Backend propio.
- Supabase.
- API propia.
- Base de datos remota.
- Autenticación.
- Sistemas de pago.

Puedes utilizar dependencias adicionales pequeñas si justificas su necesidad.

Primero inspecciona los archivos existentes del proyecto, el package.json, los componentes y las dependencias. Respeta la estructura actual siempre que sea razonable. No sobrescribas archivos o configuraciones importantes sin revisarlos.

No te limites a explicarme cómo hacerlo: implementa el proyecto directamente, crea o modifica los archivos necesarios y verifica que funcione.

## 3. Dirección artística

Las referencias visuales que proporcioné tienen dos elementos principales:

1. Una portada minimalista, con fondo crema, el nombre de la persona, una frase corta, un corazón central y una barra de progreso.
2. Una fotografía presentada como una tarjeta o Polaroid, con una frase sentimental y un botón discreto para continuar descubriendo recuerdos.

Utiliza esas referencias como inspiración visual, sin copiarlas literalmente.

### Paleta de colores

- Fondo principal: crema cálido, aproximadamente #F5EFE4.
- Superficies: blanco marfil, aproximadamente #FFFCF7.
- Texto principal: marrón oscuro, aproximadamente #49352B.
- Texto secundario: marrón suave, aproximadamente #8B7564.
- Acentos: terracota y rosa empolvado, aproximadamente #A96D58 y #C98C91.
- Bordes: beige claro, aproximadamente #E7D9CA.

### Tipografía

Combina:
- Una serif elegante para títulos y frases emocionales, como Playfair Display o Cormorant Garamond.
- Una sans serif discreta para controles, textos secundarios y elementos de navegación.

### Estilo visual

- Minimalista, cálido, íntimo y elegante.
- Mucho espacio negativo.
- Fotografías como protagonistas.
- Bordes suaves y sombras sutiles.
- Corazones pequeños y detalles decorativos discretos.
- Animaciones suaves y deliberadas.
- Transiciones entre pantallas que parezcan páginas de un pequeño libro.
- Diseño mobile-first, porque Gaby probablemente abrirá el regalo desde su teléfono.

Evita:
- Colores saturados.
- Gradientes llamativos.
- Exceso de emojis.
- Efectos de partículas por todas partes.
- Animaciones infantiles.
- Apariencia de dashboard.
- Una cuadrícula de fotografías como primera pantalla.
- Textos demasiado largos en cada recuerdo.

## 4. Concepto narrativo: nuestra historia

La experiencia debe contar una historia en etapas.

No inventes fechas, lugares, acontecimientos ni conversaciones reales. Utiliza las fotografías disponibles y deja que los textos se puedan editar.

### Escena 1: La portada

Primera pantalla a pantalla completa.

Debe mostrar:

- El nombre «Gaby».
- Una frase breve, por ejemplo: «Tengo algo bonito que quiero recordarte...».
- Un corazón ilustrado o animado suavemente.
- Una indicación discreta para comenzar.
- Un botón: «Descubrir nuestra historia».

La portada debe despertar curiosidad y transmitir que el regalo fue preparado exclusivamente para ella.

Al tocar el botón, realizar una transición elegante hacia la primera fotografía.

### Escena 2: El primer recuerdo

Mostrar una fotografía destacada dentro de un marco tipo Polaroid.

Elementos:
- Número del recuerdo.
- Fotografía.
- Fecha opcional.
- Título breve.
- Dedicatoria editable.
- Botón «Siguiente recuerdo».
- Indicador de progreso.

Ejemplo de texto provisional:

«No sé si ese día imaginábamos todos los recuerdos que todavía nos faltaban por vivir».

Este texto es solo una propuesta de ejemplo. Debe poder sustituirse por algo más fiel a nuestra historia.

### Escena 3: El recorrido por nuestros momentos

Quiero utilizar mis aproximadamente 75 fotografías.

No las muestres todas de golpe. La experiencia principal debe presentar una fotografía por escena, con una transición entre recuerdos.

Cada escena puede contener:

- Una fotografía.
- Un número secuencial.
- Un título corto.
- Una frase sentimental opcional.
- Una fecha opcional.
- Navegación hacia atrás y adelante.

Alterna composiciones sutilmente para evitar que las 75 pantallas se sientan idénticas: algunas fotografías pueden ocupar casi toda la pantalla, otras pueden aparecer enmarcadas con una pequeña anotación o una fecha.

No agregues texto emocional a cada imagen de forma automática si no existe información suficiente para personalizarlo. Permite dejar la dedicatoria vacía.

### Escena 4: Los capítulos de la relación

Permite agrupar las fotografías en capítulos editables.

Propón inicialmente cinco capítulos:

1. Cómo empezó todo.
2. Nuestras primeras salidas.
3. Lugares y aventuras.
4. Nuestros momentos favoritos.
5. Todo lo que todavía nos espera.

Estos capítulos son provisionales. No presupongas que reflejan exactamente el orden de nuestras fotografías.

Cada capítulo puede comenzar con una tarjeta introductoria breve y elegante, seguida por sus fotografías.

El usuario debe poder modificar los nombres y las agrupaciones.

Si no hay fechas disponibles, conserva el orden manual de las fotografías sin inventar una cronología.

### Escena 5: Una pausa emocional

En determinados puntos del recorrido, introduce pequeñas pantallas de transición, sin fotografías, con frases breves que den espacio para reflexionar.

Ejemplos:

«Hay momentos que parecen pequeños hasta que se convierten en recuerdos que queremos guardar».

«De todos los lugares, mis favoritos son los momentos que compartimos».

«Y pensar que todavía nos quedan tantos recuerdos por crear».

No uses todas estas frases obligatoriamente. Permite editarlas y evita que la historia resulte repetitiva o demasiado cursi.

### Escena 6: La carta final

Después de recorrer todas las fotografías, mostrar una carta final dedicada a Gaby.

Diseño:
- Fondo crema.
- Apariencia de carta de papel.
- Tipografía serif.
- Texto alineado a la izquierda.
- Un corazón pequeño.
- Una animación de apertura discreta, si mejora la experiencia.

El contenido inicial debe ser un marcador editable, no una declaración inventada que pretenda representar exactamente mis sentimientos.

Ejemplo de introducción:

«Gaby, si llegaste hasta aquí, quiero que sepas que cada una de estas fotografías guarda un pedacito de nuestra historia».

Después debe aparecer mi propia dedicatoria.

Al final, cerrar con una frase breve, como:

«Y todavía quiero vivir muchos recuerdos más contigo».

Incluye una acción final opcional: «Volver a nuestra historia».

## 5. Experiencia de navegación

La navegación principal debe ser secuencial.

- Botón para avanzar.
- Botón para volver al recuerdo anterior.
- Progreso general.
- Identificación del capítulo actual.
- Posibilidad de pausar y retomar la experiencia.
- Acceso opcional a un índice de capítulos, sin interrumpir la narrativa.
- Pantalla final al completar la historia.

Evita recargar la página entre recuerdos.

Implementa transiciones de entrada y salida con CSS o Vue Transition.

Respeta `prefers-reduced-motion` para usuarios que prefieren reducir las animaciones.

No reproduzcas audio automáticamente. Si incorporas música, debe ser opcional y tener controles visibles.

## 6. Gestión de las 75 fotografías

Quiero evitar tener que escribir manualmente el código de cada fotografía dentro de un componente.

Organiza los recuerdos en un archivo de datos independiente, por ejemplo:

`src/data/memories.ts`

Utiliza una estructura tipada semejante a:

```ts
export interface Memory {
  id: string;
  image: string;
  title: string;
  caption: string;
  date?: string;
  chapterId: string;
}

export interface Chapter {
  id: string;
  title: string;
  introduction: string;
}
```

Crea datos de ejemplo solo cuando sea necesario y señala claramente que son ficticios.

No inventes fotografías ni describas como reales escenas que no has visto.

Prepara una estructura de carpetas como:

```text
public/
  memories/
    foto-001.webp
    foto-002.webp
    foto-003.webp
    ...

src/
  components/
    StoryCover.vue
    MemoryScene.vue
    ChapterIntro.vue
    FinalLetter.vue
    StoryProgress.vue
  data/
    memories.ts
    chapters.ts
  composables/
    useStory.ts
  types/
    story.ts
  App.vue
  main.ts
  style.css
```

Adapta esta estructura si el proyecto ya tiene una organización mejor.

Si las 75 fotografías no están todavía en el repositorio, no generes 75 archivos vacíos ni enlaces ficticios. Prepara el sistema para incorporarlas después y explica claramente dónde deben colocarse.

Cuando las fotografías estén disponibles, utiliza sus nombres reales o una estructura de mapeo que permita identificarlas fácilmente.

Optimiza las imágenes para móvil, conserva una buena calidad visual y utiliza lazy loading donde sea adecuado, sin retrasar la carga de la primera escena.

## 7. Editor de recuerdos

Como quiero desarrollar esto exclusivamente con frontend, necesito una forma sencilla de cambiar los títulos, fechas y dedicatorias sin modificar el diseño de los componentes.

Implementa los datos separados de la interfaz.

Si resulta viable, añade un modo de edición local que permita:
- Modificar títulos.
- Editar dedicatorias.
- Cambiar fechas.
- Asignar fotografías a capítulos.
- Reordenar recuerdos.
- Guardar los cambios en localStorage.
- Restablecer los datos iniciales.

Este modo de edición no debe aparecer durante la experiencia de Gaby.

No lo presentes como un sistema seguro de administración: localStorage es almacenamiento del navegador y no ofrece privacidad ni sincronización entre dispositivos.

## 8. Código QR y distribución

El regalo se abrirá desde un QR impreso en un cuadro.

El QR debe apuntar a la URL pública de la aplicación, no a localhost.

Como no quiero un backend, diseña una estrategia compatible con frontend estático.

Importante: no intentes almacenar las 75 fotografías dentro de la URL del QR.

La opción preferida es:
- Publicar el frontend estático.
- Alojar las fotografías junto con el sitio, o en almacenamiento estático accesible.
- Incluir en la URL únicamente un identificador de experiencia o una configuración pequeña.
- Mantener el contenido de la historia en archivos de datos estáticos o en un paquete de datos preparado durante la compilación.

Explica las limitaciones de privacidad de una página pública. No incluyas credenciales, secretos ni datos privados en el código del cliente.

Incluye una vista para generar un QR que pueda descargarse o imprimirse, y que utilice la URL pública configurada.

Si el contenido debe ser exclusivo para Gaby, aclara que un enlace difícil de adivinar no sustituye una autenticación real.

## 9. Calidad técnica

Requisitos:
- Componentes pequeños y reutilizables.
- TypeScript correctamente tipado.
- Separación entre contenido, lógica y presentación.
- Diseño responsive.
- Buen contraste y accesibilidad.
- Navegación por teclado.
- Texto alternativo para fotografías.
- Estados de carga y errores.
- Ningún error en la consola.
- Ningún enlace roto en las escenas de ejemplo.
- Sin dependencias innecesarias.
- Código limpio y fácil de mantener.

No sacrifiques la experiencia móvil por efectos visuales.

## 10. Forma de trabajar

Sigue este orden:

1. Inspecciona el proyecto existente.
2. Resume brevemente la estructura que encontraste.
3. Define la arquitectura de componentes.
4. Implementa la experiencia principal completa.
5. Añade los estilos y transiciones.
6. Implementa la navegación secuencial y el progreso.
7. Añade el almacenamiento local si es compatible con la arquitectura.
8. Implementa la generación del QR para la URL pública.
9. Ejecuta el chequeo de TypeScript, lint y build disponibles.
10. Corrige los errores que encuentres.
11. Indica los archivos modificados, los comandos para ejecutar el proyecto y los pasos pendientes para incorporar mis 75 fotografías.

No te detengas después de presentar un plan. Continúa hasta dejar una primera versión funcional.

Si falta algún recurso, como las fotografías originales o una dedicatoria definitiva, utiliza un marcador claramente identificado y continúa con el resto del desarrollo.

## Resultado esperado

Quiero una experiencia romántica de alta calidad visual, que parezca un pequeño libro digital dedicado a Gaby.

Al abrir el QR, ella debe encontrar su nombre, descubrir recuerdos uno a uno, recorrer capítulos de nuestra historia y terminar con una carta personal.

La tecnología debe estar al servicio de la emoción: menos apariencia de aplicación convencional y más sensación de estar recorriendo una historia real.