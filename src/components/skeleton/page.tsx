import React from "react";

interface SkeletonProps {
  size: string;
  iterate: number;
}

const SkeletonPage = ({ size, iterate }: SkeletonProps) => {
  const getWidth = () => {
    let width = "150px";
    let height = "80px";

    switch (size) {
      case "title":
        width = "150px";
        height = "20px";
        break;
      case "sm-box":
        width = "150px";
        break;
      case "md-box":
        width = "215px";
        break;
      case "stats":
        width = "100%";
        height = "20px";
        break;
      default:
        width = width;
        height = height;
    }
    return { width, height };
  };

  const {width, height} = getWidth();

  return (

    <div className="relative mx-auto">
      {Array.from({ length: iterate }).map((_, index) => (
        <div
          className={`flex overflow-hidden justify-center items-center relative 
            rounded-lg bg-[#112d3e57] backdrop-blur-[10px] backdrop-saturate-[150%] 
            w-[${width}] h-[${height}]
            shadow-[rgb(0_183_255/_44%)_0px_2px_10px] border-[1px_solid_rgb(180_180_180/_30%)] mb-2`}
          key={index}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 transform -translate-x-full z-10 bg-[linear-gradient(90deg,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.4)_50%,_rgba(255,_255,_255,_0)_100%)] animate-skeleton" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonPage;
