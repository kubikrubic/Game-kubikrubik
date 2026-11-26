import type { MovableEntity } from './MovableEntity'
import type { LivingEntity } from './LivingEntity'

/**
 * Противник, включая боссов.
 */
export interface Enemy extends MovableEntity, LivingEntity {
  readonly type: 'enemy'

  enemyType: string
  isBoss: boolean

  moveSpeed: number
  contactDamage: number
  experienceReward: number
}