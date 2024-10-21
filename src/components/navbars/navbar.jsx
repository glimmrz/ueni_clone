"use client";
import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { useMenuSidebar } from "@/hooks/controllers";
import { Hamburger } from "./hamburger";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useMenuSidebar();

  const handleMenuSidebar = (e) => {
    e.stopPropagation();

    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-foreground text-background">
      <Container>
        <div className="h-full flex justify-between items-center capitalize text-lg">
          <Logo />

          {/* Login button */}
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="outline"
              className="min-w-fit gap-2 bg-transparent p-2"
              onClick={handleMenuSidebar}
            >
              <Hamburger isOpen={isOpen} />
              <span className="hidden md:block">
                {isOpen ? "close" : "Menu"}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
