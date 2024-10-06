import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ProcessCard() {
  return (
    <Card className="bg-accent border-0">
      <CardContent className="px-2 space-y-2">
        <CardHeader>
          <CardTitle className="text-center">STEP 01</CardTitle>
        </CardHeader>

        <CardDescription className="text-center">
          Upon payment, you will be directed to answer our onboarding
          questionnaire.
        </CardDescription>

        <p className="text-center">15-30 min</p>
      </CardContent>
    </Card>
  );
}
