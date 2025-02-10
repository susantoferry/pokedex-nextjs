"use client";

import React, { useEffect, useState } from "react";
import { capitaliseFirstLetter } from "@/utils/function";
import { PokemonDetailModel, PokemonSpecies } from "@/models/pokemon";
import { colorTypes } from "@/constants/type-color";
import Image from "next/image";

const PokemonNameDetailPage = ({
  pokemonId,
  pokemon,
}: {
  pokemonId: number | null;
  pokemon: PokemonDetailModel | null;
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [species, setSpecies] = useState<PokemonSpecies | null>(null);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const data = await response.json();

        setSpecies(data);
      } catch (error) {
        console.error("Error fetching pokemon species:", error);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonId) {
      fetchPokemonSpecies();
    }
  }, [pokemonId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center">
      <div className="relative text-sm font-black text-[#ECF0F2] mt-3 bottom-1">
        {`#${pokemonId}`}
      </div>
      <div className="font-bold text-white text-2xl mb-2">
        {pokemon && `${capitaliseFirstLetter(pokemon.name)}`}
      </div>
      <div className="mb-[10px]">
        {species && (
          <div className="flex text-[#94DDFF] justify-center gap-3 font-bold text-sm">
            {/* {species.names.slice(0, 2).map((otherName, index) => ( */}
            {species?.names.slice(0, 2).map((otherName: {name: string}, index: number) => (
              <React.Fragment key={index}>
                <div>
                  {otherName.name}
                </div>
                {index === 0 && <div> | </div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Pokemon Elements */}
      <div className="flex gap-5 relative mb-4 justify-center">
        {pokemon?.types.map((type, index) => {
          const { bgColor, iconType } = colorTypes(type.type.name);
          console.log(bgColor)
          return (
            <div
              key={index}
              className={`flex gap-1 rounded-full px-2 py-1 text-white m-[5px] mt-3 font-semibold text-sm`}
              style={{backgroundColor: bgColor}}
            >
              <Image src={`/images/pokemon-icon/${iconType}`} alt="" height={20} width={20} />
              <div>{capitaliseFirstLetter(type.type.name)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonNameDetailPage;
