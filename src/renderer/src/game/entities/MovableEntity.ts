import type { Entity } from './Entity'
import type { Vector2 } from '../types/Vector2'

/**
 * Контракт сущности, способной перемещаться.
 */
export interface MovableEntity extends Entity {
  velocity: Vector2
}