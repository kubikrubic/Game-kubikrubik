import type { GameContext } from '../core/GameContext'
import type { Entity } from '../entities/Entity'
import type { LevelConfig } from './LevelConfig'

export function createObstacleEntities(context: GameContext, level: LevelConfig): Entity[] {
  return level.obstacles.map((obstacle) => ({
    id: context.createEntityId(),
    type: 'obstacle',
    position: { ...obstacle.position },
    radius: obstacle.radius,
    active: true
  }))
}
