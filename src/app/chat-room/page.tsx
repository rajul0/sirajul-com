"use client";

import { motion } from "framer-motion";

export default function ChatRoom() {
  return (
    <div className="flex min-h-screen items-center justify-center  px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-center space-y-4 p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          🚧 Under Development "Chat Room Page"
        </h1>
        <p className="text-sm justify-self-center max-w-lg text-gray-600 dark:text-gray-300 ">
          Halaman ini sedang dalam tahap pengembangan. Silakan kembali lagi
          nanti. Kami sedang menyiapkan sesuatu yang keren! ✨
        </p>
      </motion.div>
    </div>
  );
}
