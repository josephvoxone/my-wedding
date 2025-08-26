"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.1"]
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-[100vh] ${className || ''}`}>
      <div className="sticky top-0 mx-auto flex h-[60vh] items-center justify-center bg-transparent px-8 pt-20">
        <span
          className="flex flex-wrap justify-center max-w-4xl text-xl md:text-2xl lg:text-3xl font-libre leading-loose text-brown-soft/20"
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