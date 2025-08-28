"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TextRevealGsapProps {
  children: string;
  className?: string;
}

export const TextRevealGsap: FC<TextRevealGsapProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  if (typeof children !== "string") {
    throw new Error("TextRevealGsap: children must be a string");
  }

  useGSAP(() => {
    if (!textRef.current) return;

    // Split text into words
    const words = children.split(" ");
    
    // Clear and rebuild content with spans
    textRef.current.innerHTML = words
      .map((word) => `<span class="word-reveal inline-block mr-[0.3em] opacity-20">${word}</span>`)
      .join("");

    // Animate each word
    const wordElements = textRef.current.querySelectorAll(".word-reveal");
    
    gsap.fromTo(
      wordElements,
      {
        opacity: 0.2,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={`px-8 py-16 ${className || ''}`}>
      <div className="mx-auto max-w-4xl">
        <div 
          ref={textRef}
          className="text-xl md:text-2xl lg:text-3xl font-libre leading-loose text-brown" 
          style={{ textAlign: 'justify' }}
        />
      </div>
    </div>
  );
};