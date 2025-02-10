"use client"

import { useActiveIndex } from "@/contexts/active-index";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface EvolutionDetail {
  min_level: number;
}

interface EvolutionChainNode {
  id: number;
  species: {
    name: string;
    url: string;
  };
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChainNode[];
}

export interface EvolutionData {
  chain: EvolutionChainNode;
}

interface EvolutionChain {
  id: number;
  name: string;
  level: number;
}

const extractEvolutionChain = (
  evolutionData: EvolutionData
): EvolutionChain[] => {
  const evolutionChain: EvolutionChain[] = [];

  let currentEvolution: EvolutionChainNode | null = evolutionData.chain;

  while (currentEvolution) {
    evolutionChain.push({
      id: Number(currentEvolution.species.url.split("/")[6]), // Extract Pokémon ID from URL
      name: currentEvolution.species.name,
      level: currentEvolution.evolution_details[0]?.min_level ?? null,
    });

    currentEvolution =
      currentEvolution.evolves_to.length > 0
        ? currentEvolution.evolves_to[0]
        : null;
  }

  return evolutionChain;
};

const PokemonEvolutionDetailPage = ({ pokemonId }: { pokemonId: number }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [evolutionChain, setEvolutionChain] = useState<
    { id: number; name: string; level: number }[]
  >([]);
  const { setActiveIndex } = useActiveIndex();

  useEffect(() => {
    if (pokemonId) {
      const fetchPokemonSpecies = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
          );
          const data = await response.json();
  
          const responseEvolution = await fetch(data.evolution_chain.url);
          const evolutionData = await responseEvolution.json();
  
          setEvolutionChain(extractEvolutionChain(evolutionData));
        } catch (error) {
          console.error("Error fetching pokemon species:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPokemonSpecies();
    }
    
  }, [pokemonId]);

  const generatePokemonEvolution = () => {
    if (!evolutionChain || evolutionChain.length === 0) {
      return <div>No evolution data available.</div>;
    }
    
    return (
      <div className="flex justify-center flex-col items-center sm:flex-row lg:flex-col">
        {evolutionChain.map((evolution, index) => (
          <div key={index} className="flex flex-col items-center sm:flex-row lg:flex-col">
            {evolution.level && (
              <div
                className=" w-[70px] py-1 rounded-full mx-[5px] text-xs font-semibold 
                bg-transparent text-white backdrop-blur-[10px] backdrop-saturate-[150%]
                shadow-box-level border border-[rgba(180,180,180,0.59)]"
              >
                Lv. {evolution.level}
              </div>
            )}
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`}
              alt=""
              height={75}
              width={75}
              onClick={() => setActiveIndex(evolution.id)}
              className="cursor-pointer mx-[5px] p-1 rounded-full transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="relative w-full flex flex-col items-center my-5 pt-5">
      <div className="font-bold text-white">Evolution</div>

      <div className="relative w-full flex justify-center items-center text-center flex-col">
        {generatePokemonEvolution()}
      </div>
    </div>
  );
};

export default PokemonEvolutionDetailPage;
