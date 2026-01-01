"use client"

import React from "react";
import { useTheme } from "../ThemeContext";
import linkdin from "../../assets/linkdin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
// import resume from "../../assets/Sin";

const ContactSectionClient = () => {
  const { lightMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-20 flex flex-col items-center px-4 sm:px-0 transition-colors
        ${lightMode ? "bg-white text-black" : "bg-[#161B22] text-white"}`}
    >
      <h2 className="text-3xl font-bold mb-3 text-center">
        Let's Build Something Amazing
      </h2>

      <p
        className={`text-center mb-4 max-w-xl ${
          lightMode ? "text-gray-700" : "text-zinc-400"
        }`}
      >
        Looking for a developer who can create high-performance, interactive web
        experiences?
      </p>

      <div className="flex items-center gap-2 mb-10">
        <span>📍</span>
        <p className={lightMode ? "text-gray-700" : "text-zinc-400"}>
          IRAN TEHRAN
        </p>
      </div>

      {/* FORM */}
      <form className="w-full max-w-xl flex flex-col gap-4 sm:gap-6">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            className={`w-full p-2 sm:p-3 rounded-md outline-none border 
            ${lightMode
              ? "bg-white border-gray-300 text-black"
              : "bg-[#161B22] border-[#2A2F35] text-white"}`}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className={`w-full p-2 sm:p-3 rounded-md outline-none border 
            ${lightMode
              ? "bg-white border-gray-300 text-black"
              : "bg-[#161B22] border-[#2A2F35] text-white"}`}
            placeholder="Your email address"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows={5}
            className={`w-full p-2 sm:p-3 rounded-md outline-none border 
            ${lightMode
              ? "bg-white border-gray-300 text-black"
              : "bg-[#161B22] border-[#2A2F35] text-white"}`}
            placeholder="Tell me about your project…"
          />
        </div>

        <button
          className="w-full py-2 sm:py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Resume */}
      {/* <a
        href={resume}
        download
        className={`mt-6 sm:mt-8 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md transition 
          ${lightMode ? "bg-gray-400 text-black" : "bg-[#161B22] text-white"}`}
      >
        📄 <span>View Resume</span>
      </a>

      <div className="flex gap-6 sm:gap-10 mt-10">
        {[linkdin, github, twitter].map((icon, i) => (
          <img
            key={i}
            src={icon}
            className={`w-6 h-6 cursor-pointer transition ${
              lightMode ? "opacity-80 hover:opacity-100" : "opacity-90"}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ContactSectionClient;
