import Image from "next/image";
import logo from "@/assets/placeholder.png";
import { Section } from "./section";
import { Title } from "./title";
import { Card, CardContent } from "./ui/card";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute right-0 z-[-1] -translate-y-[10%] -translate-x-[20%] scale-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={1080}
          height={1080}
          style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0,0,0)",
            contentVisibility: "visible",
          }}
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h1080v1080H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill="none"
              stroke="#A778E8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={133.855}
              d="M-188.717 437.969c-38.164-19.401-67.506-61.765-80.762-136.382-32.278-181.317-53.486-426.948 41.087-585.958C-73.3-575.061 321.421-462.122 322.383-125.455c.583 155.949-58.401 298.163-155.542 405.173 0 0 0 0 0 0-89.488 98.578-253.85 209.957-355.558 158.251"
              style={{
                display: "block",
              }}
              transform="translate(364.476 518.678)"
            />
            <path
              fill="none"
              stroke="#FD5678"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={134.07}
              d="M-188.717 437.969c-38.164-19.401-67.506-61.765-80.762-136.382-32.278-181.317-53.486-426.948 41.087-585.958C-73.3-575.061 321.421-462.122 322.383-125.455c.583 155.949-58.401 298.163-155.542 405.173 0 0 0 0 0 0-89.488 98.578-253.85 209.957-355.558 158.251"
              style={{
                display: "block",
              }}
              transform="translate(364.476 518.678)"
            />
            <path
              fill="none"
              stroke="#DFE3EA"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={135.3}
              d="M-188.717 437.969c-38.164-19.401-67.506-61.765-80.762-136.382-32.278-181.317-53.486-426.948 41.087-585.958C-73.3-575.061 321.421-462.122 322.383-125.455c.583 155.949-58.401 298.163-155.542 405.173 0 0 0 0 0 0-89.488 98.578-253.85 209.957-355.558 158.251"
              style={{
                display: "block",
              }}
              transform="translate(364.476 518.678)"
            />
            <path
              fill="none"
              stroke="#A778E8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={133.855}
              d="M-385.359 241.471c-149.75-85.137-12.814-300.78 105.642-408.311 107.009-97.141 249.223-156.125 405.173-155.542 0 0 0 0 0 0C462.123-321.42 575.061 73.3 284.37 228.392c-159.009 94.573-404.639 73.366-585.956 41.087-34.521-6.132-62.139-15.708-83.773-28.008"
              style={{
                display: "block",
              }}
              transform="translate(561.33 715.516)"
            />
            <path
              fill="none"
              stroke="#FD5678"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={134.07}
              d="M-385.359 241.471c-149.75-85.137-12.814-300.78 105.642-408.311 107.009-97.141 249.223-156.125 405.173-155.542 0 0 0 0 0 0C462.123-321.42 575.061 73.3 284.37 228.392c-159.009 94.573-404.639 73.366-585.956 41.087-34.521-6.132-62.139-15.708-83.773-28.008"
              style={{
                display: "block",
              }}
              transform="translate(561.33 715.516)"
            />
            <path
              fill="none"
              stroke="#DFE3EA"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={135.3}
              d="M-385.359 241.471c-149.75-85.137-12.814-300.78 105.642-408.311 107.009-97.141 249.223-156.125 405.173-155.542 0 0 0 0 0 0C462.123-321.42 575.061 73.3 284.37 228.392c-159.009 94.573-404.639 73.366-585.956 41.087-34.521-6.132-62.139-15.708-83.773-28.008"
              style={{
                display: "block",
              }}
              transform="translate(561.33 715.516)"
            />
          </g>
        </svg>
      </div>
      <Section>
        <div className="grid grid-cols-6 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2">
            <Card className="border-transparent shadow-2xl h-full rounded-3xl">
              <CardContent className="py-8 px-8 h-full flex flex-col justify-between">
                <Title
                  title="the smart wishlist app."
                  className="text-left capitalize bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                />

                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <figure className="relative h-11 w-11 rounded-md overflow-hidden">
                      <Image src={logo} alt="" className="object-cover" fill />
                    </figure>
                    <Title title="Walton" className="text-left" />
                  </div>
                  <p className="text-muted-foreground text-xs">
                    © 2024 Intent Technologies Inc. All rights reserved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-2 row-span-2 space-y-4">
            <Card className="border-transparent shadow-2xl rounded-3xl">
              <CardContent className="px-8 py-8 flex flex-col gap-8">
                <h2 className="text-[2rem] font-semibold text-blue-400">
                  Browser extensions
                </h2>

                <div className="flex gap-4">
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    chrome
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    edge
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    firefox
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    opera
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-transparent shadow-2xl rounded-3xl">
              <CardContent className="px-8 py-8 flex flex-col gap-8">
                <h2 className="text-[2rem] font-semibold text-pink-500">
                  Walton apps.
                </h2>

                <div className="flex gap-4">
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    ios
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    android
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    web
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="row-span-2 space-y-4">
            <Card className="border-transparent shadow-2xl rounded-3xl">
              <CardContent className="px-8 py-8 flex flex-col gap-8">
                <h2 className="text-[2rem] font-semibold text-blue-400">
                  Browser
                </h2>

                <div className="flex gap-4">
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    chrome
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    edge
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    firefox
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    opera
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-transparent shadow-2xl rounded-3xl">
              <CardContent className="px-8 py-8 flex flex-col gap-8">
                <h2 className="text-[2rem] font-semibold text-pink-500">
                  Walton
                </h2>

                <div className="flex gap-4">
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    ios
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    android
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    web
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-full">
            <Card className="border-transparent shadow-2xl rounded-3xl h-full row-span-2">
              <CardContent className="px-8 py-8 flex flex-col gap-8">
                <h2 className="text-[2rem] font-semibold text-pink-500">
                  Walton
                </h2>

                <div className="flex gap-4">
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    ios
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    android
                  </p>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer font-semibold capitalize">
                    web
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </footer>
  );
}
