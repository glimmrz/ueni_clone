import Image from "next/image";
import trustpilot from "@/assets/trustpilot-p.png";
import { Section } from "../section";
import { Title } from "../title";
import { TrustpilotReviewCard } from "./trustpilot-review-card";

export function TrustpilotReviews() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[3fr,1.5fr] gap-4 md:gap-2 items-center mb-8 lg:mb-4">
        <Title
          title="Trusted by more than 700,000 business owners since 2014"
          className="md:text-left"
        />
        <figure className="relative h-20">
          <Image
            src={trustpilot}
            alt="trustpilot"
            fill
            className="object-contain"
          />
        </figure>
      </div>

      <TrustpilotReviewCard />
    </Section>
  );
}
