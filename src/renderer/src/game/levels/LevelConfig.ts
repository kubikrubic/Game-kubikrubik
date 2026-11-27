import type { Vector2 } from '../types/Vector2'
import type { BossSpawnConfig } from './BossSpawnConfig'
import type { ObstacleConfig } from './ObstacleConfig'
import type { WaveConfig } from './WaveConfig'

/**
 * Основные параметры игрового уровня.
 */
export interface LevelConfig {
  id: string
  name: string
  theme: 'forest' | 'dungeon'

  width: number
  height: number

  playerSpawn: Vector2
  duration: number
  waves: WaveConfig[]
  boss: BossSpawnConfig
  obstacles: ObstacleConfig[]
  nextLevelId: string | null
}
