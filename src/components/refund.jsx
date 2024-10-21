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
            Try this package for up to 30 days and if you’re not happy with our
            service no need to pay at all, contact{" "}
            <span className="underline">help@zeris.xyz</span> for free trial.
          </p>
        </div>
        <figure className="relative h-40">
          <Image src={refund} alt="100% Money-Back Guarantee" fill />
        </figure>
      </div>
    </Section>
  );
}
