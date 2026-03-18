import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  container?: boolean;
};

export function Section({
  id,
  className,
  children,
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {container ? (
        <div className="container mx-auto max-w-6xl px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
