import type { MovableEntity } from './MovableEntity'
import type { LivingEntity } from './LivingEntity'
import type { PlayerStats } from '../types/PlayerStats'
import type { Weapon } from '../weapons/Weapon'

/**
 * Игровой персонаж.
 */
export interface Player extends MovableEntity, LivingEntity {
  readonly type: 'player'

  stats: PlayerStats
  weapons: Weapon[]

  level: number
  experience: number
  experienceToNextLevel: number
}