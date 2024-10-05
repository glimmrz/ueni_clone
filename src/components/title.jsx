import { cn } from "@/lib/utils";

export function Title({ children, className }) {
  return (
    <h2
      className={cn("text-2xl md:text-4xl text-center md:text-left", className)}
    >
      {children}
    </h2>
  );
}
