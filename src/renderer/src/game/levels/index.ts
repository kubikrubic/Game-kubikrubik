import type { LevelConfig } from './LevelConfig'
import { DUNGEON_LEVEL } from './dungeonLevel'
import { FOREST_LEVEL } from './forestLevel'

export type { BossSpawnConfig } from './BossSpawnConfig'
export type { EnemyDefinition } from './EnemyDefinition'
export type { LevelConfig } from './LevelConfig'
export type { ObstacleConfig } from './ObstacleConfig'
export type { WaveConfig } from './WaveConfig'
export { createObstacleEntities } from './createObstacleEntities'
export { getEnemyDefinition, ENEMY_DEFINITIONS } from './enemyDefinitions'
export { generateObstacles } from './generateObstacles'

export const LEVELS: Record<string, LevelConfig> = {
  forest: FOREST_LEVEL,
  dungeon: DUNGEON_LEVEL
}

export const LEVEL_ORDER: string[] = ['forest', 'dungeon']

export function getLevelConfig(id: string): LevelConfig {
  const level = LEVELS[id]
  if (!level) {
    throw new Error(`Неизвестный идентификатор уровня: "${id}"`)
  }
  return level
}
