import type { GameContext } from './GameContext'

/**
 * Общий контракт игровой системы.
 */
export interface GameSystem {
  update(context: GameContext, deltaTime: number): void
}