"use client";
import { useState, useEffect } from "react";
import { Morph } from "./components/text-morph";

export default function Home() {
  const [text, setText] = useState("Compile");

  useEffect(() => {
    // Switch text every 3 seconds
    const interval = setInterval(() => {
      setText((prev) => (prev === "Compile" ? "Code" : "Compile"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto p-8">
        {/* Top Text */}
        <div className="text-white text-6xl font-medium text-center mb-32">
          <Morph>{text}</Morph>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Initial Section */}
          <div className="space-y-4">
            <p className="text-gray-400">Initial</p>
            <div className="bg-zinc-900 rounded-lg p-4">
              <p className="text-white text-xl">
                <Morph>Compile</Morph>
              </p>
            </div>
          </div>

          {/* Final Section */}
          <div className="space-y-4">
            <p className="text-gray-400">Final</p>
            <div className="bg-zinc-900 rounded-lg p-4">
              <p className="text-white text-xl">
                <Morph>Code</Morph>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
