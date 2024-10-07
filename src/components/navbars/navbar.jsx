import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { MenuDropdown } from "../dropdowns/menu-dropdown";
import { LanguageDropdown } from "../dropdowns/language-dropdown";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-foreground text-background">
      <Container>
        <div className="h-full grid grid-cols-3 items-center capitalize text-lg">
          {/* Menu-Language */}
          <div className="flex items-center gap-0 md:gap-8">
            <MenuDropdown />
            <LanguageDropdown />
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
