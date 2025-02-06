"use client";

import React, { useState } from "react";
import SearchPage from "../search/page";
import Image from "next/image";

const NavbarPage = () => {
  const [isScrolled] = useState<boolean>(false);
  // const [showSearch, setShowSearch] = useState<boolean>(false)
  // const { activeIndex } = useActiveIndex();

  const NavbarLeft = () => {
    return (
      <div>
        <Image
          src="/images/pokeball-logo.webp"
          alt="pokeball"
          className="h-[35px] w-[40px] border-none rounded-full absolute left-[90px] z-10 top-[-15px]"
          width={40}
          height={35}
        />
        <Image
          src="/images/pokemon-logo.png"
          alt="pokemon-logo"
          className="w-[215px] h-[88px] border-none z-20"
          width={215}
          height={88}
          priority
        />
      </div>
    );
  };

  const NavbarRight = () => {
    return (
      <div className="flex gap-5 flex-row-reverse items-center transition-all duration-300 ease-in-out">
        <div className="hidden gap-5 flex-row-reverse items-center lg:flex">
          <SearchPage />
        </div>
        <div className="hidden opacity-0 invisible md:block md:opacity-100 md:visible md:w-[50px] md:h-[50px] md:text-white md:cursor-pointer" />
      </div>
    );
  };

  return (
    <div
      className={`w-full sticky top-0 z-10 mb-10 pt-10 px-[10vw] z-20
        ${isScrolled ? "bg-[#1c1e761c] backdrop-blur-lg shadow-md" : ""}`}
    >
      <div className="relative flex items-center justify-between h-[90px]">
        <NavbarLeft />

        <NavbarRight />
      </div>
    </div>
  );
};





export default NavbarPage;
