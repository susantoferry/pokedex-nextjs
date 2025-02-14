"use client";

import React, { useEffect, useState } from "react";
import Search from "../navbar/search/page";
import Image from "next/image";
import DropDown from "./dropdown/page";
import MenuIcon from "@mui/icons-material/Menu";


const NavbarPage = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const showSearchMenu = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavbarLeft = () => {
    return (
      <div className="cursor-pointer" onClick={() => window.location.reload()}>
        <Image
          src="/images/pokeball-logo.webp"
          alt="pokeball"
          className="h-[35px] w-[40px] border-none rounded-full absolute left-[90px] z-10 top-[-15px]"
          width={40}
          height={35}
          quality={75}
        />
        <Image
          src="/images/pokemon-logo.webp"
          alt="pokemon-logo"
          className="w-[215px] h-[88px] border-none z-20"
          width={215}
          height={88}
          priority
          quality={75}
        />
      </div>
    );
  };

  const NavbarRight = () => {
    return (
      <div className="flex gap-5 flex-row-reverse items-center transition-all duration-300 ease-in-out">
        <div className="hidden gap-5 items-center lg:flex">
          <DropDown />
          <Search />
        </div>
        <MenuIcon
          className="text-white visible cursor-pointer md:w-[50px] md:h-[50px] lg:invisible "
          onClick={() => showSearchMenu()}
        />
      </div>
    );
  };

  return (
    <div
      className={`w-full sticky top-0 mb-10 pt-10 px-[10vw] z-20
        ${isScrolled ? "bg-[#1c1e761c] backdrop-blur-lg shadow-md" : ""}`}
    >
      <div className="relative flex items-center justify-between h-[90px]">
        <NavbarLeft />

        <NavbarRight />

        {/* Mobile Search View */}
        <div
          className={`fixed w-full h-[200px] bg-[#0e1c2b] backdrop-blur-md backdrop-saturate-150
          border border-[#8f8f8f99] border-t-0 text-white z-50 top-0 left-0
          right-0 rounded-b-xl px-5 shadow-box-detail transform transition-transform duration-300 ease-in-out
          ${showSearch ? "translate-y-0" : "translate-y-[-210px]"}`}
        >
          <div className="flex justify-center flex-col items-center gap-5 mt-5">
            <div className="flex justify-center items-center gap-5 mt-5">
              <DropDown />
              <Search />
            </div>

            <button
              className="block relative bottom-[-20px] w-64 py-2 px-4 rounded-3xl outline-none
              bg-transparent backdrop-blur-xl text-white font-semibold 
              cursor-pointer hover:text-[#03e9f4] border border-[#7a7474] hover:animate-lightEffect
              hover:border-blue-500"
              onClick={() => showSearchMenu()}
            >
              Close Search
            </button>
          </div>
        </div>
        {/* End of mobile search view */}
      </div>
    </div>
  );
};

export default NavbarPage;
