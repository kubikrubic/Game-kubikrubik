import type { LivingEntity } from '../entities/LivingEntity'

/**
 * Общий контракт нанесения урона игровым сущностям.
 */
export interface DamageService {
  applyDamage(target: LivingEntity, amount: number): void
}