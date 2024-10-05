import { Icon } from "../icon";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export function FeatureCard({ data }) {
  return (
    <Card className="border-transparent shadow-none">
      <CardContent className="flex flex-col gap-2 px-0">
        <Icon icon={data.icon} size={58} />
        <CardTitle className="text-xl font-normal">{data.label}</CardTitle>
        <CardDescription>
          We write the copy, pick the right images, create your design, provide
          rich content for your products and services, and go the extra mile to
          make a website that looks great on any device.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
