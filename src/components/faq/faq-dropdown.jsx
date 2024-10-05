"use client";
import { useState } from "react";
import { Icon } from "../icon";

export function FaqDropodown({ faq }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="overflow-hidden">
      <div
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-colors duration-300 select-none cursor-pointer rounded-md ${
          isOpen && "bg-accent"
        }`}
      >
        <div className="grid grid-cols-[3fr,.2fr] md:flex md:justify-between items-center  gap-2 cursor-pointer p-4">
          <h3 className="text-lg md:text-xl font-normal">{faq.question}</h3>
          <Icon icon={!isOpen ? "chevronDown" : "chevronUp"} size={24} />
        </div>
      </div>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${
          isOpen && "max-h-[500px]"
        }`}
      >
        <div className="p-2">
          <p>{faq?.answer}</p>
        </div>
      </div>
    </div>
  );
}
