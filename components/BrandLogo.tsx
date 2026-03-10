import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  tone?: "light" | "brand";
};

export default function BrandLogo({ href = "/", tone = "brand" }: BrandLogoProps) {
  const titleClassName = tone === "light" ? "text-white" : "text-[#008000]";
  const subtitleClassName = tone === "light" ? "text-white/78" : "text-[#5f7d5f]";

  return (
    <Link href={href} className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="hand-wave h-8 w-8 fill-current">
          <path d="M7.5 11.25V6.8a1.05 1.05 0 1 1 2.1 0v3.55h.9V5.8a1.05 1.05 0 1 1 2.1 0v4.55h.9V6.6a1.05 1.05 0 1 1 2.1 0v4.5h.9V8.1a1.05 1.05 0 1 1 2.1 0v6.15c0 3.25-2.3 5.95-5.4 6.45l-1.85.3A5.9 5.9 0 0 1 5.5 15.2v-1.65a1.8 1.8 0 0 1 2-1.8Z" />
        </svg>
      </div>
      <div>
        <p className={`text-base font-semibold uppercase tracking-[0.16em] ${titleClassName}`}>
          Happy Hands
        </p>
        <p className={`text-sm font-medium ${subtitleClassName}`}>Cleaning Services</p>
      </div>
    </Link>
  );
}
