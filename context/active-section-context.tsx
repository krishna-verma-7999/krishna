"use client";

import { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";
// type specifies that we are just importing type...

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  //   we need to keep track of this to disable the observer temporarily when user clicks on links.

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// custom hook always start with use keyword
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "use ActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
