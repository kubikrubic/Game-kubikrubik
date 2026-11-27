import type { GameContext } from '../core/GameContext'
import type { Enemy } from '../entities/Enemy'
import type { Vector2 } from '../types/Vector2'
import type { EnemyDefinition } from '../levels/EnemyDefinition'

export function createEnemy(
  context: GameContext,
  definition: EnemyDefinition,
  position: Vector2
): Enemy {
  return {
    id: context.createEntityId(),
    type: 'enemy',
    position: { ...position },
    radius: definition.radius,
    active: true,
    velocity: { x: 0, y: 0 },
    health: definition.maxHealth,
    maxHealth: definition.maxHealth,
    enemyType: definition.id,
    isBoss: definition.isBoss,
    moveSpeed: definition.moveSpeed,
    contactDamage: definition.contactDamage,
    experienceReward: definition.experienceReward
  }
}
