"use client"

import React from "react";
import { useTheme } from "../ThemeContext";

export default function ModernWebCapabilities() {
  const { lightMode } = useTheme();

  const containerBg = lightMode ? "bg-zinc-300" : "bg-[#0d1117]";
  const cardBg = lightMode ? "bg-gray-500" : "bg-[#161B22]";
  const textMain = lightMode ? "text-black" : "text-zinc-100";
  const textSub = lightMode ? "text-gray-300" : "text-zinc-400";

  return (
    <div className={`min-h-[50vh] p-10 sm:p-20 ${containerBg}`} id="ModernWebCapabilities">
      <h1 className={`text-3xl font-bold text-center mb-16 ${textMain}`}>
        Modern Web Capabilities
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            icon: "🎮",
            title: "WebGL & 3D",
            items: ["Three.js", "WebGL Shaders", "Performance optimization"],
          },
          {
            icon: "📱",
            title: "Progressive Web Apps",
            items: ["Offline support", "Push notifications", "App-like experience"],
          },
          {
            icon: "⚡",
            title: "Real-time Features",
            items: ["WebSockets", "WebRTC", "Server-Sent Events"],
          },
          {
            icon: "🔧",
            title: "Browser APIs",
            items: ["File System Access", "Web Workers", "Service Workers"],
          },
          {
            icon: "🚀",
            title: "Performance",
            items: ["Code splitting", "Tree shaking", "Resource optimization"],
          },
          {
            icon: "🔒",
            title: "Security",
            items: ["CSP", "CORS configuration", "Security headers"],
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-[48%] lg:w-[30%] h-60 sm:h-64 lg:h-72 p-4 sm:p-6 rounded-2xl ${cardBg} ${textMain}`}
          >
            <span className="text-4xl block mb-3">{item.icon}</span>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            {item.items.map((text, i) => (
              <p key={i} className={textSub}>
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
