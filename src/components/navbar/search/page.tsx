import { usePokemon } from "@/contexts/pokemon";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  
  const { filterPokemons } = usePokemon();

  const handleSearch = (keyword: string) => {
    filterPokemons(keyword)
  }

  return (
    <div className="fancy">
      <input
        type="text"
        placeholder="Search your pokemon"
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-transparent border-none outline-none text-base font-semibold tracking-tight w-full text-white z-10"
      />
      <SearchIcon className="absolute top-[14px] right-[14px] text-[#dedede] w-6 h-6 z-10"/>
    </div>
  );
};

export default Search;
