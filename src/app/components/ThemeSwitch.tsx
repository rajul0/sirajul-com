"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";

const storageKey = "theme-preference";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

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
    <button
      id="theme-toggle"
      aria-label={`Switch to ${
        currentTheme === "dark" ? "light" : "dark"
      } mode`}
      onClick={toggleTheme}
      className="transition-opacity duration-300 hover:opacity-90"
    >
      {currentTheme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};
