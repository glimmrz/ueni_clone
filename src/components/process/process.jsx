import Link from "next/link";
import { Section } from "../section";
import { Button } from "../ui/button";
import { ProcessCard } from "./process-card";

const steps = [
  {
    number: 1,
    highlight: "15-30 min",
  },
  {
    number: 2,
    highlight: "7 days",
  },
  {
    number: 3,
    highlight: "30 min",
  },
];

export function Process() {
  return (
    <Section
      className="bg-accent"
      description="Sign up today & here’s what happens next"
      title="Our 3 step solution to your website problem."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {steps?.map((step, index) => (
          <ProcessCard key={index} data={step} />
        ))}
      </div>

      <Link href="/register">
        <Button size="lg" className="w-full md:w-fit bg-[#F23C04]">
          get started now
        </Button>
      </Link>
    </Section>
  );
}
