"use client";
import Image from "next/image";
import process from "@/assets/process.png";
import { Section } from "../section";
import { Title } from "../title";
import { ProcessCard } from "./process-card";
import { useVideoModal } from "@/hooks/controllers";

export function Process() {
  const { onOpen } = useVideoModal();

  return (
    <Section>
      <div className="grid md:grid-cols-[2fr,1fr] gap-4 md:gap-8 items-center">
        <div>
          <Title title="How it works" subtitle="We bring your story to life" />
          <div className="flex flex-col md:flex-row gap-2 mt-8">
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
          </div>
        </div>
        <div>
          <figure
            onClick={() =>
              onOpen(
                "https://www.youtube.com/embed/zOa5o9Yq_ZU?si=5BjqPTiIGJavE6hU"
              )
            }
            className="relative w-full md:w-[520px] h-[355px] md:h-[455px] rounded-md overflow-hidden cursor-pointer"
          >
            <Image src={process} alt="" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </Section>
  );
}
