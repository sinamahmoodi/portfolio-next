"use client"

import React from "react";
import { useTheme } from "../ThemeContext";
import SkillCard from "../common/SkillCard";

function TechnicalExpertise() {
  const { lightMode } = useTheme();

  const sectionBg = lightMode ? "bg-white" : "bg-[#161B22]";
  const cardBg = lightMode ? "bg-gray-300" : "bg-[#21262D]";
  const titleColor = lightMode ? "text-black" : "text-zinc-100";

  return (
    <div className={`py-10 sm:py-20 ${sectionBg}`} id="Technical">
      <p className={`text-center text-3xl font-bold mb-10 ${titleColor}`}>
        Technical Expertise
      </p>

      <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4 ${lightMode ? "text-zinc-900" : "text-zinc-100"}`}>
        {/* Card 1 */}
        <div className={`${cardBg} rounded-lg p-6 w-full sm:w-[48%] lg:w-[30%]`}>
          <p className="text-2xl font-bold text-center mb-4">
            🚀 Frontend Development
          </p>
          <SkillCard title="JavaScript" value={95} color="#3B82F6" />
          <SkillCard title="React & NextJS" value={93} color="#3B82F6" />
          <SkillCard title="TypeScript" value={89} color="#3B82F6" />
        </div>

        {/* Card 2 */}
        <div className={`${cardBg} rounded-lg p-6 w-full sm:w-[48%] lg:w-[30%]`}>
          <p className="text-2xl font-bold text-center mb-4">
            🎨 CSS & UI
          </p>
          <SkillCard title="Tailwind CSS" value={95} color="#22C55E" />
          <SkillCard title="Bootstrap" value={100} color="#22C55E" />
          <SkillCard title="Chakra UI" value={75} color="#22C55E" />
        </div>

        {/* Card 3 */}
        <div className={`${cardBg} rounded-lg p-6 w-full sm:w-[48%] lg:w-[30%]`}>
          <p className="text-2xl font-bold text-center mb-4 ">
            ⚡ Performance & DevOps
          </p>
          <SkillCard title="Git" value={85} color="#A855F7" />
          <SkillCard title="Web Performance" value={92} color="#A855F7" />
          <SkillCard title="Docker" value={75} color="#A855F7" />
        </div>
      </div>
    </div>
  );
}

export default TechnicalExpertise;
