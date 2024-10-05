"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { usePreviewModal } from "@/hooks/controllers";

export function ExampleCard() {
  const { onOpen } = usePreviewModal();

  return (
    <Card className="select-none" onClick={onOpen}>
      <CardContent className="flex flex-col gap-4">
        <figure className="h-52 md:h-[350px] w-full relative">
          <Image
            src="https://ueni-res.cloudinary.com/image/upload/v1697570972/marketing/og/new-nov-2.webp"
            alt=""
            fill
            className="object-cover"
          />
        </figure>

        <Button size="lg">photographer</Button>
      </CardContent>
    </Card>
  );
}
