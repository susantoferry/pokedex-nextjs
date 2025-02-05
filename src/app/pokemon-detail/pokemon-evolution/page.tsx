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

// const extractEvolutionChain = (evolutionData: EvolutionData): EvolutionChain[] => {
//   const evolutionChain: {id: number; name: string; level: number;}[] = []

//   let currentEvolution = evolutionData.chain.evolves_to[0];
//   console.log(evolutionData)
//   while (currentEvolution) {
//     evolutionChain.push ({
//       id: 1,
//       name: currentEvolution.species.name,
//       level: currentEvolution.evolution_details[0]?.min_level
//       ? currentEvolution.evolution_details[0].min_level
//       : '-'
//     })

//     currentEvolution = currentEvolution.evolves_to[0]
//   }

//   // const evolve1 = pokemonEvolutionData.chain.evolves_to[0];
//   // const evolve2 = pokemonEvolutionData.chain.evolves_to[0].evolves_to[0];

//   // const evolve1Id = evolve1 ? getPokemonIdFromUrl(evolve1.species.url) : null
//   // const evolve2Id = evolve2 ? getPokemonIdFromUrl(evolve2.species.url) : null

//   return evolutionChain;
// }

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

  useEffect(() => {
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
  }, [pokemonId]);

  const generatePokemonEvolution = () => {
    if (!evolutionChain || evolutionChain.length === 0) {
      return <div>No evolution data available.</div>;
    }
    console.log(evolutionChain);
    return (
      <div className="flex justify-center items-center flex-col md:flex-row">
        {evolutionChain.map((evolution, index) => (
          <div key={index}>
            <div>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`}
                alt=""
                height={75}
                width={75}
                className="cursor-pointer mx-[5px] p-1 rounded-full transition-transform duration-500 ease-in-out"
              />
            </div>
            { evolution.level &&
              <div
                className=" w-[70px] py-1 rounded-full mx-[5px] text-xs font-semibold 
                bg-transparent text-white backdrop-blur-[10px] backdrop-saturate-[150%]
                shadow-box-level border border-[rgba(180,180,180,0.59)]"
              >
                Lv. {evolution.level}
              </div>
            }
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  console.log(evolutionChain);

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
