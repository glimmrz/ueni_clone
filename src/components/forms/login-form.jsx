"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { Title } from "../title";
import { FloatingLabelInput } from "../floating-label-input";
import Image from "next/image";
import placeholder from "@/assets/placeholder.png";

export function LoginForm() {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center text-background">
      <div className="w-full md:w-[500px] min-h-[70vh] bg-foreground shadow-lg rounded-2xl flex flex-col gap-4 pt-8 pb-8 pr-4 pl-4">
        <Link href="/auth" passHref>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full min-w-fit bg-background/10"
          >
            <Icon icon="back" />
          </Button>
        </Link>
        <figure className="relative h-16 w-16 rounded-xl overflow-hidden">
          <Image src={placeholder} alt="" fill className="object-cover" />
        </figure>
        {/* <Logo /> */}
        <Title
          title="Welcome back"
          subtitle="Sign in to your Walton account."
          className="text-left  space-y-0"
        />

        <form action="" className="flex flex-col gap-4">
          <FloatingLabelInput label="email address" />
          <FloatingLabelInput label="enter Password" />
          <Button className="rounded-full">sign in with email</Button>
        </form>
      </div>
    </div>
  );
}
