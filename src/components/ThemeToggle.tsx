"use client";

import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  const getThemeIcon = () => {
    switch (theme) {
      case "nord":
        return (
          <svg
            className="h-10 w-10 fill-blue-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.75)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
            <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
          </svg>
        );
      case "night":
        return (
          <svg
            className="h-10 w-10 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="transition-transform hover:scale-110 active:scale-95"
      title={`Current theme: ${theme}. Click to switch.`}
    >
      {getThemeIcon()}
    </button>
  );
};
