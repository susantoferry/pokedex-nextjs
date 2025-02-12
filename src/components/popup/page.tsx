import React from "react";
import { useActiveIndex } from "@/contexts/active-index";
import CloseIcon from "@mui/icons-material/Close";
import { PokemonDetailModel } from "@/models/pokemon";
import PokemonNameDetailPage from "../pokemon-detail/pokemon-name/page";
import PokemonImageDetailPage from "../pokemon-detail/pokemon-image/page";
import PokemonInfoDetailPage from "../pokemon-detail/pokemon-info/page";
import PokemonBMIDetailPage from "../pokemon-detail/pokemon-bmi/page";
import PokemonAbilityDetailPage from "../pokemon-detail/pokemon-ability/page";
import PokemonStatusDetailPage from "../pokemon-detail/pokemon-status/page";
import PokemonEvolutionDetailPage from "../pokemon-detail/pokemon-evolution/page";

const DetailPopUp = ({ pokemon }: { pokemon: PokemonDetailModel | null }) => {
  const { activeIndex, setActiveIndex } = useActiveIndex();

  const pokemonDetailColumn = () => {
    return (
      <div className="relative flex flex-col max-w-[80vw] h-[550px]">
        {/* Fixed Name Detail Section */}
        <div className="fixed top-0 left-0 w-[80vw] z-10">
          <PokemonNameDetailPage pokemonId={activeIndex} pokemon={pokemon} />
        </div>

        <div className="mt-44 px-5 overflow-y-auto scrollbar-hide">
          <div className="flex justify-center flex-col sm:flex-col md:flex-row">
            <div className="mb-4 md:flex md:flex-col md:w-[40vw] relative">
              <PokemonImageDetailPage pokemonId={activeIndex} />
            </div>
            <div className="md:w-[60vw] md:px-5 text-center">
              <PokemonInfoDetailPage pokemonId={activeIndex} />
            </div>
          </div>
          <div className="relative block">
            <PokemonBMIDetailPage pokemon={pokemon!} />
            <PokemonAbilityDetailPage pokemon={pokemon!} />
            <PokemonStatusDetailPage pokemon={pokemon} />
            <PokemonEvolutionDetailPage pokemonId={activeIndex!} />
          </div>
        </div>
      </div>
    );
  };


  const handleCloseModal = () => {
    setActiveIndex(null)
  };

  return (
    
      <div className={`sticky h-[550px] w-[80vw] overflow-visible z-10
        transform transition-transform  ease-in-out bottom-0 lg:hidden
        ${activeIndex ? "translate-y-[-350px] duration-700" : "translate-y-full duration-300"}`}
      >
        <CloseIcon
          className="absolute bg-[#ff5454fa] z-20 text-white rounded-full
        m-1 p-[2px] top-[-27px] right-2 translate-y-40 cursor-pointer stroke-white stroke-[1px]
        hover:bg-[#bb1d1df9]"
          onClick={() => handleCloseModal()}
        />
        <div
          className="w-full h-full fixed top-[170px] bg-[#88C4FF0D] backdrop-blur-md backdrop-saturate-[150%]
        rounded-3xl z-10 shadow-box-detail"
        >
          <div className="flex flex-col">{pokemonDetailColumn()}</div>
        </div>
      </div>
    
  );
};

export default DetailPopUp;
