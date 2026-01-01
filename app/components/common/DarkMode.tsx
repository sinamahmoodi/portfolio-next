"use client"

import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function DarkMode() {
  const { lightMode, toggleLightMode } = useTheme();

  return (
    <button
      onClick={toggleLightMode}
   
      >

      <motion.div
        layout
        className="text-l sm:text-4xl"
        >
        {lightMode ? "☀️" : "🌙"}
      </motion.div>
    </button>
  );
}
