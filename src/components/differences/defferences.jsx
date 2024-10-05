import { Background } from "../background";
import { Section } from "../section";
import { DifferenceTable } from "./differences-table";

export function Differences() {
  return (
    <Background>
      <Section
        className="text-background"
        id="differences"
        title="What makes WALTON different?"
        description="Say goodbye to DIY builders and web agencies and get the best of both"
      >
        <DifferenceTable />
      </Section>
    </Background>
  );
}
