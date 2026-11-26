import type { Enemy } from '../entities/Enemy'

/**
 * События, возникающие в игровом мире.
 */
export type GameEvent =
  | {
      type: 'enemy-killed'
      enemy: Enemy
    }
  | {
      type: 'player-damaged'
      damage: number
    }
  | {
      type: 'player-died'
    }
  | {
      type: 'experience-gained'
      amount: number
    }
  | {
      type: 'level-up'
      level: number
    }
  | {
      type: 'boss-defeated'
    }