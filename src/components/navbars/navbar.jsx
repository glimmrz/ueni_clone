import { Background } from "../background";
import { Container } from "../container";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { NavbarLinks } from "./nav-links";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-[#000000]">
      <Container>
        <div className="h-full flex items-center justify-between">
          <Logo />
          <NavbarLinks />

          <a href="tel:01873228724" className="hidden md:flex">
            <Button className="rounded-full border-muted-foreground gap-2">
              <Icon icon="call" />
              <span>talk to an expert</span>
            </Button>
          </a>
        </div>
      </Container>
    </nav>
  );
}
