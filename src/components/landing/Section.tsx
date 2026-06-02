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
    <section id={id} className={cn("py-16 pb-20 md:py-24 md:pb-28", className)}>
      {container ? (
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
