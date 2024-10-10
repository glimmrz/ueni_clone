import Link from "next/link";
import Image from "next/image";
import trustpilot from "@/assets/trustpilot.png";
import trustpilot_rev from "@/assets/trustpilot_rev.png";
import { Background } from "../background";
import { Heading } from "../heading";
import { Checkbox } from "../checkbox";
import { Button } from "../ui/button";
import { HeroPromo } from "./hero-promo";
import { Section } from "../section";

const checkboxData = [
  {
    icon: "check",
    label: "domain",
  },
  {
    icon: "check",
    label: "hosting",
  },
  {
    icon: "check",
    label: "email",
  },
  {
    icon: "check",
    label: "0% transaction fees",
  },
];

export function Hero() {
  return (
    <Background>
      <div className="min-h-screen text-background">
        <Section className="py-4">
          <div className="flex flex-col items-center justify-center gap-8">
            <figure className="relative h-[22px] w-full md:w-[360px] hidden md:block">
              <Image
                src={trustpilot}
                alt="trustpilot image"
                fill
                className="object-contain"
              />
            </figure>

            <Heading className="text-center">
              Get a website built for you in 7 days
            </Heading>

            <div className="flex items-center justify-center md:justify-start flex-row gap-2 flex-wrap md:flex-nowrap md:gap-4">
              {checkboxData?.map((data, index) => (
                <Checkbox key={index} data={data} />
              ))}
            </div>

            <div className="flex gap-8 w-full md:w-fit">
              <Link href="#" passHref className="w-full">
                <Button className="w-full md:w-fit">get started</Button>
              </Link>
              <Button
                variant="outline"
                className="bg-transparent text-background border-background hover:bg-background hover:text-foreground hidden md:inline-flex"
              >
                What&apos;s included
              </Button>
            </div>

            <div className="flex items-center flex-col md:flex-row md:gap-4">
              <div>
                <span className="text-[46px]">£499</span>
                <span className="text-2xl">+VAT </span>
              </div>
              <span className="text-center md:text-left">
                one-time fee & then £12.99/mo <br /> to run your website
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <figure className="relative h-[22px] w-full block md:hidden">
                <Image
                  src={trustpilot}
                  alt="trustpilot image"
                  fill
                  className="object-contain"
                />
              </figure>

              <figure className="relative h-[32px] w-full md:w-[500px]">
                <Image
                  src={trustpilot_rev}
                  alt="trustpilot link"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>

            <HeroPromo />
          </div>
        </Section>
      </div>
    </Background>
  );
}
