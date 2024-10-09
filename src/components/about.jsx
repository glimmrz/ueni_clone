import Image from "next/image";
import tech from "@/assets/tech.webp";
import { Section } from "./section";
import { Title } from "./title";
import { Button } from "./ui/button";

export function About() {
  return (
    <Section className="py-0 md:py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <Title
            title="We create solutions for smarter businesses."
            className="text-left"
          />

          <p>
            We are a technology service company that, with our thinkers and
            doers, enable breakthroughs that help industrial businesses change.
            Together with our customers, we are building a world where every
            system, process, and product can be made smarter, more efficient,
            and more sustainable. For this world to unfold, we need diverse
            people, expertise, and collaboration. By working across industries,
            together we raise the bar on what a technology service company can
            do.
          </p>

          <Button className="w-full md:w-fit">our services</Button>
        </div>
        <div className="row-start-1 md:col-start-2">
          <figure className="relative h-[340px] md:h-[500px] w-full rounded-tl-[150px] overflow-hidden">
            <Image src={tech} alt="cameleon" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </Section>
  );
}
