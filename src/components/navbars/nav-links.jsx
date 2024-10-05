import Link from "next/link";
import { Button } from "../ui/button";

export function NavbarLinks() {
  return (
    <div className="flex items-center gap-2 md:gap-6 border border-muted-foreground rounded-full p-2">
      <Link href="#examples">
        <Button className="rounded-full bg-transparent hover:bg-primary">
          examples
        </Button>
      </Link>
      <Link href="#differences">
        <Button className="hidden md:flex rounded-full bg-transparent hover:bg-primary">
          WALTON vs others
        </Button>
      </Link>
      <Link href="#pricing">
        <Button className="rounded-full bg-transparent hover:bg-primary">
          pricing
        </Button>
      </Link>
      <Link href="#faq">
        <Button className="hidden md:flex rounded-full bg-transparent hover:bg-primary">
          questions?
        </Button>
      </Link>
    </div>
  );
}
