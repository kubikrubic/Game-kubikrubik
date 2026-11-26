import type { GameStatus } from './GameStatus'

/**
 * Снимок состояния игры для пользовательского интерфейса.
 */
export interface GameSnapshot {
  readonly status: GameStatus

  readonly health: number
  readonly maxHealth: number

  readonly level: number
  readonly experience: number
  readonly experienceToNextLevel: number

  readonly elapsedTime: number
  readonly score: number
  readonly kills: number
}