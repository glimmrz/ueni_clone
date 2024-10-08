"use client";

import { useLanguageSidebar } from "@/hooks/controllers";
import { Icon } from "../icon";
import { Container } from "../container";
import { useEffect, useRef } from "react";

export function LanguageSidebar() {
  const { isOpen, onClose } = useLanguageSidebar();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={sidebarRef}
      className={`bg-foreground flex items-center justify-center md:block fixed top-0 left-0 h-screen md:h-[60vh] transition-all duration-500 w-full -translate-y-full text-background text-2xl ${
        isOpen ? "translate-y-0" : ""
      }`}
    >
      <Container>
        <div className="mt-32 space-y-4">
          <div className="flex justify-between items-center max-w-60 min-w-60 relative group">
            <span className="group-hover:text-primary transition-colors duration-500">
              English
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <Icon icon="usa" size={28} />
          </div>
          <div className="flex justify-between items-center max-w-60 min-w-60 relative group">
            <span className="group-hover:text-primary transition-colors duration-500">
              Spanish
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <Icon icon="spain" size={28} />
          </div>
          <div className="flex justify-between items-center max-w-60 min-w-60 relative group">
            <span className="group-hover:text-primary transition-colors duration-500">
              Portugese
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <Icon icon="portugal" size={28} />
          </div>
          <div className="flex justify-between items-center max-w-60 min-w-60 relative group">
            <span className="group-hover:text-primary transition-colors duration-500">
              Bengali
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <Icon icon="bangladesh" size={28} />
          </div>
        </div>
      </Container>
    </aside>
  );
}
