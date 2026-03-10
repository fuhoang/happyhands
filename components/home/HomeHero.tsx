"use client";

import BlurText from "@/components/BlurText";
import { contactInfo, homeContent } from "@/lib/site-content";

export default function HomeHero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3360701/pexels-photo-3360701.jpeg?cs=srgb&dl=pexels-karolina-grabowska-3360701.jpg&fm=jpg')] bg-cover bg-[72%_center] bg-no-repeat" />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-sm border-2 border-[#b7ddb7] bg-[#f3fff3] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#008000] shadow-[0_8px_20px_rgba(0,128,0,0.16)]">
            {homeContent.eyebrow}
          </div>

          <div className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
            <BlurText
              as="h1"
              text="Bold shine."
              className="block"
              delay={220}
              duration={1300}
              segmentClassName="will-change-transform"
            />
            <BlurText
              as="div"
              text="Fast refresh."
              className="block"
              delay={280}
              duration={1450}
              segmentClassName="will-change-transform"
            />
            <BlurText
              as="div"
              text="Happy Hands."
              className="block"
              delay={340}
              duration={1600}
              segmentClassName="will-change-transform text-[#008000]"
            />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
            {homeContent.intro}
          </p>

          <div id="contact" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={contactInfo.emailHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[#008000] px-7 text-sm font-black text-white shadow-[0_18px_36px_rgba(0,128,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#006b00]"
            >
              Book a free quote
            </a>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-[#b7ddb7] bg-[#f3fff3] px-7 text-sm font-black text-[#008000] transition hover:-translate-y-0.5"
            >
              {`Call ${contactInfo.phoneDisplay}`}
            </a>
          </div>

          <div className="mt-8 max-w-md rounded-md border border-white/20 bg-white/14 p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-sm">
            <p className="text-base font-black text-[#caffca]">{homeContent.bookingTitle}</p>
            <p className="mt-2 text-sm leading-6 text-white/85">
              {homeContent.bookingCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
