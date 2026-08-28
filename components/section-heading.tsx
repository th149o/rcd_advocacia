import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`eyebrow ${dark ? "dark-eyebrow" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title mt-5 ${dark ? "text-off-white" : "text-ink"}`}>{title}</h2>
      {description ? (
        <p
          className={`body-measure mt-6 text-base leading-8 ${dark ? "text-off-white/70" : "text-ink/65"} ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
