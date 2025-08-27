"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

export interface TextRevealJustifiedProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  className?: string;
}

export const TextRevealJustified: FC<TextRevealJustifiedProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextRevealJustified: children must be a string");
  }

  const words = children.split(" ");
  
  // Calculate dynamic height based on word count
  const wordCount = words.length;
  let heightClass = "h-[100vh]"; // default for short text
  
  if (wordCount > 150) {
    heightClass = "h-[150vh]"; // long text
  } else if (wordCount > 100) {
    heightClass = "h-[130vh]"; // medium-long text  
  } else if (wordCount > 60) {
    heightClass = "h-[110vh]"; // medium text
  }

  return (
    <div ref={targetRef} className={`relative z-0 ${heightClass} ${className || ''}`}>
      <div className="sticky top-0 mx-auto flex h-[60%] items-center justify-center bg-transparent px-8 py-10">
        <span
          className="flex flex-wrap text-justify max-w-4xl text-xl md:text-2xl lg:text-3xl font-libre leading-loose text-brown-soft/20"
          style={{ textAlign: 'justify' }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-15">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-brown font-medium"
      >
        {children}
      </motion.span>
    </span>
  );
};