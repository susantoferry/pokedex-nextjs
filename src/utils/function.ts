export const getPokemonIdFromUrl = (value: string) => {
  return parseInt(value.split('/').slice(-2)[0], 10)
}

export const capitaliseFirstLetter = (text: string): string => {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const colorTypes = (type: string) => {
  let bgColor = ""
  let iconType = ""

  switch (type) {
    case 'normal': 
      bgColor = '#BCBCAC';
      iconType = "normal.png";
      break;
    case 'fighting':
      bgColor = '#BC5442';
      iconType = "fighting.png";
      break;
    case 'flying':
      bgColor = '#669AFF';
      iconType = "flying.png";
      break;
    case 'poison':
      bgColor = '#AB549A';
      iconType = "poison.png";
      break;
    case 'ground':
      bgColor = '#DEBC54';
      iconType = "ground.png";
      break;
    case 'rock':
      bgColor = '#BCAC66';
      iconType = "rock.png";
      break;
    case 'bug':
      bgColor = '#ABBC1C';
      iconType = "bug.png";
      break;
    case 'ghost':
      bgColor = '#6666BC';
      iconType = "ghost.png";
      break;
    case 'steel':
      bgColor = '#ABACBC';
      iconType = "steel.png";
      break;
    case 'fire':
      bgColor = '#FF421C';
      iconType = "fire.png";
      break;
    case 'water':
      bgColor = '#2F9AFF';
      iconType = "water.png";
      break;
    case 'grass':
      bgColor = '#78CD54';
      iconType = "grass.png";
      break;
    case 'electric':
      bgColor = '#FFCD30';
      iconType = "electric.png";
      break;
    case 'psychic':
      bgColor = '#FF549A';
      iconType = "psychic.png";
      break;
    case 'ice':
      bgColor = '#78DEFF';
      iconType = "ice.png";
      break;
    case 'dragon':
      bgColor = '#7866EF';
      iconType = "dragon.png";
      break;
    case 'dark':
      bgColor = '#785442';
      iconType = "dark.png";
      break;
    case 'fairy':
      bgColor = '#FFACFF';
      iconType = "fairy.png";
      break;
    case 'shadow':
      bgColor = '#0E2E4C';
      iconType = "";
      break;
    default:
      bgColor = '#000'
      iconType = "";
      break;
  }  

  return {bgColor, iconType}
  
}

export type StatType = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

export function bgColorStatTitle(stat: StatType): string {
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

export const fetchStats = (type: string) => {
  let icon = ""
  let title = ""

  switch (type) {
    case 'hp':
      icon = "heart"
      title = "HP"
      break;
    case 'attack':
      icon = "attack"
      title = "ATK"
      break;
    case 'defense':
      icon = "shield"
      title = "DEF"
      break;
    case 'special-attack':
      icon = "special-atk"
      title = "SpATK"
      break;
    case 'special-defense':
      icon = "special-def"
      title = "SpDEF"
      break;
    case 'speed':
      icon = "speed"
      title = "SPD"
      break;
    default:
      icon = "total"
      title = "TOTAL"
      break;
  }

  return { icon, title }
}