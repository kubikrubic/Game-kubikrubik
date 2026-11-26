import type { Entity } from './Entity'

/**
 * Контракт сущности, обладающей запасом здоровья.
 */
export interface LivingEntity extends Entity {
  health: number
  maxHealth: number
}