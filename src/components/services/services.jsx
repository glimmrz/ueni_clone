import { Section } from "../section";
import { ServicesCard } from "./service-card";

const features = [
  {
    icon: "design",
    label: "Done-for-you design and content",
  },
  {
    icon: "email",
    label: "Custom domain name & professional email",
  },
  {
    icon: "hosting",
    label: "Unlimited hosting",
  },
  {
    icon: "editor",
    label: "Easy-to-use editor",
  },
  {
    icon: "sales",
    label: "Unlimited 0% commission sales",
  },
  {
    icon: "calendar",
    label: "Take appointments 24/7",
  },
  {
    icon: "analytics",
    label: "Personal analytics dashboard & lead capture",
  },
  {
    icon: "support",
    label: "1-to-1 call before launch",
  },
];

export function Services() {
  return (
    <Section
      title="Easier & more affordable."
      description="What sets us apart?"
    >
      <div className="grid gap-4 md:gap-8 md:grid-cols-2">
        {features?.map((feature, index) => (
          <ServicesCard key={index} data={feature} />
        ))}
      </div>
    </Section>
  );
}
