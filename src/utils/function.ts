export const getPokemonIdFromUrl = (value: string) => {
  return parseInt(value.split('/').slice(-2)[0], 10)
}

export const capitaliseFirstLetter = (text: string): string => {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const adjustingRadarCoordinate = (label: string, x: number,y: number) => {
  let adjustedX = x;
  let adjustedY = y;

  switch (label) {
    case 'HP':
      adjustedX = x;
      adjustedY = y - 8;
      break;
    case 'ATK':
      adjustedX = x + 8;
      adjustedY = y
      break;
    case 'DEF':
      adjustedX = x + 5;
      adjustedY = y + 12;
      break;
    case 'SpATK':
      adjustedX = x;
      adjustedY = y + 20;
      break;
    case 'SpDEF':
      adjustedX = x - 8;
      adjustedY = y + 10;
      break;
    case 'SPD':
      adjustedX = x - 8;
      adjustedY = y - 3;
      break;
    default:
      adjustedX = x;
      adjustedY = y;
      break;
  }
  return {adjustedX, adjustedY}
}