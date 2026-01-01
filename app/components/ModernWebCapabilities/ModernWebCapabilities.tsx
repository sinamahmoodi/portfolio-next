import React from "react";
import { useTheme } from "../ThemeContext";
import ModernWebCapabilities from "./ModernWebCapabilitiesClient";


export default function ModernWebCapabilitiesC() {
  const { lightMode } = useTheme();

  const containerBg = lightMode ? "bg-zinc-300" : "bg-[#0d1117]";
  const cardBg = lightMode ? "bg-gray-500" : "bg-[#161B22]";
  const textMain = lightMode ? "text-black" : "text-zinc-100";
  const textSub = lightMode ? "text-gray-300" : "text-zinc-400";

  return (
    <ModernWebCapabilities/>
  );
}
