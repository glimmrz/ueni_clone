import { Differences } from "@/components/differences/defferences";
import { Examples } from "@/components/examples/examples";
import { Faq } from "@/components/faq";
import { Features } from "@/components/feature/features";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/package/packages";
import { Process } from "@/components/process/process";
import { Refund } from "@/components/refund";
import { Reviews } from "@/components/review/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Examples />
      <Process />
      <Reviews />
      <Differences />
      <Refund />
      <Features />
      <Packages />
      <Faq />
    </>
  );
}
