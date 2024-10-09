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
import customer from "@/assets/customer.png";
import customer2 from "@/assets/customer2.png";

const review1 = {
  customerName: "John Davis",
  customerPosition: "owner, Tangerine company",
  review: `“I have tried wix and the other do DIY companies... Not worth the head aches !!! this company is unreal!! PRO PRO PRO customer service is unbelievable!! they make you feel like you are their only client!! keep it up.”`,
  image: customer,
};

const review2 = {
  customerName: "Carla Stones",
  customerPosition: "owner, Tangerine company",
  review: `“I have tried wix and the other do DIY companies... Not worth the head aches !!! this company is unreal!! PRO PRO PRO customer service is unbelievable!! they make you feel like you are their only client!! keep it up.”`,
  image: customer2,
};

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Hero />
      <Features />
      <Process />
      <CustomerReview review={review1} />
      <TrustpilotReviews />
      <Differences />
      <CustomerReview review={review2} />
      <Refund />
      <Services />
      <Faq />
    </>
  );
}
