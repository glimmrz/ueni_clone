import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ProcessCard({ step }) {
  return (
    <Card className="bg-accent border-0">
      <CardContent className="px-2 space-y-2 flex flex-col justify-between h-full">
        <CardHeader>
          <CardTitle className="text-center">STEP {step.id}</CardTitle>
        </CardHeader>

        <CardDescription className="text-center line-clamp-4 capitalize">
          {step.description}
        </CardDescription>

        <p className="text-center uppercase">{step.time}</p>
      </CardContent>
    </Card>
  );
}
