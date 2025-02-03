import Image from "next/image";
import React from "react";

const PokemonEvolutionDetailPage = () => {
  const initialPokemon = () => {
    return (
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`}
            alt=""
            height={75}
            width={75}
            className="cursor-pointer mx-[5px] p-1 rounded-full transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className=" w-[70px] py-1 rounded-full mx-[5px] text-xs font-semibold 
          bg-transparent text-white backdrop-blur-[10px] backdrop-saturate-[150%]
          shadow-box-level border border-[rgba(180,180,180,0.59)]">
          Lv. 
        </div>
      </div>
    );
  };

  const secondEvolve = () => {
    return (
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${2}.png`}
            alt=""
            height={75}
            width={75}
            className="cursor-pointer mx-[5px] p-1 rounded-full transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className=" w-[70px] py-1 rounded-full mx-[5px] text-xs font-semibold 
          bg-transparent text-white backdrop-blur-[10px] backdrop-saturate-[150%]
          shadow-box-level border border-[rgba(180,180,180,0.59)]">
          Lv. 
        </div>
      </div>   
    )
  }

  const thirdEvolve = () => {
    return (
      <div className="flex justify-center items-center flex-col md:flex-row mt-[10px]">
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${3}.png`}
            alt=""
            height={75}
            width={75}
            className="cursor-pointer mx-[5px] p-1 rounded-full transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className=" w-[70px] py-1 rounded-full mx-[5px] text-xs font-semibold 
          bg-transparent text-white backdrop-blur-[10px] backdrop-saturate-[150%]
          shadow-box-level border border-[rgba(180,180,180,0.59)]">
          Lv. 
        </div>
      </div>   
    )
  }

  return (
    <div className="relative w-full flex flex-col items-center my-5 pt-5">
      <div className="font-bold text-white">Evolution</div>

      <div className="relative w-full flex justify-center items-center text-center flex-col">
        { initialPokemon() }

        { secondEvolve() }

        { thirdEvolve() }
      </div>
    </div>
  );
};

export default PokemonEvolutionDetailPage;
