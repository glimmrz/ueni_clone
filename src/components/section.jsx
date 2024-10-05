import { cn } from "@/lib/utils";
import { Description } from "./description";
import { Heading } from "./heading";
import { Container } from "./container";

export function Section({ children, className, title, description }) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <div className="flex items-center justify-center">
          <hgroup className="max-w-3xl">
            <Heading className="text-center">{title}</Heading>
            <Description className="text-center">{description}</Description>
          </hgroup>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
