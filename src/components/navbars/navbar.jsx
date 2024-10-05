import { Background } from "../background";
import { Container } from "../container";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { NavbarLinks } from "./nav-links";

export function Navbar() {
  return (
    <nav>
      <Background>
        <Container>
          <div className="h-full flex items-center justify-between">
            <Logo />
            <NavbarLinks />

            <a href="tel:01873228724">
              <Button className="rounded-full border-muted-foreground">
                <Icon />
                <span>talk to an expert</span>
              </Button>
            </a>
          </div>
        </Container>
      </Background>
    </nav>
  );
}
