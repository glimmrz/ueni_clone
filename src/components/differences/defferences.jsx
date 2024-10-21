import { Section } from "../section";
import { DifferenceTable } from "./differences-table";

export function Differences() {
  return (
    <Section
      id="differences"
      title="What makes ZERIS different?"
      subtitle="Easier & more affordable than DIY website builders and agencies."
    >
      <DifferenceTable />
    </Section>
  );
}
