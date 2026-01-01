"use client"

import { useTheme } from "../ThemeContext";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}


const Button: React.FC<ButtonProps> = ({ children, href }) => {
    const { lightMode } = useTheme();

  const baseClasses =
    "relative inline-flex items-center justify-center " +
    "px-4 py-2 sm:px-6 sm:py-3 " +
    "m-2 sm:m-0"+
    "text-sm sm:text-base " +
    "rounded-full font-medium " +
    "border border-zinc-700 " +
    "transition-all duration-200";

  const content = (
    <span className="flex items-center gap-2">
      {children}
    </span>
  );


  if (href)
    return (
      <a href={href} className={`${baseClasses} , ${lightMode ? "hover:bg-zinc-400 hover:text-zinc-700 " : "hover:bg-zinc-700 hover:text-zinc-300"}`}>
        {content}
      </a>
    );

  return (
    <button className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;
