import { ReactNode } from "react";

type TwoColumnSectionProps = {
  main: ReactNode;
  side: ReactNode;
  className?: string;
  mainClassName?: string;
  sideClassName?: string;
};

export default function TwoColumnSection({
  main,
  side,
  className = "",
  mainClassName = "lg:grid-cols-[1.15fr_0.85fr]",
  sideClassName = "self-start",
}: TwoColumnSectionProps) {
  return (
    <section className={`mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10 ${className}`.trim()}>
      <div className={`grid gap-8 ${mainClassName}`.trim()}>
        <div>{main}</div>
        <div className={sideClassName}>{side}</div>
      </div>
    </section>
  );
}
