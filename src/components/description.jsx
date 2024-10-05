import { cn } from "@/lib/utils";

export function Description({ children, className }) {
  return (
    <h4 className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </h4>
  );
}
