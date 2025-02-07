export type StatType = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

export const bgColorStatTitle = (stat: StatType): string => {
  switch (stat) {
    case 'hp':
      return '#DF2140'
    case 'attack':
      return '#FF994D'
    case 'defense':
      return '#EECD3D'
    case 'special-attack':
      return '#85DDFF'
    case 'special-defense':
      return '#96DA83'
    case 'speed':
      return '#DB94A8'
    default: 
      return 'gray'
  }
}
