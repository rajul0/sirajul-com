"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const storageKey = "theme-preference";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [toggled, setToggled] = useState(false);

  React.useEffect(() => {
    // Set state mounted to true after hydration to ensure client-xonly behavior
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme || "light"; // Determine the current theme

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme); // Optional: Save preference
    setTheme(newTheme);
  };

  // Prevent rendering toggle button on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {/* Peek Button */}
      <motion.button
        className="relative px-4 py-4 dark:bg-black/30 bg-white/10  text-white font-semibold rounded-lg shadow-lg overflow-hidden"
        onClick={() => {
          setToggled(!toggled);
          toggleTheme();
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: toggled ? [-30, 0] : [-30, -30, 0] }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 0.2,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {currentTheme === "dark" ? (
            <FiSun />
          ) : (
            <FiMoon className="stroke-black" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};
