"use client";
import Image from "next/image";
import about from "@/assets/about.png";
import { Background } from "./background";
import { Heading } from "./heading";
import { Section } from "./section";
import { useAboutModal } from "@/hooks/controllers";

export function About() {
  const { onOpen } = useAboutModal();

  return (
    <Background>
      <Section>
        <div className="text-background grid md:grid-cols-2 gap-4 items-center">
          <div>
            <Heading className="text-center md:text-left">
              Who is WALTON?
            </Heading>

            <div className="flex flex-col gap-4 mt-8 text-center md:text-left">
              <p className="text-xl">
                WALTON is pronounced WALTON for a reason...
              </p>

              <p className="text-xl">
                WALTON was founded in 2014 to help small business owners get a
                professional online presence at an affordable price.
              </p>

              <p className="text-xl">
                We built a tech company to create beautiful, easy to use
                websites, and we built a service company to support business
                owners before, during and after they launch their websites.
              </p>

              <p className="text-xl">
                From design to SEO, ranking on Google to getting customers,
                count on our team to make it happen.
              </p>
            </div>
          </div>
          <div>
            <figure
              className="relative h-[400px] w-full cursor-pointer"
              onClick={onOpen}
            >
              <Image src={about} alt="" fill className="object-cover" />
            </figure>
          </div>
        </div>
      </Section>
    </Background>
  );
}
