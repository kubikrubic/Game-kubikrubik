import type { EnemyDefinition } from './EnemyDefinition'

// TODO: баланс — все числовые параметры стартовых противников собраны здесь.
export const ENEMY_DEFINITIONS: Record<string, EnemyDefinition> = {
  snake: {
    id: 'snake',
    name: 'Змей',
    radius: 10,
    maxHealth: 8,
    moveSpeed: 140,
    contactDamage: 4,
    experienceReward: 1,
    isBoss: false,
    behavior: 'chase',
    spriteKey: 'snake'
  },
  slime: {
    id: 'slime',
    name: 'Слизень',
    radius: 12,
    maxHealth: 14,
    moveSpeed: 90,
    contactDamage: 5,
    experienceReward: 1,
    isBoss: false,
    behavior: 'chase',
    spriteKey: 'slime_1'
  },
  orc: {
    id: 'orc',
    name: 'Орк',
    radius: 16,
    maxHealth: 45,
    moveSpeed: 80,
    contactDamage: 10,
    experienceReward: 3,
    isBoss: false,
    behavior: 'chase',
    spriteKey: 'orc_1'
  },
  archer: {
    id: 'archer',
    name: 'Лучник',
    radius: 12,
    maxHealth: 20,
    moveSpeed: 70,
    contactDamage: 4,
    experienceReward: 3,
    isBoss: false,
    behavior: 'ranged',
    spriteKey: 'ranger_1'
  },
  minotaur: {
    id: 'minotaur',
    name: 'Минотавр',
    radius: 48,
    maxHealth: 1500,
    moveSpeed: 70,
    contactDamage: 25,
    experienceReward: 0,
    isBoss: true,
    behavior: 'boss',
    spriteKey: 'minotaur'
  },
  'armored-skeleton': {
    id: 'armored-skeleton',
    name: 'Бронированный скелет',
    radius: 15,
    maxHealth: 70,
    moveSpeed: 75,
    contactDamage: 10,
    experienceReward: 4,
    isBoss: false,
    behavior: 'chase',
    spriteKey: 'skeleton'
  },
  mage: {
    id: 'mage',
    name: 'Маг',
    radius: 12,
    maxHealth: 30,
    moveSpeed: 60,
    contactDamage: 4,
    experienceReward: 4,
    isBoss: false,
    behavior: 'ranged',
    spriteKey: 'wizard_1'
  },
  'catacomb-lord': {
    id: 'catacomb-lord',
    name: 'Владыка Катакомб',
    radius: 56,
    maxHealth: 2500,
    moveSpeed: 65,
    contactDamage: 30,
    experienceReward: 0,
    isBoss: true,
    behavior: 'boss',
    // TODO: спрайт босса пока отсутствует.
    spriteKey: null
  }
}

export function getEnemyDefinition(id: string): EnemyDefinition {
  const definition = ENEMY_DEFINITIONS[id]
  if (!definition) {
    throw new Error(`Неизвестный идентификатор противника: "${id}"`)
  }
  return definition
}
