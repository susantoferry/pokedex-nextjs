import React from "react";
import { Status } from "@/models/pokemon";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { adjustingRadarCoordinate } from "@/utils/function";
import { fetchStats } from "@/constants/stat";

interface StatData {
  subject: {icon: string; title: string};
  value: number;
  fullMark: number;
}

const HexagonPage = ({ status }: { status: Status[] }) => {

  const transformedData: StatData[] = status.map((stat: Status) => ({
    subject: fetchStats(stat.type_stat),
    value: stat.base_stat,
    fullMark: 2000,
  }));

  return (
    <div className="w-full grid relative gap-[10px] mb-[10px] px-[10px]">
      <div className="relative w-[200px] h-[200px] block mx-auto z-10">
        <div className="absolute w-full h-full flex items-center justify-center z-[-1]">
          <div className="hexagon w-[35px] h-10 bg-[#698edc] transform translate-y-[25px] z-40" />
          <div className="hexagon w-[68px] h-[75px] bg-[#8dbef5] transform translate-y-[25px] z-30" />
          <div className="hexagon w-[95px] h-[110px] bg-[#a9d1ff] transform translate-y-[25px] z-20" />
          <div className="hexagon w-[125px] h-[140px] bg-[#c6e4ff] transform translate-y-[25px] z-10" />

          {/* Circle */}
          <div className="bg-[#c6e4ff] w-[160px] h-[160px] rounded-full absolute opacity-30 blur-[10px] transform translate-y-[25px]" />
        </div>

        <div className="relative w-full h-full">
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart
              data={transformedData}
              margin={{ top: 10, right: 14, bottom: 10, left: 10 }}
            >
              <defs>
                <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff4d4d" stopOpacity={1} />
                  <stop offset="50%" stopColor="#ff4d4d" stopOpacity={0.75} />
                  <stop offset="100%" stopColor="#ff4d4d" stopOpacity={1} />
                </linearGradient>
              </defs>
              <PolarGrid stroke="#fff" strokeOpacity={1} strokeWidth={2} />
              <PolarAngleAxis
                dataKey="subject.title"
                stroke="#fff"
                strokeWidth={3}
                tick={({ payload, x, y, textAnchor, ...rest }) => {
                  const { adjustedX, adjustedY } = adjustingRadarCoordinate(
                    payload.value,
                    x,
                    y
                  );
                  return (
                    <text
                      {...rest}
                      x={adjustedX}
                      y={adjustedY}
                      textAnchor={textAnchor}
                      fill="#ffffff"
                      fontSize={12}
                      fontWeight="700"
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <PolarRadiusAxis
                domain={[0, 110]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name="base_stat"
                dataKey="value"
                stroke="#ff4d4d"
                strokeOpacity={0.3}
                fill="url(#gradientFill)"
                fillOpacity={1}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HexagonPage;