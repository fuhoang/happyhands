import { contactInfo, homeContent } from "@/lib/site-content";

export default function HomeFinalCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="rounded-md bg-[linear-gradient(135deg,#008000_0%,#26a626_100%)] p-8 text-white shadow-[0_30px_70px_rgba(0,128,0,0.2)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f7fff4]">
            Ready to book?
          </p>
          <h2 className="mt-3 site-h2-lg text-white">{homeContent.finalCtaHeading}</h2>
          <p className="mt-4 text-base leading-8 text-white/85">{homeContent.finalCtaCopy}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[18rem]">
          <a
            href={contactInfo.phoneHref}
            className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#008000] transition hover:-translate-y-0.5"
          >
            {`Call ${contactInfo.phoneDisplay}`}
          </a>
          <a
            href={contactInfo.emailHref}
            className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-white/40 bg-white/10 px-7 text-sm font-black text-white transition hover:-translate-y-0.5"
          >
            Email for a quote
          </a>
        </div>
      </div>
    </section>
  );
}
