import Image from "next/image";
import customer from "@/assets/customer.png";
import { Section } from "./section";
import { Title } from "./title";
import { Button } from "./ui/button";

export function CustomerReview() {
  return (
    <Section>
      <div className="grid md:grid-cols-2  gap-4 md:gap-8">
        <div className="space-y-2 md:space-y-0">
          <figure className="relative h-[175px] md:h-[312px] w-full md:w-[605px]">
            <Image src={customer} alt="" fill className="object-contain" />
          </figure>
          <Title
            title="John Davis"
            subtitle="owner, Tangerine company"
            className="md:text-left capitalize"
          />
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-light leading-normal text-center md:text-left">
            <span className="font-semibold">
              “I have tried wix and the other do DIY companies...
            </span>{" "}
            Not worth the head aches !!! this company is unreal!! PRO PRO PRO
            customer service is unbelievable!! they make you feel like you are
            their only client!! keep it up.”
          </p>
          <Button className="w-full md:w-fit">get started</Button>
        </div>
      </div>
    </Section>
  );
}
