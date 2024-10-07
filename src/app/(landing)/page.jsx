import { About } from "@/components/about";
import { CustomerReview } from "@/components/customer-review";
import { Differences } from "@/components/differences/defferences";
import { Faq } from "@/components/faq/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero/hero";
import { Landing } from "@/components/landing";
import { Process } from "@/components/process/process";
import { Refund } from "@/components/refund";
import { Services } from "@/components/services/services";
import { TrustpilotReviews } from "@/components/trustpilot-reviews/trustpilot-reviews";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Hero />
      <Features />
      <Process />
      <CustomerReview />
      <TrustpilotReviews />
      <Differences />
      <CustomerReview />
      <Refund />
      <Services />
      <Faq />
    </>
  );
}
