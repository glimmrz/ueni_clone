import Link from "next/link";
import { Background } from "./background";
import { Container } from "./container";
import { Title } from "./title";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="text-background">
      <Background>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 pt-8 pb-8">
              <Title>
                Professional website done for you. 7-day turnaround.
              </Title>

              <p className="text-xl">
                Completely zero-risk. Unmatched customer service.
              </p>

              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-[#F23C04] hover:bg-[#F23C04] w-full"
                >
                  get started now
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Background>
    </footer>
  );
}
