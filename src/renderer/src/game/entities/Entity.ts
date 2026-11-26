import type { Vector2 } from '../types/Vector2'
import type { EntityType } from '../types/EntityType'

/**
 * Общий контракт объекта игрового мира.
 */
export interface Entity {
  readonly id: number
  readonly type: EntityType

  position: Vector2
  radius: number
  active: boolean
}