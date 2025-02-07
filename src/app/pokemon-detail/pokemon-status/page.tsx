import HexagonPage from "@/components/hexagon/page";
import SkeletonPage from "@/components/skeleton/page";
import { PokemonDetailModel, Stats, Status } from "@/models/pokemon";
import { bgColorStatTitle, fetchStats, StatType } from "@/utils/function";
import Image from "next/image";
import React from "react";

const PokemonStatusDetailPage = ({
  pokemon,
}: {
  pokemon: PokemonDetailModel | null;
}) => {
  const leftStats = pokemon?.stats.slice(0, 3);
  const rightStats = pokemon?.stats.slice(3);
  const totalStat = pokemon?.stats.reduce(
    (sum, stat) => sum + stat.base_stat,
    0
  );

  const transformedStats: Status[] = pokemon?.stats.map(({ base_stat, stat }) => ({
    base_stat,
    type_stat: stat.name,
  })) || [];
  
  const generateStat = (stats: Stats[] | undefined) => {
    return (
      <div className="flex justify-center items-center w-full text-white gap-[10px] flex-col py-[5px] ">
        {stats ? (
          <div className="flex gap-3 flex-col w-full">
            {stats.map((stat, index) => {
              const { icon, title } = fetchStats(stat.stat.name);
              return (
                <div
                  key={index}
                  className="flex justify-between items-center w-full text-white gap-5"
                >
                  <div className="flex items-center">
                    <div
                      className="rounded-full w-[25px] h-[25px] text-xs font-bold flex items-center justify-center text-white"
                      style={{
                        backgroundColor: bgColorStatTitle(
                          stat.stat.name as StatType
                        ),
                      }}
                    >
                      <Image
                        src={`/images/status-icon/${icon}.png`}
                        alt=""
                        width={15}
                        height={15}
                        className="contrast-[2.5]"
                      />
                    </div>
                    <div
                      className="text-xs font-bold ml-[10px] brightness-100 contrast-150"
                      style={{
                        color: bgColorStatTitle(stat.stat.name as StatType),
                      }}
                    >
                      {title}
                    </div>
                  </div>
                  <div className="font-black text-[13px]">{stat.base_stat}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <SkeletonPage size="stats" iterate={3} />
        )}
      </div>
    );
  };

  return (
    <div className="w-full grid relative gap-[10px] mb-[10px] px-[10px] text-center">
      {pokemon ? (
        <div className="font-bold text-white">Stats</div>
      ) : (
        <SkeletonPage size="title" iterate={1} />
      )}

      <div>
        <div className="flex justify-between items-center w-full text-white gap-5">
          {generateStat(leftStats)}
          {generateStat(rightStats)}
        </div>

        <div className="w-full flex items-center mb-0">
          <div className="flex w-full gap-5">
            <div className="w-full"/> 

            <div className="flex justify-between items-center w-full text-white gap-5 pt-2">
              <div className="flex items-center mr-[-1px]">
                <div className="rounded-full w-[25px] h-[25px] text-[10px] font-bold flex items-center justify-center text-white bg-[#7195DC]">
                  <Image src={`/images/status-icon/${fetchStats("").icon}.png`} alt="" height={12} width={12} className="contrast-[2.5]"/>
                </div>
                <div className="text-xs font-black ml-[10px] text-[#7195DC] contrast-[2.5]">
                  {fetchStats("").title}
                </div>
              </div>
              <div className="font-black text-[13px]">{totalStat}</div>
            </div>
          </div>
        </div>

        {/* <HexagonPage status={pokemon?.stats}/> */}
        <HexagonPage status={transformedStats}/>
        {/* <HexagonPage status={{ stats: [
          { base_stat: 100, stat: { name: "hp" } },
          { base_stat: 80, stat: { name: "attack" } },
          { base_stat: 80, stat: { name: "defense" } },
          { base_stat: 20, stat: { name: "special-attack" } },
          { base_stat: 80, stat: { name: "special-defense" } },
          { base_stat: 80, stat: { name: "speed" } },
        ] }} /> */}
      </div>
    </div>
  );
};

export default PokemonStatusDetailPage;
