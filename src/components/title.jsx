import { cn } from "@/lib/utils";

export function Title({ title, subtitle, className }) {
  return (
    <hgroup className={cn("text-center space-y-3", className)}>
      {title && <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>}
      {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
    </hgroup>
  );
}
