"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DARK, LIGHT, Theme } from "@/lib/theme";

interface ThemeCtx {
  dark: boolean;
  setDark: (v: boolean | ((prev: boolean) => boolean)) => void;
  t: Theme;
}

const Ctx = createContext<ThemeCtx>({ dark: true, setDark: () => {}, t: DARK });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return (
    <Ctx.Provider value={{ dark, setDark, t: dark ? DARK : LIGHT }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
