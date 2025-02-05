import Image from "next/image";
import React from "react";

const PokemonImageDetailPage = ({
  pokemonId,
}: {
  pokemonId: number | null;
}) => {
  return (
    <div className="h-[230px] w-full relative max-h-screen flex justify-center items-center left-[25px] z-20">
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
        width={100}
        height={100}
        className="absolute right-0 left-[-45px] mx-auto object-contain top-[60px] image-rendering-pixelated"
      />
    </div>
  );
};

export default PokemonImageDetailPage;
