import Link from "next/link";
import Image from "next/image";
import demo from "@/assets/cc.png";
import { Checkbox } from "./checkbox";
import { Description } from "./description";
import { Heading } from "./heading";
import { Button } from "./ui/button";
import { Container } from "./container";
import { Background } from "./background";
import compc from "@/assets/com-pc.png";
import commb from "@/assets/com-mb.png";

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
      <div className="min-h-[80vh] overflow-hidden text-background pt-6 md:pt-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-full flex flex-col justify-center md:items-start gap-4 md:gap-8">
              <Heading className="text-center md:text-left">
                Building the Future of Your Website in Just 7 Days!
              </Heading>
              <Description className="text-center md:text-left">
                You will generate more sales, bookings, and leads with a
                gorgeous website that’s built for you for an unbeatable price.
              </Description>

              <div className="flex items-center md:items-start flex-col gap-2 md:flex-row md:flex-wrap md:gap-4">
                {checkboxData?.map((data, index) => (
                  <Checkbox data={data} key={index} />
                ))}
              </div>
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-[#F23C04] hover:bg-[#F23C04] w-full"
                >
                  get started
                </Button>
              </Link>
            </div>
            <figure className="relative h-[360px] md:h-full w-full rounded-md overflow-hidden">
              <Image src={demo} alt="" fill className="object-cover" />
            </figure>
          </div>

          <figure className="relative h-10 w-full my-16 hidden md:block">
            <Image src={compc} alt="" fill className="object-contain" />
          </figure>
          <figure className="relative h-[190px] w-full my-8 block md:hidden">
            <Image src={commb} alt="" fill className="object-contain" />
          </figure>
        </Container>
      </div>
    </Background>
  );
}
