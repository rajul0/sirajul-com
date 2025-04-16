"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface CustomCursorProps {
  children?: ReactNode;
  className?: string;
}

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children, className }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setCurrentTheme(storedTheme || resolvedTheme || "light");
  }, [theme, resolvedTheme]);

  // Update mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor-Following Circle */}
      <motion.div
        className={`fixed top-0 left-0 z-1 pointer-events-none rounded-full opacity-50 ${
          currentTheme === "dark" ? "bg-[#75FAD6]" : "bg-yellow-500"
        }`}
        animate={{
          x: position.x - 35,
          y: position.y - 35,
          scale: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        style={{
          width: "70px",
          height: "70px",
          filter: "blur(45px)",
        }}
      />

      {/* Page Content */}
      <div className={`relative w-screen ${className}`}>{children}</div>
    </>
  );
};

export default CustomCursor;
