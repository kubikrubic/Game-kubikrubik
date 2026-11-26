import type { GameContext } from '../core/GameContext'

/**
 * Контракт оружия игрового персонажа.
 */
export interface Weapon {
  readonly id: string
  readonly name: string

  level: number

  update(context: GameContext, deltaTime: number): void
}