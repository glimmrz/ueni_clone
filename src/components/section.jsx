import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Title } from "./title";

export function Section({ children, className, title, subtitle, id }) {
  return (
    <section className={cn("py-8", className)} id={id}>
      <Container>
        {title && (
          <div className="flex items-center justify-center">
            <Title title={title} subtitle={subtitle} />
          </div>
        )}
        <div className="mt-6 md:mt-8">{children}</div>
      </Container>
    </section>
  );
}
