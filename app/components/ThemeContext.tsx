"use client"

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface ThemeContextType {
  lightMode: boolean;
  toggleLightMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => setLightMode(prev => !prev);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
    document.body.classList.toggle("dark", !lightMode);
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
