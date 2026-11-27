import type { LevelConfig } from './LevelConfig'
import { generateObstacles } from './generateObstacles'

const playerSpawn = { x: 1500, y: 1500 }

export const FOREST_LEVEL: LevelConfig = {
  id: 'forest',
  name: 'Проклятый Лес',
  theme: 'forest',
  width: 3000,
  height: 3000,
  playerSpawn,
  duration: 300,
  waves: [
    {
      startTime: 0,
      endTime: 60,
      spawnInterval: 1.5,
      batchSize: 2,
      maxAlive: 40,
      enemyTypes: [
        { enemyType: 'slime', weight: 70 },
        { enemyType: 'snake', weight: 30 }
      ]
    },
    {
      startTime: 60,
      endTime: 120,
      spawnInterval: 1.2,
      batchSize: 3,
      maxAlive: 70,
      enemyTypes: [
        { enemyType: 'slime', weight: 40 },
        { enemyType: 'snake', weight: 60 }
      ]
    },
    {
      startTime: 120,
      endTime: 180,
      spawnInterval: 1.1,
      batchSize: 3,
      maxAlive: 90,
      enemyTypes: [
        { enemyType: 'slime', weight: 30 },
        { enemyType: 'snake', weight: 40 },
        { enemyType: 'orc', weight: 30 }
      ]
    },
    {
      startTime: 180,
      endTime: 240,
      spawnInterval: 1,
      batchSize: 4,
      maxAlive: 110,
      enemyTypes: [
        { enemyType: 'slime', weight: 25 },
        { enemyType: 'snake', weight: 30 },
        { enemyType: 'orc', weight: 25 },
        { enemyType: 'archer', weight: 20 }
      ]
    },
    {
      startTime: 240,
      endTime: 300,
      spawnInterval: 0.8,
      batchSize: 4,
      maxAlive: 140,
      enemyTypes: [
        { enemyType: 'slime', weight: 20 },
        { enemyType: 'snake', weight: 30 },
        { enemyType: 'orc', weight: 25 },
        { enemyType: 'archer', weight: 25 }
      ]
    }
  ],
  boss: { enemyType: 'minotaur' },
  obstacles: generateObstacles(
    {
      worldWidth: 3000,
      worldHeight: 3000,
      count: 28,
      minRadius: 24,
      maxRadius: 36,
      playerSpawn,
      safeRadius: 250,
      borderPadding: 30
    },
    0x5f081e57
  ),
  nextLevelId: 'dungeon'
}
