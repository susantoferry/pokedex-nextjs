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

interface StatName {
  name: string;
}

export interface Stats {
  base_stat: number;
  stat: StatName;
}

interface PokemonAbility {
  ability: {
    name: string;
  }
}

export interface PokemonDetailModel {
  id: number;
  name: string;
  url: string;
  types: Type[];
  weight: number;
  height: number;
  abilities: PokemonAbility[];
  stats: Stats[];
  text: string;
}

export interface Status {
  base_stat: number;
  type_stat: string;
}