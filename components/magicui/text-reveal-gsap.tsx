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
    if (!textRef.current || !containerRef.current) return;

    // Split text into words and preserve spacing
    const words = children.split(" ");
    
    // Clear and rebuild content with spans - preserve spaces between words
    textRef.current.innerHTML = words
      .map((word, index) => {
        // Add space after each word except the last one
        const space = index < words.length - 1 ? " " : "";
        return `<span class="word-reveal inline-block opacity-0">${word}</span>${space}`;
      })
      .join("");

    // Animate each word
    const wordElements = textRef.current.querySelectorAll(".word-reveal");
    
    // Find the scroll container (the spiritual journey scroll container)
    const scrollContainer = containerRef.current?.closest('.overflow-y-auto') || undefined;
    
    // Create timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: scrollContainer,
        start: "top 80%",  // Start when element is 80% from top
        end: "bottom 20%", // End when bottom is 20% from top
        scrub: 1,          // Smooth scrubbing
        markers: false,
        invalidateOnRefresh: true,
      }
    });

    // Animate words with stagger
    tl.to(wordElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        each: 0.02, // Time between each word
        from: "start"
      },
      ease: "power1.out"
    });

    // Set initial state
    gsap.set(wordElements, {
      opacity: 0,
      y: 10
    });

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={`px-8 py-16 flex items-center ${className || ''}`}>
      <div className="mx-auto max-w-4xl">
        <p 
          ref={textRef}
          className="text-xl md:text-2xl lg:text-3xl font-libre leading-relaxed text-brown"
          style={{ textAlign: 'justify', wordSpacing: '0.1em' }}
        />
      </div>
    </div>
  );
};