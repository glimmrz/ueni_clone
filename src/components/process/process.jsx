import { Section } from "../section";
import { Title } from "../title";
import { ProcessCard } from "./process-card";

export function Process() {
  return (
    <Section>
      <div className="grid md:grid-cols-[.6fr,.4fr] gap-8 md:gap-16 items-center">
        <div>
          <Title title="How it works" subtitle="We bring your story to life" />
          <div className="flex gap-2 mt-8">
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
          </div>
        </div>
        <div></div>
      </div>
    </Section>
  );
}
