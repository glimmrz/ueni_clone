import { Section } from "../section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ExampleCard } from "./example-card";

export function Examples() {
  return (
    <Section
      id="examples"
      title="Get the website of your dreams in a week"
      description="We build websites for more than 1000 categories — from local business to ecommerce"
    >
      <Carousel>
        <CarouselContent className="gap-4">
          <CarouselItem className="md:basis-1/2">
            <ExampleCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ExampleCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ExampleCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ExampleCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </Section>
  );
}
