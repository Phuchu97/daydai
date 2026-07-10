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
    <section
      id={id}
      className={cn("py-12 pb-14 sm:py-16 sm:pb-20 md:py-24 md:pb-28", className)}
    >
      {container ? (
        <div className="site-container">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
