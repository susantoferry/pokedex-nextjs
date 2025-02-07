import Image from "next/image";
import React from "react";

const PokemonImageDetailPage = ({
  pokemonId,
}: {
  pokemonId: number | null;
}) => {
  return (
    <div className="h-[230px] w-full relative max-h-screen z-20">
      <Image
        src="/images/pokemon-info-bg.jpeg"
        alt="pokemon-info-bg"
        height={230}
        width={350}
        className="h-[230px]"
      />

      {/* sparkles */}
      <div className="sparkles" />

      {/* bubbles */}
      <div>bubbles</div>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`}
        alt=""
        width={80}
        height={80}
        className="absolute w-[75px] h-[70px] right-0 left-[10px] mx-auto top-[70px] image-rendering-pixelated"
      />
    </div>
  );
};

export default PokemonImageDetailPage;
