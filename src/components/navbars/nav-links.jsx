import { Button } from "../ui/button";

export function NavbarLinks() {
  return (
    <div className="flex items-center gap-6 border border-muted-foreground rounded-full p-2">
      <Button className="rounded-full bg-transparent hover:bg-primary">
        examples
      </Button>
      <Button className="hidden md:flex rounded-full bg-transparent hover:bg-primary">
        UENI vs others
      </Button>
      <Button className="rounded-full bg-transparent hover:bg-primary">
        pricing
      </Button>
      <Button className="hidden md:flex rounded-full bg-transparent hover:bg-primary">
        questions?
      </Button>
    </div>
  );
}
