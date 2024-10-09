"use client";
import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { useLanguageSidebar, useMenuSidebar } from "@/hooks/controllers";
import { Hamburger } from "./hamburger";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useMenuSidebar();
  const lanSidebar = useLanguageSidebar();

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
        <div className="h-full grid grid-cols-3 items-center capitalize text-lg">
          {/* Menu-Language */}
          <div className="flex items-center gap-0 md:gap-8">
            {/* <MenuDropdown /> */}

            <Button
              type="button"
              variant="outline"
              className="min-w-fit gap-2 bg-transparent p-2"
              onClick={handleMenuSidebar}
            >
              <Hamburger isOpen={isOpen} />
              <span className="hidden md:block">
                {isOpen ? "close" : "Menu"}
              </span>
            </Button>

            {/* Lamguage */}
            {lanSidebar.isOpen && (
              <Button
                variant="outline"
                className="min-w-fit gap-2 bg-transparent p-2"
              >
                <Icon icon="close" size={26} />
                <span className="hidden md:block">English</span>
              </Button>
            )}

            {!lanSidebar.isOpen && (
              <Button
                onClick={lanSidebar.onOpen}
                variant="outline"
                className="min-w-fit gap-2 bg-transparent p-2"
              >
                <Icon icon="planet" size={26} />
                <span className="hidden md:block">English</span>
              </Button>
            )}
          </div>
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Login button */}
          <div className="flex items-center justify-end">
            <Link href="/auth">
              <Button
                variant="outline"
                className="bg-transparent px-2 md:px-8 text-base md:border-background gap-2 rounded-full min-w-fit "
              >
                <span>login</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
