"use client";
import Skeleton from "@/components/skeleton/page";
import React, { useEffect, useState } from "react";

const PokemonInfoDetailPage = ({ pokemonId }: { pokemonId: number | null }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [description, setDescription] = useState<{ flavor_text: string; language: { name: string } }[]>([]);

  useEffect(() => {
    const fetchPokemonText = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        const data = await response.json();

        setDescription(data.flavor_text_entries);
      } catch (error) {
        console.error("Error fetch pokemon text:", error);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonId) {
      fetchPokemonText();
    }
  }, [pokemonId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative mb-4 px-3 text-center">
      {description ? (
        <div>
          <div className="font-bold text-white">Pokedex Entry</div>
          <div className="block text-[13.5px] text-[#98ACBC] font-bold h-full">
            {description.slice(1, 7).map((entry, index) => (
              entry.language.name == "en" ? (
                <span key={index}>
                  <span>{entry.flavor_text + ' '}</span>
                </span>
              ) : null
            ))}
          </div>
        </div>
      ) : (
        <Skeleton size={"md-box"} iterate={1} />
      )}
    </div>
  );
};

export default PokemonInfoDetailPage;
