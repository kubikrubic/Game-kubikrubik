import type { Vector2 } from '../types/Vector2'
import type { ObstacleConfig } from './ObstacleConfig'

export interface GenerateObstaclesParams {
  worldWidth: number
  worldHeight: number
  count: number
  minRadius: number
  maxRadius: number
  playerSpawn: Vector2
  safeRadius: number
  borderPadding: number
}

function mulberry32(seed: number): () => number {
  let value = seed >>> 0
  return () => {
    value += 0x6d2b79f5
    let result = value
    result = Math.imul(result ^ (result >>> 15), result | 1)
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61)
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296
  }
}

export function generateObstacles(params: GenerateObstaclesParams, seed: number): ObstacleConfig[] {
  const random = mulberry32(seed)
  const obstacles: ObstacleConfig[] = []
  const attemptsPerObstacle = 80

  for (let index = 0; index < params.count; index += 1) {
    let accepted: ObstacleConfig | null = null

    for (let attempt = 0; attempt < attemptsPerObstacle; attempt += 1) {
      const radius = params.minRadius + random() * (params.maxRadius - params.minRadius)
      const position = {
        x:
          params.borderPadding +
          radius +
          random() * (params.worldWidth - 2 * (params.borderPadding + radius)),
        y:
          params.borderPadding +
          radius +
          random() * (params.worldHeight - 2 * (params.borderPadding + radius))
      }
      const distanceFromSpawn = Math.hypot(
        position.x - params.playerSpawn.x,
        position.y - params.playerSpawn.y
      )
      if (distanceFromSpawn < params.safeRadius + radius) {
        continue
      }

      const overlaps = obstacles.some((obstacle) => {
        const distance = Math.hypot(
          position.x - obstacle.position.x,
          position.y - obstacle.position.y
        )
        return distance < radius + obstacle.radius + 12
      })
      if (!overlaps) {
        accepted = { position, radius }
        break
      }
    }

    if (accepted) {
      obstacles.push(accepted)
    }
  }

  return obstacles
}
