import { Differences } from "@/components/differences/defferences";
import { Faq } from "@/components/faq/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero/hero";
import { Process } from "@/components/process/process";
import { Refund } from "@/components/refund";
import { Services } from "@/components/services/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Differences />
      <Refund />
      <Services />
      <Faq />
    </>
  );
}
