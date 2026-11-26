import type { MovableEntity } from './MovableEntity'

/**
 * Снаряд, созданный игровой сущностью.
 */
export interface Projectile extends MovableEntity {
  readonly type: 'projectile'

  readonly ownerId: number
  readonly ownerType: 'player' | 'enemy'

  damage: number
  lifetime: number
  piercing: number
}