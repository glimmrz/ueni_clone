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
        <Section>
          <div className="flex flex-col items-center justify-center gap-6">
            <Heading className="text-center">
              Get a website for your business in 7 days
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
                <span className="text-[46px]">৳1999</span>
                <span className="text-2xl">/mo </span>
              </div>
              <span className="text-center md:text-left">
                only to run your website. <br /> No hidden charges.
              </span>
            </div>

            <HeroPromo />
          </div>
        </Section>
      </div>
    </Background>
  );
}
