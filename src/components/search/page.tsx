import React from "react";

const SearchPage = () => {
  const handleSearch = () => {};

  return (
    // <div
    //   className="relative my-8 mx-3 bg-gradient-to-r from-[#02b7ff] via-[#fcfff3] to-[#0281ff] bg-[200%_100%] 
    //   rounded-full py-3 px-4 flex items-center 
    //   shadow-gradient-search-box animate-shine gap-3 z-0
    //   before:content-[''] before:absolute before:inset-[2px] before:bg-[#2a2a2a] before:rounded-full before:z-10"
    // >
    
    <div className="fancy">
      <input
        type="text"
        placeholder="Search your pokemon"
        className="bg-transparent border-none outline-none text-base font-semibold tracking-tight w-full text-white z-10"
      />
      <div className="flex items-center rounded-xl z-10">
        <button className="text-white">eesfdf</button>
      </div>
    </div>
  );
};

export default SearchPage;
