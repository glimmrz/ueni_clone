import { cn } from "@/lib/utils";

export function Heading({ children, className }) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-[58px] font-semibold text-inherit",
        className
      )}
    >
      {children}
    </h1>
  );
}
