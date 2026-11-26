/**
 * Характеристики игрока, изменяемые улучшениями.
 */
export interface PlayerStats {
  moveSpeed: number
  damageMultiplier: number
  attackSpeedMultiplier: number
  defense: number
  pickupRadius: number
}