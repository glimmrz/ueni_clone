import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Icon } from "../icon";
import { Button } from "../ui/button";
import { MenuDropdown } from "../dropdowns/menu-dropdown";
import { LanguageDropdown } from "../dropdowns/language-dropdown";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-black text-background">
      <Container>
        <div className="h-full flex items-center justify-between capitalize text-lg">
          {/* Menu-Language */}
          <div className="flex items-center gap-4 md:gap-8">
            <MenuDropdown />
            <LanguageDropdown />
          </div>

          <Logo />

          {/* Login button */}
          <Link href="/auth">
            <Button
              variant="outline"
              className="bg-transparent px-2 md:px-8 text-base md:border-background gap-2 rounded-full min-w-fit "
            >
              <span>login</span>
            </Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
