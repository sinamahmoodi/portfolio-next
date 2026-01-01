"use client"

import React from "react";
import { motion } from "framer-motion";
import Projectcard from "../common/Projectcard";
import { useTheme } from "../ThemeContext";

function FeaturedProjects() {
  const { lightMode } = useTheme();

  return (
    <div
      id="Project"
      className={`py-10 px-4 ${
        lightMode ? "bg-white text-black" : "bg-[#161B22] text-zinc-50"
      }`}
    >
      <p className="text-center text-3xl font-bold mb-16">
        Featured Projects
      </p>

      <Projectcard
        Project="Nothing Shop"
        description="High-performance Progressive Web App"
        performance={98}
        Accessibility={100}
        SEO={100}
        Technicalfirst="Integration with Real APIs"
        Technicalsecond="Mock data"
        Technicalthird="Streaming SSR"
        Technicalfourth="IndexedDB"
      />

      <Projectcard
        Project="Weather Application"
        description="Build a React weather app that fetches real-time data, displays multi-day forecasts, and dynamically updates its theme"
        performance={98}
        Accessibility={90}
        SEO={100}
        Technicalfirst="Real Weather API Integration"
        Technicalsecond="Multi-Day Forecast"
        Technicalthird="Dynamic Weather-Based Theme"
        Technicalfourth="City Search"
      />
    </div>
  );
}

export default FeaturedProjects;
