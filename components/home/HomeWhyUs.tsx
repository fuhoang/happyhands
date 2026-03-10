import { contactInfo, homeContent } from "@/lib/site-content";

const reasons = [
  [
    "Flexible scheduling",
    "One-time visits, weekly cleaning, and last-minute support for homes and business spaces.",
    "bg-white",
  ],
  [
    "Friendly communication",
    "Clear quotes, quick replies, and a simple booking experience from first message to final clean.",
    "bg-[#f3fff3]",
  ],
  [
    "Attention to detail",
    "High-touch areas, finishing checks, and presentation-focused cleaning that makes a strong impression.",
    "bg-[#f3fff3]",
  ],
  [
    "Direct contact",
    `Call ${contactInfo.phoneDisplay} or email ${contactInfo.email} to request a quote.`,
    "bg-white",
  ],
] as const;

export default function HomeWhyUs() {
  return (
    <section
      id="why-us"
      className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
    >
      <div className="rounded-md bg-[linear-gradient(180deg,#008000_0%,#006600_100%)] p-8 text-white shadow-[0_24px_60px_rgba(0,128,0,0.2)]">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#efffec]">
          Why clients return
        </p>
        <h2 className="mt-4 site-h2 text-white">{homeContent.whyHeading}</h2>
        <p className="mt-4 text-sm leading-7 text-white/80">{homeContent.whyCopy}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {reasons.map(([title, copy, tone]) => (
          <div key={title} className={`rounded-md border-2 border-[#b7ddb7]/60 p-7 ${tone}`}>
            <p className="text-lg font-black text-[#008000]">{title}</p>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
