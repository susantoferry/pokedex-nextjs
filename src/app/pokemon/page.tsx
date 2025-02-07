import SkeletonPage from "@/components/skeleton/page";
import { useActiveIndex } from "@/contexts/active-index";
import { PokemonModel } from "@/models/pokemon";
import { capitaliseFirstLetter, colorTypes, getPokemonIdFromUrl } from "@/utils/function";
import Image from "next/image";
import React from "react";

const PokemonPage = ({ pokemon }: { pokemon: PokemonModel }) => {
  const pokemonId = getPokemonIdFromUrl(pokemon.url);
  const { activeIndex, setActiveIndex } = useActiveIndex();

  const handlePokemonClick = (pokemonId: number) => {
    setActiveIndex(pokemonId)
  }

  return (
    <div
      className={`m-3 mt-[5px] p-4 pt-10 relative cursor-pointer 
      transition-all duration-100 ease-in-out filter brightness-[0.85] 
      border border-transparent rounded-3xl h-[190px] bg-center bg-no-repeat
      bg-pokemon-frame bg-[length:100%_100%] backdrop-blur-[10px] backdrop-saturate-[150%]
      
      ${pokemonId === activeIndex ? "border-[rgb(118,192,221)] shadow-[0px_6px_16px_rgba(0,183,255,0.8)] scale-[0.98]" : "border-transparent shadow-[0_2px_10px_rgb(0,_183,_255,_0.74)]" } 
      hover:border hover:border-[rgb(118,192,221)] hover:shadow-[0px_6px_16px_rgba(0,183,255,0.8)] hover:brightness-100`}
      onClick={() => handlePokemonClick(pokemonId)}
    >
      <div className="flex justify-between items-center text-center px-5">
        <PokemonImage id={pokemonId} pokemonName={pokemon.name} />

        <PokemonInfo id={pokemonId} pokemon={pokemon} />
      </div>
    </div>
  );
};

const PokemonImage = ({
  id,
  pokemonName,
}: {
  id: number;
  pokemonName: string;
}) => {
  return (
    <div>
      {id ? (
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={capitaliseFirstLetter(pokemonName)}
          width={96}
          height={96}
          className="transition-all duration-100 relative top-2 [image-rendering: pixelated]"
        />
      ) : (
        <SkeletonPage size={"md-box"} iterate={1} />
      )}
    </div>
  );
};

const PokemonInfo = ({
  id,
  pokemon,
}: {
  id: number;
  pokemon: PokemonModel;
}) => {


  return (
    <div>
      {id ? (
        <div className="text-xs font-black text-[#dde3e8]">#{id}</div>
      ) : (
        <SkeletonPage size={"title"} iterate={1} />
      )}

      {id ? (
        <div className="font-bold m-1 text-white pb-3">
          {capitaliseFirstLetter(pokemon.name)}
        </div>
      ) : (
        <SkeletonPage size={"title"} iterate={1} />
      )}

      {pokemon ? (
        <div className="flex gap-3 items-center justify-center">
          {pokemon.types && pokemon.types.length > 0 &&
            pokemon.types.map((type) => {
              const { bgColor, iconType } = colorTypes(type);
              return (
                <Image
                  key={type}
                  src={`/images/pokemon-icon/${iconType}`}
                  alt={iconType.replace(".png", "")}
                  style={{ backgroundColor: bgColor }}
                  className="rounded-full p-[5px] relative
                  shadow-[0_6px_10px_rgba(0,_0,_0,_0.4),_inset_0_-8px_10px_rgba(0,_0,_0,_0.3),_inset_0_6px_10px_rgba(255,_255,_255,_0.6)]"
                  width={28}
                  height={28}
                />
              );
            })}
        </div>
      ) : (
        <SkeletonPage size={"title"} iterate={1} />
      )}
    </div>
  );
};

export default PokemonPage;
