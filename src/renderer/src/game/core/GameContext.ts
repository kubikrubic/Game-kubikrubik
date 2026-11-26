import type { GameWorld } from './GameWorld'
import type { EventBus } from './EventBus'
import type { DamageService } from './DamageService'

/**
 * Общие ресурсы, доступные игровым системам.
 */
export interface GameContext {
  readonly world: GameWorld
  readonly events: EventBus
  readonly damage: DamageService

  createEntityId(): number
}