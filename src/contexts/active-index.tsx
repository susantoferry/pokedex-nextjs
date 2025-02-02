"use client"

import { createContext, useContext, useState } from "react";

interface ActiveIndexContextProps {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const ActiveIndexContext = createContext<ActiveIndexContextProps | undefined>(undefined);

export const useActiveIndex = () => {
  const context = useContext(ActiveIndexContext);
  if (!context) {
    throw new Error("useActiveIndex must be used within an ActiveIndexProvider");
  }

  return context;
}

export const ActiveIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ActiveIndexContext.Provider value={{activeIndex, setActiveIndex}}>
      {children}
    </ActiveIndexContext.Provider>
  )
} 