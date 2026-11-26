import type { Player } from '../entities/Player'

/**
 * Улучшение, доступное игровому персонажу.
 */
export interface Upgrade {
  readonly id: string
  readonly name: string
  readonly description: string

  apply(player: Player): void
}