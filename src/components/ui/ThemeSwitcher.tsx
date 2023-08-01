"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from ".";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();


  return (
    <div className="flex items-center gap-2">
      <SunIcon />
      <div
        className="w-12 h-5 p-[2px] bg-white rounded-xl cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div
          className={`w-4 h-4 rounded-full bg-violet self-start ${
            theme == "light" ? "animate-move-left" : "moveRight"
          }`}
        />
      </div>
      <MoonIcon />
    </div>
  );
};
