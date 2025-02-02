"use client";

import React, { useEffect, useState } from "react";
import { capitaliseFirstLetter } from "@/utils/function";
import { PokemonDetailModel, PokemonSpecies } from "@/models/pokemon";

const PokemonNameDetailPage = ({ pokemonId }: { pokemonId: number | null }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailModel | null>(
    null
  );
  const [species, setSpecies] = useState<PokemonSpecies[]>([]);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        const data = await response.json();

        setPokemonDetail(data);
      } catch (error) {
        console.error("Error fetching pokemon detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonId) {
      fetchPokemonDetail();
    }
  }, [pokemonId]);

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
    <div>
      <div className="relative text-sm font-black text-[#ECF0F2] mt-3 bottom-1">
        {`#${pokemonId}`}
      </div>
      <div className="font-bold text-white text-2xl">
        {pokemonDetail && `${capitaliseFirstLetter(pokemonDetail.name)}`}
      </div>
      <div className="mb-3">
        {species && (
          <div className="flex text-[#94DDFF] justify-center gap-3 font-bold text-sm">
            {Array.isArray(species) &&
              species.map((type, index) => (
                <div key={index}>
                  {type.names
                    .slice(0, 2)
                    .map(
                      (
                        otherName: { language: { name: string }; name: string },
                        index: number
                      ) => (
                        <>
                          <div>hello world!</div>
                          <div key={index}>
                            <div>{otherName.name}</div>
                            {index === 0 && <div> | </div>}
                          </div>
                        </>
                      )
                    )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Pokemon Elements */}
      <div className="flex gap-5 relative mb-4 justify-center">
        {/* {const { bgColor, iconType } = colorTypes} */}
      </div>
    </div>
  );
};

export default PokemonNameDetailPage;
