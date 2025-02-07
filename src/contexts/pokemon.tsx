"use client"

import { PokemonModel } from "@/models/pokemon";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface PokemonContextProps {
  pokemons: PokemonModel[];
  setPokemons: (pokemons: PokemonModel[]) => void;
  filterPokemons: (searchTerm: string) => void;
  filterPokemonType: (pokemonType: string) => void;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider')
  }
  return context;
}

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);
  const [originalPokemons, setOriginalPokemons] = useState<PokemonModel[]>([]);

  useEffect(() => {
    
    if (!originalPokemons || originalPokemons.length === 0) {
      setOriginalPokemons(pokemons)
    }
  }, [originalPokemons, pokemons]);

  const filterPokemons = (searchTerm: string) => {
    
    const filtered = originalPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setPokemons(filtered);
  };

  const filterPokemonType = (selectedType: string) => {
    let filtered: PokemonModel[] = [];

    if (selectedType !== "All Types" && selectedType !== "") {
      filtered = originalPokemons.filter((pokemon) => 
        pokemon.types.includes(selectedType)
      )
    } else {
      filtered = originalPokemons;
    }

    setPokemons(filtered)
  }

  return (
    <PokemonContext.Provider value = {{ pokemons, setPokemons, filterPokemons, filterPokemonType }}>
      { children }
    </PokemonContext.Provider>
  )
}