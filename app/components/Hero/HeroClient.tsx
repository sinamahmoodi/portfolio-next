"use client"
import React from "react";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import FloatingItem from "../common/FloatingItem";
import Button from "../common/buttonHero";
import { useTheme } from "../ThemeContext";
import DarkMode from "../common/DarkMode";

import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import ts from "../../assets/typescript.svg";
import next from "../../assets/next-js.svg";
import Image from "next/image";

const COLORS = {
  primaryBg: "#0D1117",
  secondaryBg: "#1A1F2B",
  accent: "blue-500",
};

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps & { lightMode: boolean }> = ({
  text,
  lightMode,
}) => (
  <span
    className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-sm font-medium border transition-colors ${
      lightMode
        ? "bg-gray-200 text-black border-gray-400 hover:border-blue-500/50"
        : "bg-[#1A1F2B] text-gray-300 border-[#2D333B] hover:border-blue-500/50"
    }`}
  >
    {text}
  </span>
);

const techs = [
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "Tailwind", url: "https://tailwindcss.com" },
  { name: "Git", url: "https://git-scm.com" },
];

const Hero: React.FC = () => {
  const { lightMode } = useTheme();

  return (
    <>
      <div
        className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${
          lightMode ? "bg-zinc-200 text-black" : "bg-[#0D1117] text-gray-200"
        }`}
      >
        <FloatingItem
          className="top-[9%] left-[10%] sm:top-[20%] sm:left-[20%]"
          yAnimate={[0, 20, 0]}
          rotateAnimate={[0, 15, -15, 0]}
          duration={4}
        >
          <Image src={react} alt="fire" className="w-9 h-9 md:w-20 md:h-20" />
        </FloatingItem>
        <FloatingItem
          className="top-[12%] left-[80%] sm:top-[20%] sm:left-[70%]"
          yAnimate={[0, -20, 0]}
          rotateAnimate={[0, -15, 15, 0]}
          duration={5}
        >
          <Image src={next} alt="fire" className="w-9 h-9 md:w-20 md:h-20"/>
        </FloatingItem>
        <FloatingItem
          className="top-[30%] left-[10%] sm:top-[50%] sm:left-[25%]"
          yAnimate={[0, 10, 0]}
          rotateAnimate={[0, 10, -10, 0]}
          duration={6}
        >
          <Image src={js} alt="fire" className="w-9 h-9 md:w-20 md:h-20" />
          
        </FloatingItem>
        <FloatingItem
          className="top-[30%] left-[20%] sm:top-[50%] left-[70%]"
          yAnimate={[0, -15, 0]}
          rotateAnimate={[0, -10, 10, 0]}
          duration={4.5}
        >
          <Image src={ts} alt="fire" className="w-9 h-9 md:w-20 md:h-20"/>
        </FloatingItem>

        <div className="relative mb-12 text-center">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40"></span>
          <p
            className={`text-center relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent pb-2"
          ${
            lightMode
              ? "bg-gray-900"
              : "bg-gradient-to-r from-white to-gray-300"
          }`}
          >
            Sina Mahmoodi
          </p>
          <div className="flex items-center justify-center mt-2 gap-3">
            <span
              className={`h-[1px] w-8 sm:w-12  ${
                lightMode ? "bg-gray-900" : "bg-blue-400"
              }`}
            ></span>
            <h2
              className={`text-xl sm:text-2xl font-light tracking-wide ${
                lightMode ? "text-gray-900" : "text-blue-400"
              }`}
            >
              Web Developer
            </h2>
            <span
              className={`h-[1px] w-8 sm:w-12  ${
                lightMode ? "bg-gray-900" : "bg-blue-400"
              }`}
            ></span>
          </div>
        </div>

        <p
          className={`text-center max-w-xl ${
            lightMode ? "text-gray-700" : "text-gray-400"
          }`}
        >
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {techs.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge text={tech.name} lightMode={lightMode} />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row mt-5 justify-center gap-3 sm:gap-4 sm:mt-8 px-4 sm:px-0">
          <Button href="#Project">
            <span className="flex items-center gap-2 ">
              View My Work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Button>
          <Button href="#ModernWebCapabilities">Get in Touch</Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 sm:mt-8 px-4 sm:px-0 text-3xl">
          <span className="p-4 text-xl sm:text-4xl">&#9749;</span>
          <span className="p-4 text-xl sm:text-4xl">&#128187;</span>
          <span className="p-4 text-xl sm:text-4xl">
            <DarkMode />
          </span>
          <span className="p-4 text-xl sm:text-4xl">&#128188;</span>
          <span className="p-4 text-xl sm:text-4xl">&#9997;</span>
        </div>

        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <motion.a
            href="#Technical"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <span
              className={`${lightMode ? "text-zinc-950" : "text-zinc-100"}`}
            >
              scroll to explore
            </span>
            <ArrowDown
              size={40}
              className={lightMode ? "text-black" : "text-zinc-200"}
            />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Hero;
