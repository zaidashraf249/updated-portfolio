import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center sm:justify-end p-1">
      {mounted && (
        <button
          onClick={toggleTheme}
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     rounded-full p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4
                     hover:bg-gray-200 dark:hover:bg-gray-700 
                     transition-all duration-300 ease-in-out shadow-sm"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun size={20} className="sm:size-5 md:size-6" />
          ) : (
            <Moon size={20} className="sm:size-5 md:size-6" />
          )}
        </button>
      )}
    </div>
  );
}

export default ThemeToggle;
