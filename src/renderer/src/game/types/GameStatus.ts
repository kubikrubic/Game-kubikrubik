/**
 * Возможные состояния игрового процесса.
 */
export type GameStatus =
  | 'idle'
  | 'running'
  | 'paused'
  | 'level-up'
  | 'victory'
  | 'defeat'