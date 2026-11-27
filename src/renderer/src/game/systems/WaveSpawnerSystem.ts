import type { GameContext } from '../core/GameContext'
import type { GameSystem } from '../core/GameSystem'
import type { Vector2 } from '../types/Vector2'
import type { LevelConfig } from '../levels/LevelConfig'
import type { WaveConfig } from '../levels/WaveConfig'
import { getEnemyDefinition } from '../levels/enemyDefinitions'
import { createEnemy } from './createEnemy'

const POST_BOSS_MAX_ALIVE_DIVISOR = 2
const SPAWN_ATTEMPTS = 24
const NORMAL_SPAWN_MIN_RADIUS = 700
const NORMAL_SPAWN_MAX_RADIUS = 850
const BOSS_SPAWN_RADIUS = 600

export class WaveSpawnerSystem implements GameSystem {
  private spawnTimer = 0
  private bossSpawned = false

  constructor(
    private readonly level: LevelConfig,
    private readonly random: () => number = Math.random
  ) {}

  update(context: GameContext, deltaTime: number): void {
    if (context.world.status !== 'running') {
      return
    }

    if (!this.bossSpawned && context.world.elapsedTime >= this.level.duration) {
      this.spawnBoss(context)
      this.bossSpawned = true
    }

    const wave = this.getWave(context.world.elapsedTime)
    if (!wave) {
      return
    }

    this.spawnTimer += deltaTime
    while (this.spawnTimer >= wave.spawnInterval) {
      this.spawnTimer -= wave.spawnInterval
      this.spawnWaveBatch(context, wave)
    }
  }

  reset(): void {
    this.spawnTimer = 0
    this.bossSpawned = false
  }

  private getWave(elapsedTime: number): WaveConfig | undefined {
    const activeWave = this.level.waves.find(
      (wave) => wave.startTime <= elapsedTime && elapsedTime < wave.endTime
    )
    if (activeWave) {
      return activeWave
    }
    return this.level.waves[this.level.waves.length - 1]
  }

  private spawnWaveBatch(context: GameContext, wave: WaveConfig): void {
    const activeNormalCount = context.world.enemies.filter(
      (enemy) => enemy.active && !enemy.isBoss
    ).length
    const maxAlive = this.bossSpawned
      ? Math.floor(wave.maxAlive / POST_BOSS_MAX_ALIVE_DIVISOR)
      : wave.maxAlive
    const availableSlots = Math.max(0, maxAlive - activeNormalCount)
    const spawnCount = Math.min(wave.batchSize, availableSlots)

    for (let index = 0; index < spawnCount; index += 1) {
      const enemyType = this.chooseEnemyType(wave)
      const definition = getEnemyDefinition(enemyType)
      const position = this.findSpawnPosition(context, definition.radius)
      if (!position) {
        continue
      }
      const enemy = createEnemy(context, definition, position)
      context.world.enemies.push(enemy)
    }
  }

  private chooseEnemyType(wave: WaveConfig): string {
    const totalWeight = wave.enemyTypes.reduce(
      (total, enemyType) => total + Math.max(0, enemyType.weight),
      0
    )
    if (totalWeight <= 0 || wave.enemyTypes.length === 0) {
      throw new Error(`В волне нет допустимых типов противников`)
    }

    let roll = this.randomInRange(0, totalWeight)
    for (const enemyType of wave.enemyTypes) {
      roll -= Math.max(0, enemyType.weight)
      if (roll < 0) {
        return enemyType.enemyType
      }
    }
    return wave.enemyTypes[wave.enemyTypes.length - 1].enemyType
  }

  private spawnBoss(context: GameContext): void {
    const definition = getEnemyDefinition(this.level.boss.enemyType)
    const position = this.findSpawnPositionAtRadius(context, definition.radius, BOSS_SPAWN_RADIUS)
    if (position) {
      context.world.enemies.push(createEnemy(context, definition, position))
    }
  }

  private findSpawnPosition(context: GameContext, enemyRadius: number): Vector2 | null {
    const radius =
      NORMAL_SPAWN_MIN_RADIUS +
      this.randomInRange(0, NORMAL_SPAWN_MAX_RADIUS - NORMAL_SPAWN_MIN_RADIUS)
    return this.findSpawnPositionAtRadius(context, enemyRadius, radius)
  }

  private findSpawnPositionAtRadius(
    context: GameContext,
    enemyRadius: number,
    desiredRadius: number
  ): Vector2 | null {
    for (let attempt = 0; attempt < SPAWN_ATTEMPTS; attempt += 1) {
      const angle = this.randomInRange(0, Math.PI * 2)
      const position = {
        x: context.world.player.position.x + Math.cos(angle) * desiredRadius,
        y: context.world.player.position.y + Math.sin(angle) * desiredRadius
      }
      const clamped = this.clampToWorld(context, position, enemyRadius)
      if (!this.pointInsideObstacle(context, clamped, enemyRadius)) {
        return clamped
      }
    }

    for (let index = 0; index < 360; index += 1) {
      const angle = (index / 360) * Math.PI * 2
      const fallbackPosition = {
        x: context.world.player.position.x + Math.cos(angle) * desiredRadius,
        y: context.world.player.position.y + Math.sin(angle) * desiredRadius
      }
      const clamped = this.clampToWorld(context, fallbackPosition, enemyRadius)
      if (!this.pointInsideObstacle(context, clamped, enemyRadius)) {
        return clamped
      }
    }

    return null
  }

  private clampToWorld(context: GameContext, position: Vector2, enemyRadius: number): Vector2 {
    return {
      x: Math.max(enemyRadius, Math.min(context.world.width - enemyRadius, position.x)),
      y: Math.max(enemyRadius, Math.min(context.world.height - enemyRadius, position.y))
    }
  }

  private pointInsideObstacle(
    context: GameContext,
    position: Vector2,
    enemyRadius: number
  ): boolean {
    return context.world.obstacles.some((obstacle) => {
      if (!obstacle.active) {
        return false
      }
      const distance = Math.hypot(
        position.x - obstacle.position.x,
        position.y - obstacle.position.y
      )
      return distance < obstacle.radius + enemyRadius
    })
  }

  private randomInRange(min: number, max: number): number {
    const value = this.random()
    const clamped = Math.max(0, Math.min(1, value))
    return min + clamped * (max - min)
  }
}
