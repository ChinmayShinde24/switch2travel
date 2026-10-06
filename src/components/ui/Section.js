import Container from "@/components/ui/Container";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  tone = "default",
}) {
  const toneClass =
    tone === "mist"
      ? "bg-mist/60"
      : tone === "navy"
        ? "bg-navy text-white"
        : "";

  return (
    <section id={id} className={`py-16 sm:py-20 ${toneClass} ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p
                className={`tagline mb-3 text-xs ${
                  tone === "navy" ? "text-amber-bright" : "text-blue"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={`text-3xl sm:text-4xl ${
                  tone === "navy" ? "text-white" : "text-navy"
                }`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`mt-3 text-base leading-relaxed sm:text-lg ${
                  tone === "navy" ? "text-white/80" : "text-muted"
                }`}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
