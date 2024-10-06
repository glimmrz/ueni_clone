import { Card, CardContent } from "../ui/card";

export function TrustpilotReviewCard() {
  return (
    <Card className="select-none border-0 w-fit">
      <CardContent>
        <iframe
          title="Customer reviews powered by Trustpilot"
          loading="auto"
          src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&amp;businessunitId=59a6987b0000ff0005aa0297#locale=en-US&amp;styleHeight=240px&amp;styleWidth=100%25&amp;theme=light&amp;stars=5&amp;reviewLanguages=en"
        ></iframe>
      </CardContent>
    </Card>
  );
}
