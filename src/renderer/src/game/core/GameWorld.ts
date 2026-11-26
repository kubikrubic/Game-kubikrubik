import type { Player } from '../entities/Player'
import type { Enemy } from '../entities/Enemy'
import type { Projectile } from '../entities/Projectile'
import type { Pickup } from '../entities/Pickup'
import type { Entity } from '../entities/Entity'
import type { GameStatus } from '../types/GameStatus'

/**
 * Текущее состояние игрового мира.
 */
export interface GameWorld {
  player: Player

  enemies: Enemy[]
  projectiles: Projectile[]
  pickups: Pickup[]
  obstacles: Entity[]

  width: number
  height: number

  elapsedTime: number
  status: GameStatus

  score: number
  kills: number
}