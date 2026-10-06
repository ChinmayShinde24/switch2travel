import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const tones = {
  default: "bg-transparent",
  sky: "bg-brand-sky-50",
  mist: "bg-brand-sky-50",
  alt: "bg-surface-alt",
  dark: "bg-brand-navy-900 text-white",
  navy: "bg-brand-navy-900 text-white",
};

export default function Section({
  id,
  eyebrow,
  title,
  accent,
  description,
  children,
  className = "",
  tone = "default",
  headingAs = "h2",
  align = "left",
}) {
  const onDark = tone === "dark" || tone === "navy";

  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container>
        {(eyebrow || title || description) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            accent={accent}
            description={description}
            as={headingAs}
            onDark={onDark}
            align={align}
            className="mb-10 md:mb-14"
          />
        )}
        {children}
      </Container>
    </section>
  );
}
