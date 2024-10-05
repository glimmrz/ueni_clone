import { cn } from "@/lib/utils";

export function Heading({ children, className }) {
  return (
    <h1
      className={cn(
        "text-5xl leading-snug md:text-[64px] font-semibold text-inherit",
        className
      )}
    >
      {children}
    </h1>
  );
}
