import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-black text-background">
      <Container>
        <div className="h-full flex items-center justify-between capitalize">
          <Logo />

          <Link
            className="hover:text-primary transition-colors duration-300 hidden md:block"
            href="#"
          >
            WALTON vs others
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            features
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-300"
            href="#"
          >
            examples
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-300 hidden md:block"
            href="#"
          >
            FAQs
          </Link>
        </div>
      </Container>
    </nav>
  );
}
