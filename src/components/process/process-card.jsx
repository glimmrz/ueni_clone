import { Title } from "../title";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

export function ProcessCard({ data }) {
  return (
    <Card>
      <CardHeader>
        <Title className="uppercase font-semibold text-center">
          Step 0{data.number}
        </Title>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          nunc vitae tellus luctus ullamcorper. Nam porttitor, elit in ultrices
          imperdiet, eros est venenatis tortor, a lobortis risus libero et est.
        </CardDescription>
        <p className="font-semibold text-2xl text-center mt-2">
          {data.highlight}
        </p>
      </CardContent>
    </Card>
  );
}
