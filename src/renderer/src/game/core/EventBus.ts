import type { GameEvent } from '../types/GameEvent'

export type GameEventListener = (event: GameEvent) => void

/**
 * Контракт системы обмена игровыми событиями.
 */
export interface EventBus {
  emit(event: GameEvent): void

  subscribe(listener: GameEventListener): () => void
}