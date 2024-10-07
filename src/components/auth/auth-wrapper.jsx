"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "../icon";
import { useState } from "react";

export function AuthWrapper() {
  const [mode, setMode] = useState("login");

  return (
    <div className="md:min-h-[calc(100vh-72px)] flex items-center justify-center text-background">
      <div className="w-full md:w-[500px] min-h-[calc(100vh-72px)] md:min-h-[70vh] bg-foreground shadow-lg rounded-2xl flex flex-col items-center justify-center pt-8 pb-8 pr-4 pl-4">
        <h2 className="text-3xl font-semibold uppercase">walton</h2>
        {/* Toggle buttons */}
        <div className="grid grid-cols-2 w-full gap-4 bg-muted p-4 rounded-full mt-8">
          <Button
            onClick={() => setMode("login")}
            variant={mode === "login" ? "" : "ghost"}
            className={`min-w-full rounded-full ${
              mode !== "login" ? "text-foreground" : ""
            }`}
          >
            login
          </Button>

          <Button
            onClick={() => setMode("register")}
            variant={mode === "register" ? "" : "ghost"}
            className={`min-w-fit rounded-full ${
              mode !== "register" ? "text-foreground" : ""
            }`}
          >
            sign up
          </Button>
        </div>

        {/* Login Options */}
        <div className="w-full mt-8">
          <div className="w-full grid gap-4">
            {/* Apple */}
            <Button
              variant="outline"
              className="w-full gap-4 rounded-full text-foreground hover:border-muted hover:bg-background/10"
            >
              <Icon size={28} icon="apple" />
              <span>continue with apple</span>
            </Button>
            {/* Google */}
            <Button
              variant="outline"
              className="w-full gap-4 rounded-full text-foreground hover:border-muted hover:bg-background/10"
            >
              <Icon size={28} icon="google" />
              <span>continue with google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full gap-4 rounded-full text-foreground hover:border-muted hover:bg-background/10"
            >
              <Icon size={28} icon="facebook" />
              <span>continue with facebook</span>
            </Button>
            {mode == "login" && (
              <Link href="/auth/sign-in-email">
                <Button
                  variant="outline"
                  className="w-full gap-4 rounded-full text-foreground hover:border-muted hover:bg-background/10"
                >
                  <Icon size={28} icon="gmail" />
                  <span>sign in with email</span>
                </Button>
              </Link>
            )}
            {mode == "register" && (
              <Link href="/auth/sign-up-email" passHref>
                <Button
                  variant="outline"
                  className="w-full gap-4 rounded-full text-foreground hover:border-muted hover:bg-background/10"
                >
                  <Icon size={28} icon="gmail" />
                  <span>sign up with email</span>
                </Button>
              </Link>
            )}
          </div>
        </div>

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
    </div>
  );
}
