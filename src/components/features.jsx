import Image from "next/image";
import computer from "@/assets/tech.webp";
import { Checkbox } from "./checkbox";
import { Section } from "./section";

const checkboxData = [
  {
    icon: "check",
    label: "Beautiful multi-page website",
  },
  {
    icon: "check",
    label: "Personalized design & SEO",
  },
  {
    icon: "check",
    label: "Fast loading to rank on Google",
  },
  {
    icon: "check",
    label: "Ecommerce & bookings",
  },
  {
    icon: "check",
    label: "Easy to edit & use",
  },
  {
    icon: "check",
    label: "Domain, email, hosting & SSL",
  },
  {
    icon: "check",
    label: "Our team on hand to help you",
  },
  {
    icon: "check",
    label: "30 day money-back guarantee",
  },
];

export function Features() {
  return (
    <Section
      title="We provide services at an affordable price."
      subtitle="Launch the website of your dreams."
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div>
          <figure className="relative h-[250px] md:h-[400px] w-full rounded-md overflow-hidden">
            <Image
              src={computer}
              alt="computer"
              fill
              className="object-cover"
            />
          </figure>
        </div>
        <div className="space-y-3">
          {checkboxData.map((data, index) => (
            <Checkbox data={data} key={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
