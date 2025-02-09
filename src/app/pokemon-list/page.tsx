"use client";

import { PokemonModel, PokemonTypeEntry } from "@/models/pokemon";
import React, { useEffect, useState } from "react";
import PokemonPage from "../pokemon/page";
import { getPokemonIdFromUrl } from "@/utils/function";
import PokemonDetailPage from "../pokemon-detail/page";
import { usePokemon } from "@/contexts/pokemon";

const PokemonListPage = () => {
  // const [pokemons, setPokemons] = useState<PokemonModel[]>([]);
  const { pokemons, setPokemons } = usePokemon();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Fetch the list of Pokémon
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();

        // Fetch Pokémon types for each Pokémon
        const pokemonData: PokemonModel[] = data.results.map(
          (pokemon: { name: string; url: string }) => ({
            ...pokemon,
            types: [], // Initialize with an empty array of types
          })
        );

        // Fetch types for all Pokémon
        await fetchPokemonTypes(pokemonData);

        // Update the state with the fetched Pokémon and their types
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const fetchPokemonTypes = async (pokemonList: PokemonModel[]) => {
    const updatedPokemons = [...pokemonList];

    // Fetch each Pokémon's types from the types endpoint
    const typePromises = [];

    for (let i = 1; i <= 18; i++) {
      const typePromise = fetch(`https://pokeapi.co/api/v2/type/${i}`)
        .then((response) => response.json())
        .then((typeData) => {
          const pokemonsInType = typeData.pokemon;

          // For each Pokémon in the type, update their types in the state
          pokemonsInType.forEach((pokeInType: PokemonTypeEntry) => {
            const pokemonId = getPokemonIdFromUrl(pokeInType.pokemon.url);

            if (
              pokemonId <= updatedPokemons.length &&
              updatedPokemons[pokemonId - 1]
            ) {
              updatedPokemons[pokemonId - 1].types.push(typeData.name);
            }
          });
        })
        .catch((error) => {
          console.error("Error fetching the Pokémon type:", error);
        });

      typePromises.push(typePromise);
    }

    await Promise.all(typePromises);
    setPokemons(updatedPokemons);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative">
      <div className="grid w-full grid-cols-[78%_21%] auto-rows-auto px-[10vw] transition-all duration-500 ease-in-out">
        <PokemonListExtension pokemons={pokemons} />

        <PokemonDetailPage />
      </div>
    </div>
  );
};

const PokemonListExtension = ({ pokemons }: { pokemons: PokemonModel[] }) => {
  return (
    <div className="overflow-y-auto flex-1">
      <div
        className="w-full relative flex-col mb-5 flex-none basis-[75%] gap-3 pr-3 z-10
                  lg:grid lg:grid-cols-auto-fit-minmax 
                  md:flex md:justify-center md:items-center md:p-0"
      >
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <PokemonPage pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonListPage;
