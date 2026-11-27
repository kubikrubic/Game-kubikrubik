export interface EnemyDefinition {
  id: string
  name: string
  radius: number
  maxHealth: number
  moveSpeed: number
  contactDamage: number
  experienceReward: number
  isBoss: boolean
  behavior: 'chase' | 'ranged' | 'boss'
  spriteKey: string | null
}
