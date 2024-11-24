"use client";
import { motion, AnimatePresence } from "framer-motion";

export function Morph({ children }: { children: string | string[] }) {
  function generateKeys(text: string) {
    const charCount: { [key: string]: number } = {};
    return text.split("").map((char) => {
      if (!charCount[char]) {
        charCount[char] = 0;
      }
      const key = `${char}-${charCount[char]}`;
      charCount[char]++;
      return { char, key };
    });
  }

  const textToDisplay = generateKeys(children as string);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {textToDisplay.map(({ char, key }) => (
        <motion.span
          key={key}
          layoutId={key}
          className="inline-block text-inherit cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{
            scale: 1.2,
            color: "#60A5FA",
            transition: { duration: 0.2 },
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            bounce: 0.3,
            opacity: {
              duration: 0.35,
              type: "spring",
              bounce: 0,
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </AnimatePresence>
  );
}
