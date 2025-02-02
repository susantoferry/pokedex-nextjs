export interface PokemonModel {
  name: string;
  url: string;
  types: string[];
}

export interface PokemonTypeEntry {
  pokemon: {
    name: string;
    url: string;
  }
}

export interface PokemonSpecies {
  name: string;
  url: string;
  evolution_chain: {
    url: string;
  };
  names: {
    language: {
      name: string;
    };
    name: string;
  }[];
}

interface Type {
  type: {
    name: string;
  };
}

interface AbilityName {
  name: string;
}

interface Ability {
  ability: AbilityName;
}

interface StatName {
  name: string;
}

interface Stats {
  base_stat: number;
  stat: StatName;
}

export interface PokemonDetailModel {
  id: number;
  name: string;
  url: string;
  types: Type[];
  weight: number;
  height: number;
  abilities: Ability[];
  stats: Stats[];
  text: string;
}
