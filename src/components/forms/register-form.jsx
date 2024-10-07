"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { Title } from "../title";
import { FloatingLabelInput } from "../floating-label-input";
import Image from "next/image";
import placeholder from "@/assets/placeholder.png";

export function RegisterForm() {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="w-full md:w-[500px] min-h-[70vh] shadow-lg rounded-2xl flex flex-col gap-4 pt-8 pb-8 pr-4 pl-4">
        <Link href="/auth" passHref>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full min-w-fit"
          >
            <Icon icon="back" />
          </Button>
        </Link>

        <Title title="Enter your email" className="text-left space-y-0 mt-8" />

        <form action="" className="flex flex-col justify-between gap-4">
          <FloatingLabelInput label="email address" type="email" />
          <Button className="rounded-full">continue</Button>
        </form>
      </div>
    </div>
  );
}
