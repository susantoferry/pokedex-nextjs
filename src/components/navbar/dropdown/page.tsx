import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { capitaliseFirstLetter } from "@/utils/function";
import Image from "next/image";
import { pokemonTypes } from "@/constants/pokemon-type";
import { colorTypes } from "@/constants/type-color";
import { usePokemon } from "@/contexts/pokemon";

const DropDown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const { filterPokemonType } = usePokemon();
  const [pokemonType, setPokemonType] = useState<string>("");

  const handleDropdownToggle = () => {
    setOpen(!open);
  };

  const handleSelectPokemonType = (pokemonType: string) => {
    filterPokemonType(pokemonType)
    setPokemonType(pokemonType)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-52" ref={dropdownRef}>
      <button
        onClick={() => handleDropdownToggle()}
        className="flex items-center justify-between w-full p-[10px] cursor-pointer border-2 border-gray-300 z-10 text-white rounded-full
        shadow-gradient-search-box backdrop-blur-md"
      >
        <span>{capitaliseFirstLetter(pokemonType !== "" ? pokemonType : "All Types")}</span>
        <span>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>
      {open && (
        <div
          className="absolute top-full w-full max-h-[200px] m-0 mt-4 p-0 overflow-y-auto
          list-none border border-[#ccc] bg-[#23242433] backdrop-blur-md z-10 rounded-[8px]
          text-white"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex items-center p-[10px] cursor-pointer backdrop-blur-md
            font-semibold hover:bg-[#45638354]"
            onClick={() => handleSelectPokemonType("All Types")}
          >
            All pokémon types
          </div>
          {pokemonTypes.results
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((type) => {
              const { bgColor, iconType } = colorTypes(type.name);
              return (
                <div
                  className="flex items-center p-2 cursor-pointer 
                    hover:bg-[#45638354] backdrop-blur-md"
                  key={type.name}
                  onClick={() => handleSelectPokemonType(type.name)}
                >
                  <Image
                    src={`/images/pokemon-icon/${iconType}`}
                    alt={`pokemon-${type.name}-type`}
                    width={22}
                    height={22}
                    className="relative h-[22px] w-[22px] rounded-full p-[5px] shadow-box-icon-type"
                    style={{ backgroundColor: bgColor }}
                  />
                  <div className="ml-3 font-semibold">
                    {capitaliseFirstLetter(type.name)}
                  </div>
                </div>
              );
            })}

          {/* End of loop */}
        </div>
      )}
    </div>
  );
};

//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   scrollbar-width: none;

//   &::-webkit-scrollbar {
//     display: none;
//   }
export default DropDown;
