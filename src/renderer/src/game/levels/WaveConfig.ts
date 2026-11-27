export interface WaveConfig {
  startTime: number
  endTime: number
  spawnInterval: number
  batchSize: number
  maxAlive: number
  enemyTypes: {
    enemyType: string
    weight: number
  }[]
}
