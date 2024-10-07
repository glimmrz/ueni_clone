"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { Logo } from "../logo";

export function AuthWrapper({ mode, children }) {
  return (
    <div className="w-[500px] mt-16 mb-16 shadow-lg rounded-2xl flex flex-col items-center justify-center pt-8 pb-8 pr-4 pl-4">
      <h2 className="text-3xl font-semibold uppercase">walton</h2>
      {/* Toggle buttons */}
      <div className="grid grid-cols-2 w-full gap-4 bg-muted p-4 rounded-md mt-8">
        <Link href="/auth/login" passHref>
          <Button
            variant={mode === "login" ? "" : "ghost"}
            className="min-w-full rounded-full"
          >
            login
          </Button>
        </Link>
        <Link href="/auth/register" passHref>
          <Button
            variant={mode === "register" ? "" : "ghost"}
            className="min-w-full rounded-full"
          >
            sign up
          </Button>
        </Link>
      </div>

      {/* Login Options */}
      <div className="w-full mt-8">
        <div className="w-full grid gap-4">
          {/* Apple */}
          <Button variant="outline" className="w-full gap-4 rounded-full">
            <Icon size={28} icon="apple" />
            <span>continue with apple</span>
          </Button>
          {/* Google */}
          <Button variant="outline" className="w-full gap-4 rounded-full">
            <Icon size={28} icon="google" />
            <span>continue with google</span>
          </Button>
        </div>
      </div>
      {/* Main form */}
      <div className="w-full">{children}</div>

      {/* Notice */}
      <p className="text-xs mt-8">
        By creating an account, you agree to Tatamax{" "}
        <Link
          className="text-primary underline hover:text-variant transition-colors duration-300"
          href="#"
        >
          Conditions of Use & Sale
        </Link>
        . Please see our{" "}
        <Link
          className="text-primary underline hover:text-variant transition-colors duration-300"
          href="#"
        >
          Privacy Notice
        </Link>
        , our{" "}
        <Link
          className="text-primary underline hover:text-variant transition-colors duration-300"
          href="#"
        >
          Cookies Notice
        </Link>
        .
      </p>
    </div>
  );
}
