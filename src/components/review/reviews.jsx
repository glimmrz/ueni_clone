import Image from "next/image";
import pilot from "@/assets/pilot.png";
import { Heading } from "../heading";
import { Section } from "../section";
import { Slider } from "../slider";
import { CarouselItem } from "../ui/carousel";
import { ReviewCard } from "./review-card";

export function Reviews() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[3fr,1fr] gap-4 md:gap-2 items-center mb-8 lg:mb-4">
        <Heading className="text-center lg:text-left text-4xl leading-normal md:leading-none md:text-[54px]">
          Trusted by more than 700,000 business owners since 2014
        </Heading>
        <figure className="relative h-20">
          <Image src={pilot} alt="trustpilot" fill className="object-contain" />
        </figure>
      </div>

      <Slider>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ReviewCard />
        </CarouselItem>
      </Slider>
    </Section>
  );
}
