import Skeleton from "@/components/skeleton/page";
import { PokemonDetailModel } from "@/models/pokemon";
import { capitaliseFirstLetter } from "@/utils/function";
import React from "react";

const PokemonAbilityDetailPage = ({ pokemon }: { pokemon: PokemonDetailModel }) => {
  return (
    <div className="flex flex-col justify-center text-center mx-auto w-full gap-3">
      {pokemon ? (
        <div className="font-bold text-white">Abilities</div>
      ) : (
        <Skeleton size={"title"} iterate={1} />
      )}

      {pokemon?.abilities ? (
        <div className="flex justify-between items-center w-full text-white gap-3 text-center">
          {pokemon.abilities.map((ability, index) => (
            <div
              className="flex flex-col justify-center text-center mx-auto w-full"
              key={index}
            >
              <div className="p-[5px] rounded-full font-medium bg-[#112D3E57] backdrop-blur-md backdrop-saturate-150 text-white mb-3 border border-[rgb(180,180,180,0.3)]">
                {capitaliseFirstLetter(ability.ability.name)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton size={"md-box"} iterate={1} />
      )}
    </div>
  );
};

export default PokemonAbilityDetailPage;
