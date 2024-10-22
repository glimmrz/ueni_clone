"use client";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import { Section } from "../section";
import { Title } from "../title";
import { ProcessCard } from "./process-card";
import { useVideoModal } from "@/hooks/controllers";

const steps = [
  {
    id: 1,
    description: "get in touch with our sales representative.",
    time: "sat - thu",
  },
  {
    id: 2,
    description:
      "Describe your requirement in detail. features, color theme etc.",
    time: "sat - thu",
  },
  {
    id: 3,
    description: "Launch and promote your website.",
    time: "sat - thu",
  },
];

export function Process() {
  const { onOpen } = useVideoModal();

  return (
    <Section>
      <div className="grid md:grid-cols-[2fr,1fr] gap-4 md:gap-8 items-center">
        <div>
          <Title title="How it works?" subtitle="We bring your story to life" />
          <div className="grid md:grid-cols-3 gap-2 mt-8">
            {steps.map((step, index) => (
              <ProcessCard key={index} step={step} />
            ))}
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
            <Image src={placeholder} alt="" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </Section>
  );
}
