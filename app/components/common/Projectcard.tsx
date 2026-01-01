"use client"

import bg from "../../assets/bgg.jpg";
import { useTheme } from "../ThemeContext";

type ProjectCardProps = {
  Project: string;
  description: string;
  performance: number;
  Accessibility: number;
  SEO: number;
  Technicalfirst: string;
  Technicalsecond: string;
  Technicalthird: string;
  Technicalfourth: string;
};

export default function ProjectCard({
  Project,
  description,
  performance,
  Accessibility,
  SEO,
  Technicalfirst,
  Technicalsecond,
  Technicalthird,
  Technicalfourth,
}: ProjectCardProps) {
  const { lightMode } = useTheme();

  const cardBg = lightMode ? "bg-white" : "bg-[#0D1117]";
  const textMain = lightMode ? "text-black" : "text-white";
  const textSub = lightMode ? "text-gray-600" : "text-zinc-400";
  const borderColor = lightMode ? "border-gray-300" : "border-zinc-800";

  return (
    <div
      className={`relative max-w-4xl mx-auto rounded-2xl shadow-lg border ${borderColor} overflow-hidden m-10 ${cardBg}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          lightMode
          ?"bg-gradient-to-l from-transparent via-zinc-100/10 to-zinc-100 "
          :"bg-gradient-to-l from-transparent via-[#0D1117]/90 to-[#0D1117]"
          
        }`}
      />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
        <h2 className={`text-2xl font-semibold mb-2 ${textMain}`}>
          {Project}
        </h2>

        <p className={`${textSub} mb-6`}>{description}</p>

        <div className="grid grid-cols-3 text-center mb-6">
          <div>
            <p className="text-3xl font-bold text-blue-500">{performance}</p>
            <p className={textSub}>Performance</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">{Accessibility}</p>
            <p className={textSub}>Accessibility</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-500">{SEO}</p>
            <p className={textSub}>SEO</p>
          </div>
        </div>

        <h3 className={`text-xl font-semibold mb-2 ${textMain}`}>
          Technical Implementation
        </h3>

        <ul className={`space-y-2 ${textSub}`}>
          {[Technicalfirst, Technicalsecond, Technicalthird, Technicalfourth].map(
            (item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">▸</span>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
