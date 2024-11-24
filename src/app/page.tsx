"use client";

import { useState, useEffect } from "react";
import { Morph } from "./components/text-morph";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("Compile");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setText((prev) => (prev === "Compile" ? "Code" : "Compile"));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto p-8">
        {/* Top Text */}
        <motion.div
          className="text-white text-6xl font-medium text-center mb-32 cursor-pointer"
          onClick={() => {
            setText((prev) => (prev === "Compile" ? "Code" : "Compile"));
            setIsAutoPlay(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Morph>{text}</Morph>
        </motion.div>

        {/* Bottom Section with enhanced animations */}
        <motion.div
          className="grid grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Initial Section */}
          <div className="space-y-4">
            <p className="text-gray-400">Initial</p>
            <motion.div
              className="bg-zinc-900 rounded-lg p-4"
              whileHover={{
                backgroundColor: "#27272A",
                transition: { duration: 0.2 },
              }}
            >
              <p className="text-white text-xl">
                <Morph>Compile</Morph>
              </p>
            </motion.div>
          </div>

          {/* Final Section */}
          <div className="space-y-4">
            <p className="text-gray-400">Final</p>
            <motion.div
              className="bg-zinc-900 rounded-lg p-4"
              whileHover={{
                backgroundColor: "#27272A",
                transition: { duration: 0.2 },
              }}
            >
              <p className="text-white text-xl">
                <Morph>Code</Morph>
              </p>
            </motion.div>
          </div>
        </motion.div> 
      </div>
    </div>
  );
}
