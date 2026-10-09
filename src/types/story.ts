export type MemoryLayout =
  | 'full'        // Foto a pantalla completa con texto superpuesto abajo
  | 'polaroid'    // Tarjeta blanca con foto y texto debajo
  | 'cinematic'   // Foto horizontal con texto centrado encima
  | 'diptych'     // (futuro: dos fotos lado a lado)
  | 'letter'      // Foto pequeña + texto largo al lado

export interface Memory {
  id: string
  image: string
  title: string
  caption: string
  date?: string
  chapterId: string
  layout: MemoryLayout
  accent?: 'warm' | 'soft' | 'dark'
}

export interface Chapter {
  id: string
  title: string
  introduction: string
}

export interface EmotionalPause {
  id: string
  text: string
  afterMemoryId: string
}

export type SceneType = 'cover' | 'chapter-intro' | 'memory' | 'pause' | 'letter'

export interface Scene {
  type: SceneType
  chapterId?: string
  memoryId?: string
  pauseId?: string
}
