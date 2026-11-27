import type { LevelConfig } from './LevelConfig'
import { generateObstacles } from './generateObstacles'

const playerSpawn = { x: 1400, y: 1400 }

export const DUNGEON_LEVEL: LevelConfig = {
  id: 'dungeon',
  name: 'Глубокое Подземелье',
  theme: 'dungeon',
  width: 2800,
  height: 2800,
  playerSpawn,
  duration: 300,
  waves: [
    {
      startTime: 0,
      endTime: 60,
      spawnInterval: 1.4,
      batchSize: 2,
      maxAlive: 45,
      enemyTypes: [{ enemyType: 'armored-skeleton', weight: 100 }]
    },
    {
      startTime: 60,
      endTime: 120,
      spawnInterval: 1.1,
      batchSize: 3,
      maxAlive: 70,
      enemyTypes: [
        { enemyType: 'armored-skeleton', weight: 85 },
        { enemyType: 'mage', weight: 15 }
      ]
    },
    {
      startTime: 120,
      endTime: 180,
      spawnInterval: 1,
      batchSize: 4,
      maxAlive: 95,
      enemyTypes: [
        { enemyType: 'armored-skeleton', weight: 75 },
        { enemyType: 'mage', weight: 25 }
      ]
    },
    {
      startTime: 180,
      endTime: 240,
      spawnInterval: 0.9,
      batchSize: 4,
      maxAlive: 120,
      enemyTypes: [
        { enemyType: 'armored-skeleton', weight: 70 },
        { enemyType: 'mage', weight: 30 }
      ]
    },
    {
      startTime: 240,
      endTime: 300,
      spawnInterval: 0.8,
      batchSize: 5,
      maxAlive: 150,
      enemyTypes: [
        { enemyType: 'armored-skeleton', weight: 65 },
        { enemyType: 'mage', weight: 35 }
      ]
    }
  ],
  boss: { enemyType: 'catacomb-lord' },
  obstacles: generateObstacles(
    {
      worldWidth: 2800,
      worldHeight: 2800,
      count: 48,
      minRadius: 28,
      maxRadius: 40,
      playerSpawn,
      safeRadius: 250,
      borderPadding: 30
    },
    0xd06e0bb1
  ),
  nextLevelId: null
}
