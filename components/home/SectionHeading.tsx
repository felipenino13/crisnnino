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
    tone === "light" ? "text-amber-200/70" : "text-slate-500";
  const titleClass = tone === "light" ? "text-white" : "text-slate-950";
  const descriptionClass = tone === "light" ? "text-slate-300" : "text-slate-700";

  return (
    <div className={className}>
      <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
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
