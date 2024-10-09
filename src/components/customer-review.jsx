import Image from "next/image";
import { Section } from "./section";
import { Title } from "./title";
import { Button } from "./ui/button";

export function CustomerReview({ review }) {
  return (
    <Section>
      <div className="grid md:grid-cols-2  gap-4 md:gap-8">
        <div className="space-y-2 md:space-y-0">
          <figure className="relative h-[175px] md:h-[312px] w-full md:w-[605px]">
            <Image src={review?.image} alt="" fill className="object-contain" />
          </figure>
          <Title
            title={review?.customerName}
            subtitle={review?.customerPosition}
            className="md:text-left capitalize"
          />
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-light leading-normal text-center md:text-left">
            {review?.review}
          </p>
          <Button className="w-full md:w-fit">get started</Button>
        </div>
      </div>
    </Section>
  );
}
