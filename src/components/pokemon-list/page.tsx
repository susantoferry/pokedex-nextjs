"use client";

import { PokemonModel } from "@/models/pokemon";
import React, { useEffect } from "react";
import PokemonPage from "../pokemon/page";
import { useActiveIndex } from "@/contexts/active-index";
import PokemonDetailPage from "@/app/pokemon-detail/page";
import { usePokemon } from "@/contexts/pokemon";

const PokemonListComponent = ({ pokemonsData }: { pokemonsData: PokemonModel[] }) => {
  const { activeIndex } = useActiveIndex();
  const { pokemons, setPokemons } = usePokemon()

  useEffect(() => {
    setPokemons(pokemonsData)
  }, [pokemonsData, setPokemons])

  return (
    <div className="relative">
      <div
        className={`grid w-full ${
          activeIndex
            ? "lg:grid-cols-[minmax(300px,3fr)_minmax(300px,1fr)]"
            : "grid-cols-1"
        } auto-rows-auto px-[10vw] transition-all duration-500 ease-in-out`}
      >
        <div
          className="w-full relative flex-col mb-5 flex-none basis-[75%] gap-3 pr-3 z-10
             grid auto-rows-auto grid-cols-auto-fit-minmax min-[250px] max-[1fr] 
             !px-[15px] md:justify-center md:items-center md:p-0"
        >
          {pokemons.map((pokemon, index) => (
            <React.Fragment key={index}>
              <PokemonPage pokemon={pokemon} />
            </React.Fragment>
          ))}
        </div>

        <PokemonDetailPage />
      </div>
    </div>
  );
};

export default PokemonListComponent;
