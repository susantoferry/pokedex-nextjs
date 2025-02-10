"use client";

import { useActiveIndex } from "@/contexts/active-index";
import React, { useEffect, useState } from "react";
import { PokemonDetailModel } from "@/models/pokemon";
import DetailPopUp from "@/components/popup/page";
import PokemonImageDetailPage from "@/components/pokemon-detail/pokemon-image/page";
import PokemonNameDetailPage from "@/components/pokemon-detail/pokemon-name/page";
import PokemonInfoDetailPage from "@/components/pokemon-detail/pokemon-info/page";
import PokemonBMIDetailPage from "@/components/pokemon-detail/pokemon-bmi/page";
import PokemonAbilityDetailPage from "@/components/pokemon-detail/pokemon-ability/page";
import PokemonStatusDetailPage from "@/components/pokemon-detail/pokemon-status/page";
import PokemonEvolutionDetailPage from "@/components/pokemon-detail/pokemon-evolution/page";


const PokemonDetailPage = ({}) => {
  const { activeIndex } = useActiveIndex();
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailModel | null>(
    null
  );

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${activeIndex}/`
        );
        const data = await response.json();

        setPokemonDetail(data);
      } catch (error) {
        console.error("Error fetching pokemon detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (activeIndex) {
      fetchPokemonDetail();
    }
  }, [activeIndex]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="relative z-10 left-[17px]">
        {activeIndex && (
          <div
            className={`fixed hidden bg-[#88c4ff0d]
            rounded-3xl w-full max-w-[280px] top-44 right-[calc(9vw+15px)] text-center
            bottom-0 mb-5 overflow-hidden shadow-box-detail animate-fill-forwards border border-[#6dffff99]
            ${
              activeIndex ? "animate-slideIn" : ""
            } lg:flex lg:flex-col lg:items-center
          `}
          >
            {/* Generate Pokemon Image */}
            <PokemonImageDetailPage pokemonId={activeIndex} />

            <div className="w-full relative overflow-auto z-[-1]">
              <div
                className="flex h-full items-center flex-col pt-3 overflow-y-scroll"
                style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                {/* Generate Pokemon Name Type */}
                <PokemonNameDetailPage
                  pokemonId={activeIndex}
                  pokemon={pokemonDetail}
                />

                {/* Generate Pokemon Info */}
                <PokemonInfoDetailPage pokemonId={activeIndex} />

                <div className="relative grid w-full mb-4 px-3">
                  {/* Generate Pokemon BMI */}
                  <PokemonBMIDetailPage pokemon={pokemonDetail!} />

                  <div className="grid relative">
                    {/* Generate Pokemon Abilities */}
                    {pokemonDetail ? <PokemonAbilityDetailPage pokemon={pokemonDetail!} /> : "" }
                  </div>
                </div>

                {/* Generate Pokemon Status */}
                <PokemonStatusDetailPage pokemon={pokemonDetail} />

                {/* Generate Pokemon Evolution */}
                <PokemonEvolutionDetailPage pokemonId={activeIndex} />
              </div>
            </div>
          </div>
        )}
      </div>
      <DetailPopUp pokemon={pokemonDetail} />
    </React.Fragment>
  );
};

export default PokemonDetailPage;
