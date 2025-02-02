
import { useActiveIndex } from "@/contexts/active-index";
import React from "react";
import PokemonImageDetailPage from "./pokemon-image/page";
import PokemonNameDetailPage from "./pokemon-name/page";
import PokemonInfoDetailPage from "./pokemon-info/page";
import PokemonBMIDetailPage from "./pokemon-bmi/page";
import PokemonAbilityDetailPage from "./pokemon-ability/page";
import PokemonStatusDetailPage from "./pokemon-status/page";
import PokemonEvolutionDetailPage from "./pokemon-evolution/page";


const PokemonDetailPage = ({}) => {
  const { activeIndex } = useActiveIndex();
  

  return (
    <div className="relative z-10">
      {activeIndex && (
        <div
          className={`fixed flex flex-col items-center bg-[#88c4ff0d]
          rounded-3xl w-full max-w-[280px] top-44 right-[calc(10vw+15px)] text-center
          bottom-0 mb-5 overflow-scroll shadow-box-detail animate-fill-forwards border border-[#6dffff99]
          ${activeIndex ? "animate-slideIn" : ""}
        `}
        >
          {/* Generate Pokemon Image */}
          <PokemonImageDetailPage />

          <div className="w-full relative overflow-[inherit] z-[-1]">
            <div
              className="flex items-center flex-col pt-3 h-full overflow-y-scroll"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              {/* Generate Pokemon Name Type */}
              <PokemonNameDetailPage pokemonId={activeIndex}/>

              {/* Generate Pokemon Info */}
              <PokemonInfoDetailPage pokemonId={activeIndex} />

              <div className="relative grid w-full mb-4 px-3">
                {/* Generate Pokemon BMI */}
                <PokemonBMIDetailPage />

                <div className="grid relative">
                  {/* Generate Pokemon Abilities */}
                  <PokemonAbilityDetailPage />

                </div>
              </div>

              {/* Generate Pokemon Status */}
              <PokemonStatusDetailPage />

              {/* Generate Pokemon Evolution */}
              <PokemonEvolutionDetailPage />

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetailPage;
