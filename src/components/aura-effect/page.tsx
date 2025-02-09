"use client"

import { useState, useEffect } from "react";

const AuraEffect = () => {
  const [auras, setAuras] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const createAura = () => {
      const id = Date.now();
      const newAura = {
        id,
        left: Math.random() * 145, // Random horizontal position
        duration: Math.random() * 5 + 3, // Random duration between 3s and 8s
        delay: Math.random() * 1, // Random delay between 0s and 1.2s
      };

      setAuras((prev) => [...prev, newAura]);

      // Remove aura after animation ends
      setTimeout(() => {
        setAuras((prev) => prev.filter((aura) => aura.id !== id));
      }, (newAura.duration + newAura.delay) * 1000);
    };

    // Interval to create auras every 700ms
    const interval = setInterval(createAura, 500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-[160px] absolute h-[190px] inset-0 overflow-hidden mx-auto px-5">
      {auras.map((aura) => (
        <div
          key={aura.id}
          className="absolute w-4 h-4 bg-cyan-300 rounded-full"
          style={{
            left: aura.left,
            bottom: "-100px",
            animation: `auraFloat ${aura.duration}s ease-in-out ${aura.delay}s forwards`,
            background: "radial-gradient(circle, rgba(3, 255, 255, 1), rgba(3, 255, 255, 0.6), rgba(3, 255, 255, 0.4), transparent 100%)",
            boxShadow: "0 0 15px 1px rgba(109, 255, 255, 0.6), 0 0 45px 3px rgba(109, 255, 255, 0.2)",
          }}
        />
      ))}
    </div>
  );
};

export default AuraEffect;
