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