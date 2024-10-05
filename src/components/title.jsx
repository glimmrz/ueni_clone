import { cn } from "@/lib/utils";

export function Title({ children, className }) {
  return <h2 className={cn("text-2xl md:text-4xl", className)}>{children}</h2>;
}
