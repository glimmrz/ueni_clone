"use client";
import Link from "next/link";
import { useMenuSidebar } from "@/hooks/controllers";
import { Container } from "../container";
import { useEffect, useRef } from "react";

export function MenuSidebar() {
  const { isOpen, onClose } = useMenuSidebar();
  const sidebarRef = useRef(null);

  const handleClick = (event) => {
    if (isOpen && !sidebarRef?.current?.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (sidebarRef) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`h-screen w-screen bg-foreground text-background fixed top-0 left-0 transition-all duration-500 -translate-x-full md:translate-x-0 ${
        isOpen ? "opacity-100 !translate-x-0 z-10" : "opacity-0 z-[-10]"
      }`}
    >
      <Container>
        <div className="mt-32 flex flex-col space-y-4">
          {[
            { label: "WALTON vs others", slug: "#differences" },
            { label: "Features", slug: "#features" },
            { label: "Examples", slug: "examples" },
            { label: "FAQs", slug: "faq" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.slug}
              className="font-semibold text-2xl hover:text-primary relative w-fit group"
              onClick={onClose}
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
