import { Features } from "@/components/features";
import { Hero } from "@/components/hero/hero";
import { Process } from "@/components/process/process";
import { TrustpilotReviews } from "@/components/trustpilot-reviews/trustpilot-reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <TrustpilotReviews />
    </>
  );
}
