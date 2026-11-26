import type { Entity } from './Entity'

/**
 * Предмет, который может подобрать игрок.
 */
export interface Pickup extends Entity {
  readonly type: 'pickup'

  pickupType: 'experience' | 'health'
  value: number
}