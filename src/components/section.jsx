import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Container } from "./container";

export function Section({ children, className, title, description, id }) {
  return (
    <section className={cn("py-8", className)} id={id}>
      <Container>
        {title && (
          <div className="flex items-center justify-center">
            <hgroup className="max-w-[890px] w-full">
              <Heading className="text-center">{title}</Heading>
            </hgroup>
          </div>
        )}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
