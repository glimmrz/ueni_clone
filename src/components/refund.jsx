import Image from "next/image";
import refund from "@/assets/refund.svg";
import { Section } from "./section";
import { Title } from "./title";

export function Refund() {
  return (
    <Section className="py-0">
      <div className="bg-accent grid md:grid-cols-[2.5fr,1fr] gap-4 rounded-md p-2 md:pt-8 md:pb-8 md:pl-16 md:pr-16">
        <div className="flex flex-col gap-4">
          <Title
            title="30-Day free trial. No commitment."
            className="md:text-left"
          />

          <p className="text-[22px] text-center md:text-left">
            Try our services free for 30 days and if you’re not happy with our
            service continue at all, contact{" "}
            <a href="tel:+8801873228724" className="underline">
              +8801873228724
            </a>{" "}
            for free trial.
          </p>
        </div>
        <figure className="relative h-40">
          <Image src={refund} alt="100% Money-Back Guarantee" fill />
        </figure>
      </div>
    </Section>
  );
}
