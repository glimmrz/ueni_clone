import { Section } from "../section";
import { Button } from "../ui/button";
import { PackageCard } from "./package-card";

const packages = [
  {
    packageTitle: "The $149 one-time setup fee includes:",
    info: [
      {
        label: "Fully built multi-page website, easy to edit anytime",
        icon: "check",
      },
      {
        label: "Personalized design & SEO content",
        icon: "check",
      },
      {
        label: "Ecommerce & bookings functionality",
        icon: "check",
      },
      {
        label: "Website launched in 1 week",
        icon: "check",
      },
      {
        label: "1-to-1 launch call to make any changes you need",
        icon: "check",
      },
      {
        label: "30 days of unlimited edits by our team",
        icon: "check",
      },
    ],
  },
  {
    packageTitle: "The $12.99 monthly fee includes:",
    info: [
      {
        label: "Domain name & pro email inbox",
        icon: "check",
      },
      {
        label: "Unlimited sales, bookings & leads",
        icon: "check",
      },
      {
        label: "0% fees on any transactions",
        icon: "check",
      },
      {
        label: "Ongoing platform upgrades",
        icon: "check",
      },
      {
        label: "Premium support",
        icon: "check",
      },
      {
        label: "Fast, secure hosting & SSL",
        icon: "check",
      },
    ],
  },
];

export function Packages() {
  return (
    <Section
      id="pricing"
      title="What do we offer and how much does it cost?"
      description="$149 one-time fee and then just $12.99 per month."
    >
      <div className="w-full flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {packages.map((pack, index) => (
            <PackageCard key={index} data={pack} />
          ))}
        </div>

        <Button size="lg" variant="outline" className="w-full md:w-fit">
          the full list of whats included
        </Button>
      </div>
    </Section>
  );
}
