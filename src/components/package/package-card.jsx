import { Background } from "../background";
import { Checkbox } from "../checkbox";
import { Title } from "../title";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function PackageCard({ data }) {
  return (
    <Card className="overflow-hidden">
      <div className="text-background">
        <Background>
          <CardHeader className="text-background p-4">
            <Title className="md:text-2xl font-semibold capitalize text-center">
              {data.packageTitle}
            </Title>
          </CardHeader>
        </Background>
      </div>

      <CardContent className="px-4 flex flex-col gap-4">
        {data.info?.map((pack, index) => (
          <Checkbox key={index} data={pack} />
        ))}
      </CardContent>
    </Card>
  );
}
