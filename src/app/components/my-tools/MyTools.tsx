"use client";

import React from "react";

const cards = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Card ${i + 1}`,
}));

export default function MyTools() {
  return (
    <div className="w-full bg-transparent py-10 space-y-6 overflow-hidden">
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 whitespace-nowrap animate-scroll-seamless"
            style={{
              animationDuration: `${20 - rowIndex * 3}s`,
              animationDirection: rowIndex % 2 === 0 ? "reverse" : "normal",
            }}
          >
            {[...cards, ...cards].map((card, i) => (
              <div
                key={`${rowIndex}-${i}`}
                className="min-w-[200px] h-32 bg-white rounded-lg flex items-center justify-center text-black shadow-md"
              >
                {card.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
