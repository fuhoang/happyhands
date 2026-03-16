import Link from "next/link";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryAsLink?: boolean;
  className?: string;
};

export default function CtaBanner({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  secondaryAsLink = false,
  className = "mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10",
}: CtaBannerProps) {
  return (
    <section className={className}>
      <div className="rounded-md bg-[linear-gradient(135deg,#008000_0%,#26a626_100%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4fff1]">
            {eyebrow}
          </p>
          <h2 className="mt-3 site-h2-contrast">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-white/85">{description}</p>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[18rem]">
          {primaryHref.startsWith("mailto:") || primaryHref.startsWith("tel:") ? (
            <a
              href={primaryHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#008000] transition hover:bg-[#f3fff3]"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#008000] transition hover:bg-[#f3fff3]"
            >
              {primaryLabel}
            </Link>
          )}

          {secondaryAsLink ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-white/40 bg-white/10 px-7 text-sm font-black text-white transition hover:bg-white/15"
            >
              {secondaryLabel}
            </Link>
          ) : (
            <a
              href={secondaryHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-white/40 bg-white/10 px-7 text-sm font-black text-white transition hover:bg-white/15"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
