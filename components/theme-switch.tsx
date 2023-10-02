"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const ctx = useTheme();

  return (
    <button
      className="flex items-center justify-center fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] backdrop-blur-[0.5rem] bg-opacity-80 border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={ctx?.toggleTheme}
    >
      {ctx?.theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
