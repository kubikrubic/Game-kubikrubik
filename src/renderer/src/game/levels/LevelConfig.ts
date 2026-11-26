import type { Vector2 } from '../types/Vector2'

/**
 * Основные параметры игрового уровня.
 */
export interface LevelConfig {
  id: string
  name: string

  width: number
  height: number

  playerSpawn: Vector2
  duration: number
}