import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Icon } from "../icon";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-black text-background">
      <Container>
        <div className="h-full flex items-center justify-between capitalize text-lg">
          {/* Menu-Language */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Menu */}
            <Button
              variant="outline"
              className="min-w-fit gap-2 bg-transparent p-2"
            >
              <Icon icon="menu" size={20} />
              <span className="hidden md:block">Menu</span>
            </Button>

            {/* Language */}
            <Button
              variant="outline"
              className="min-w-fit gap-2 bg-transparent p-2"
            >
              <Icon icon="planet" />
              <span className="hidden md:block">english</span>
            </Button>
          </div>

          <Logo />

          {/* Call button */}
          <Link href="/auth">
            <Button
              variant="outline"
              className="bg-transparent border-background gap-2 rounded-full min-w-fit"
            >
              <span>login</span>
            </Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
