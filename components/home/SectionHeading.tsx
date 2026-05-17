type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  tone = "dark",
}: SectionHeadingProps) {
  const eyebrowClass =
    tone === "light" ? "text-cyan-200/80" : "text-fuchsia-300";
  const titleClass = tone === "light" ? "text-white" : "text-cyan-50";
  const descriptionClass =
    tone === "light" ? "text-cyan-100/70" : "text-cyan-100/72";

  return (
    <div className={className}>
      <p className={`text-sm font-semibold uppercase tracking-normal ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold ${titleClass} sm:text-5xl`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
