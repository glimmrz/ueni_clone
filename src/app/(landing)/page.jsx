import { Differences } from "@/components/differences/defferences";
import { Faq } from "@/components/faq/faq";
import { Features } from "@/components/feature/features";
import { Hero } from "@/components/hero/hero";
import { Refund } from "@/components/refund";
import { Reviews } from "@/components/review/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Differences />
      <Refund />
      <Features />
      <Faq />
    </>
  );
}
