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