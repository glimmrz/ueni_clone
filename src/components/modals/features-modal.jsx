"use client";
import { useFeaturesModal } from "@/hooks/controllers";
import { Modal } from "./modal";
import { Title } from "../title";
import { Checkbox } from "../checkbox";

const features = [
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
];

export function FeaturesModal() {
  const { isOpen, onClose } = useFeaturesModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full">
      <div className="py-4">
        <Title className="text-center">The full list of what is included</Title>

        <div className="grid md:grid-cols-2 gap-8 md:gap-4 mt-8">
          <div>
            <p className="text-2xl font-semibold">What we do for you:</p>

            <div className="grid gap-4 mt-4">
              {features.map((feature, index) => (
                <Checkbox key={index} data={feature} />
              ))}
            </div>
          </div>
          <div>
            <div>
              <p className="text-2xl font-semibold">What else is included:</p>

              <div className="grid gap-4 mt-4">
                {features.map((feature, index) => (
                  <Checkbox key={index} data={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
