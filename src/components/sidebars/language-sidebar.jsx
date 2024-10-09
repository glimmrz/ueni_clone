"use client";

import { useLanguageSidebar } from "@/hooks/controllers";
import { Icon } from "../icon";
import { Container } from "../container";
import { useEffect, useRef } from "react";

export function LanguageSidebar() {
  const { isOpen, onClose } = useLanguageSidebar();
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
    <aside
      ref={sidebarRef}
      className={`bg-foreground fixed top-0 left-0 h-screen md:h-[60vh] transition-all duration-500 w-full -translate-y-full text-background text-2xl ${
        isOpen ? "translate-y-0" : ""
      }`}
    >
      <Container>
        <div className="mt-32 space-y-4">
          {[
            { language: "English", icon: "usa" },
            { language: "Spanish", icon: "spain" },
            { language: "Portuguese", icon: "portugal" },
          ].map((item, index) => (
            <div
              onClick={onClose}
              key={index}
              className="flex justify-between items-center max-w-60 relative group"
            >
              <span className="group-hover:text-primary transition-colors duration-500">
                {item.language}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <Icon icon={item.icon} size={28} />
            </div>
          ))}
        </div>
      </Container>
    </aside>
  );
}
