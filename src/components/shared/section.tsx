import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary" | "dark";
  id?: string;
}

export function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-[#F9FAFB]",
    primary: "bg-[#2563EB]",
    dark: "bg-[#1F2937]",
  };

  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        bgClasses[background],
        className
      )}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
