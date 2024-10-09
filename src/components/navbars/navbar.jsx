"use client";
import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { useLanguageSidebar, useMenuSidebar } from "@/hooks/controllers";
import { Hamburger } from "./hamburger";
import Image from "next/image";
import planet from "@/assets/planet.png";
import close from "@/assets/close.png";

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

  const handleLanguageSidebar = (e) => {
    e.stopPropagation();

    if (lanSidebar.isOpen) {
      lanSidebar.onClose();
    } else {
      lanSidebar.onOpen();
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

            {/* Language */}
            <Button
              onClick={handleLanguageSidebar}
              variant="outline"
              className="min-w-fit gap-2 bg-transparent p-2"
            >
              <div className="h-7 w-7 flex items-center overflow-hidden">
                <div
                  className={`transition-all duration-300 ${
                    lanSidebar.isOpen ? "-translate-x-7" : "translate-x-0"
                  }`}
                >
                  <figure className="h-7 w-7 relative">
                    <Image
                      src={planet}
                      alt=""
                      className="object-contain"
                      fill
                    />
                  </figure>
                </div>
                <div
                  className={`transition-all duration-300 ${
                    !lanSidebar.isOpen ? "translate-x-7" : "-translate-x-6"
                  }`}
                >
                  <figure className="h-7 w-7 relative">
                    <Image src={close} alt="" className="object-contain" fill />
                  </figure>
                </div>
              </div>
              <span className="hidden md:block">
                {lanSidebar.isOpen ? "close" : "English"}
              </span>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Login button */}
          <div className="flex items-center justify-end">
            <Link href="/auth">
              <Button
                variant="outline"
                className="bg-transparent px-2 md:px-8 text-lg md:text-base md:border-background gap-2 rounded-full min-w-fit "
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
