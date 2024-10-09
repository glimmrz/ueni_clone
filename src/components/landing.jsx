"use client";

import { useEffect, useState, useRef } from "react";
import { Heading } from "./heading";
import { Section } from "./section";
import Image from "next/image";
import bg from "@/assets/bg_static.png";

export function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const words = ["people", "businesses", "things"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src={bg}
        alt=""
        fill
        className="object-cover absolute h-full w-full z-[-1]"
      />

      <Section sectionStyles="mt-0 md:mt-0">
        <Heading className="text-center leading-snug md:leading-relaxed text-4xl lg:text-[74px] text-background">
          <span className="sr-only">
            We bring people and technology together to change{" "}
            {words[currentIndex]} for the better.
          </span>
          <span aria-hidden="true">
            We bring people and <br /> technology together to{" "}
            <br className="hidden md:block" />{" "}
            <span className="transition-transform duration-300">change</span>{" "}
            <br className="md:hidden" />
            <span className="inline-flex items-center justify-center">
              <span
                className={`text-foreground inline-block transition-all duration-1000 ease-in-out ${
                  isAnimating ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
                style={{ transformOrigin: "center" }}
              >
                {words[currentIndex]}
              </span>
            </span>
            <br />
            for the better.
          </span>
        </Heading>
      </Section>
    </div>
  );
}
