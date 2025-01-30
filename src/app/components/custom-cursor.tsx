"use client";
import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";

interface CursorBackgroundProps {
  children?: ReactNode;
  className?: string;
}

interface Position {
  x: number;
  y: number;
}

const CursorBackground: React.FC<CursorBackgroundProps> = ({
  children,
  className,
  ...props
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setCurrentTheme(storedTheme || resolvedTheme || "light");
  }, [theme, resolvedTheme]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={`w-screen h-screen relative transition-colors bg-transparent ${className}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Cursor-Following Circle */}
      <motion.div
        className={`absolute rounded-full opacity-50 pointer-events-none ${
          currentTheme === "dark" ? "bg-[#75FAD6]" : "bg-yellow-500"
        }`}
        animate={{
          x: position.x - 40,
          y: position.y - 40,
          scale: 5, // Ukuran div menjadi lebih besar (spread)
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        style={{
          width: "70px", // Ukuran awal div
          height: "70px", // Ukuran awal div
          filter: "blur(45px)", // Efek blur
        }}
      />
      {/* Children Elements */}
      <div className="relative z-10 transition-colors">{children}</div>
    </div>
  );
};

export default CursorBackground;
