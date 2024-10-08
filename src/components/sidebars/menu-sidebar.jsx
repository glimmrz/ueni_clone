"use client";

import { useMenuSidebar } from "@/hooks/controllers";
import { Container } from "../container";
import Link from "next/link";

export function MenuSidebar() {
  const { isOpen, onClose } = useMenuSidebar();

  return (
    <div
      className={`h-screen w-screen bg-foreground text-background fixed top-0 left-0 transition-[opacity,transform] duration-500 -translate-x-full md:translate-x-0 ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0"
      }`}
    >
      <Container>
        <div className="mt-32 flex flex-col space-y-4">
          {["WALTON vs others", "Features", "Examples", "FAQs"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="font-semibold text-2xl hover:text-primary relative w-fit group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
