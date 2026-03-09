"use client";

import { useEffect, useState } from "react";
import BlurText from "@/components/BlurText";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#5a160d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_100%)]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-[#b8d6c1]/50 bg-white/95 shadow-[0_10px_28px_rgba(37,84,57,0.08)]"
            : "border-white/12 bg-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="hand-wave h-8 w-8 fill-current"
              >
                <path d="M7.5 11.25V6.8a1.05 1.05 0 1 1 2.1 0v3.55h.9V5.8a1.05 1.05 0 1 1 2.1 0v4.55h.9V6.6a1.05 1.05 0 1 1 2.1 0v4.5h.9V8.1a1.05 1.05 0 1 1 2.1 0v6.15c0 3.25-2.3 5.95-5.4 6.45l-1.85.3A5.9 5.9 0 0 1 5.5 15.2v-1.65a1.8 1.8 0 0 1 2-1.8Z" />
              </svg>
            </div>
            <div>
              <p
                className={`text-base font-semibold tracking-[0.16em] uppercase ${
                  scrolled ? "text-[#008000]" : "text-white"
                }`}
              >
                Happy Hands
              </p>
              <p
                className={`text-sm font-medium ${
                  scrolled ? "text-[#5f7d5f]" : "text-white/78"
                }`}
              >
                Cleaning Services
              </p>
            </div>
          </div>

          <nav
            className={`hidden items-center gap-12 text-sm font-medium tracking-[0.08em] md:flex ${
              scrolled ? "text-[#5f7d5f]" : "text-white/86"
            }`}
          >
            <a
              href="#services"
              className={`relative pb-1 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] ${
                scrolled
                  ? "hover:text-[#008000] after:bg-[#008000] hover:after:scale-x-100"
                  : "hover:text-white after:bg-white hover:after:scale-x-100"
              }`}
            >
              Services
            </a>
            <a
              href="#why-us"
              className={`relative pb-1 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] ${
                scrolled
                  ? "hover:text-[#008000] after:bg-[#008000] hover:after:scale-x-100"
                  : "hover:text-white after:bg-white hover:after:scale-x-100"
              }`}
            >
              Why us
            </a>
            <a
              href="#testimonials"
              className={`relative pb-1 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] ${
                scrolled
                  ? "hover:text-[#008000] after:bg-[#008000] hover:after:scale-x-100"
                  : "hover:text-white after:bg-white hover:after:scale-x-100"
              }`}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className={`relative pb-1 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] ${
                scrolled
                  ? "hover:text-[#008000] after:bg-[#008000] hover:after:scale-x-100"
                  : "hover:text-white after:bg-white hover:after:scale-x-100"
              }`}
            >
              Contact
            </a>
            <a
              href="mailto:happyhandscustomerservice@gmail.com"
              className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                scrolled
                  ? "border border-[#b7ddb7] bg-white/70 text-[#008000] hover:bg-[#f3fff3]"
                  : "border border-white/28 bg-white/12 text-white hover:bg-white/18"
              }`}
            >
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[78vh] w-full overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3360701/pexels-photo-3360701.jpeg?cs=srgb&dl=pexels-karolina-grabowska-3360701.jpg&fm=jpg')] bg-cover bg-[72%_center] bg-no-repeat" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border-2 border-[#b7ddb7] bg-[#f3fff3] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#008000] shadow-[0_8px_20px_rgba(0,128,0,0.16)]">
              Bright energetic cleaning in your city
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
              Happy Hands has been delivering exceptional cleaning services for
              over 20 years with a spotless reputation. We understand that high
              standards, consistency and trust are the cornerstones of a
              professional service that you can rely on, will return to and can
              recommend.
            </p>

            <div
              id="contact"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href="mailto:happyhandscustomerservice@gmail.com"
                className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[#008000] px-7 text-sm font-black text-white shadow-[0_18px_36px_rgba(0,128,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#006b00]"
              >
                Book a free quote
              </a>
              <a
                href="tel:+447973403788"
                className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-[#b7ddb7] bg-[#f3fff3] px-7 text-sm font-black text-[#008000] transition hover:-translate-y-0.5"
              >
                Call 07973 403 788
              </a>
            </div>

            <div className="mt-8 max-w-md rounded-md border border-white/20 bg-white/14 p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-sm">
              <p className="text-base font-black text-[#caffca]">Fast booking process</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Share the property size, preferred day, and service type. Happy
                Hands will reply with a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-md border-2 border-[#b7ddb7]/60 bg-white/90 p-5 shadow-[0_18px_45px_rgba(0,128,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm bg-[#f3fff3] p-5">
            <p className="text-3xl font-black text-[#008000]">450+</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f8f6f]">
              spaces cleaned each month
            </p>
          </div>
          <div className="rounded-sm bg-[#fbfffb] p-5">
            <p className="text-3xl font-black text-[#008000]">4.9/5</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f8f6f]">
              average customer rating
            </p>
          </div>
          <div className="rounded-sm bg-[#f3fff3] p-5">
            <p className="text-3xl font-black text-[#008000]">Same day</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f8f6f]">
              quote responses when availability allows
            </p>
          </div>
          <div className="rounded-sm bg-[#fbfffb] p-5">
            <p className="text-3xl font-black text-[#008000]">7 days</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f8f6f]">
              weekly booking availability
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#008000]">
            Services
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#5a160d] sm:text-5xl">
            Cleaning packages built for homes, workspaces, and rental properties
          </h2>
          <p className="mt-4 text-base leading-8 text-[#6f8f6f]">
            Choose the service that fits your space, then get a fast quote with
            a schedule that works for you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <path d="M4 12h16" />
                <path d="M6 8h12" />
                <path d="M8 16h8" />
                <path d="M9 4h6l1 4H8l1-4Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">Home Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Routine and deep-clean packages for kitchens, bathrooms,
              bedrooms, living rooms, and busy family spaces.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M8 19v-4" />
                <path d="M16 19v-4" />
                <path d="M8 9h8" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">Office Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Flexible cleaning for studios, shops, and office spaces that need
              a polished look every day.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <path d="M6 18h12" />
                <path d="M8 18V8h8v10" />
                <path d="M9 8V5h6v3" />
                <path d="M10 11h4" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">Rental Turnovers</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Quick resets for Airbnb and short-term rentals with detail work
              that keeps every arrival guest-ready.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <path d="M4 7h16" />
                <path d="M6 7v10" />
                <path d="M18 7v10" />
                <path d="M6 17h12" />
                <path d="M9 10h6" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">Retail Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Reliable cleaning for shops and retail spaces with polished floors,
              tidy displays, and a welcoming customer environment.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <path d="M4 12h16" />
                <path d="M7 8h10" />
                <path d="M7 16h10" />
                <path d="M6 6h12v12H6z" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">
              Leisure and Hospitality Cleaning
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Cleaning support for hotels, restaurants, lounges, and leisure
              venues that need a spotless guest-ready presentation.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
                <path d="M12 4v16" />
                <path d="M7 9h10" />
                <path d="M5 20h14" />
                <path d="M8 20v-5h8v5" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-black">Event Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Pre-event preparation, during-event upkeep, and post-event cleaning
              for venues that need fast, professional turnaround.
            </p>
          </article>
        </div>
      </section>

      <section
        id="why-us"
        className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        <div className="rounded-md bg-[linear-gradient(180deg,#008000_0%,#006600_100%)] p-8 text-white shadow-[0_24px_60px_rgba(0,128,0,0.2)]">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#efffec]">
            Why clients return
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            Cleaning that feels upbeat, dependable, and instantly visible.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Happy Hands is built around consistent service, clear communication,
            and finishing details that stand out the moment someone walks in.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7">
            <p className="text-lg font-black text-[#008000]">Flexible scheduling</p>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              One-time visits, weekly cleaning, and last-minute support for
              homes and business spaces.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7">
            <p className="text-lg font-black text-[#008000]">Friendly communication</p>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Clear quotes, quick replies, and a simple booking experience from
              first message to final clean.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7">
            <p className="text-lg font-black text-[#008000]">Attention to detail</p>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              High-touch areas, finishing checks, and presentation-focused
              cleaning that makes a strong impression.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7">
            <p className="text-lg font-black text-[#008000]">Direct contact</p>
            <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">
              Call 07973 403 788 or email
              {" "}
              happyhandscustomerservice@gmail.com to request a quote.
            </p>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#008000]">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Trusted by busy homes and businesses
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)]">
            <p className="text-base leading-8 text-[#6f8f6f]">
              “Happy Hands made the place feel brand new. They were punctual,
              friendly, and the finish was excellent.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#008000]">
              Sarah, homeowner
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-[#f3fff3] p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)]">
            <p className="text-base leading-8 text-[#6f8f6f]">
              “We needed reliable office cleaning and got exactly that. Clear
              communication, flexible booking, and consistently tidy results.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#008000]">
              Daniel, studio manager
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b7ddb7]/60 bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)]">
            <p className="text-base leading-8 text-[#6f8f6f]">
              “The rental turnaround was fast and detailed. Guests noticed how
              fresh everything felt as soon as they walked in.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#008000]">
              Mia, host
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="rounded-md bg-[linear-gradient(135deg,#008000_0%,#26a626_100%)] p-8 text-white shadow-[0_30px_70px_rgba(0,128,0,0.2)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f7fff4]">
              Ready to book?
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Get a fast quote from Happy Hands today
            </h2>
            <p className="mt-4 text-base leading-8 text-white/85">
              Call, email, or send your property details to get a tailored
              cleaning quote for your home, office, or rental.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[18rem]">
            <a
              href="tel:+447973403788"
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#008000] transition hover:-translate-y-0.5"
            >
              Call 07973 403 788
            </a>
            <a
              href="mailto:happyhandscustomerservice@gmail.com"
              className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-white/40 bg-white/10 px-7 text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Email for a quote
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#b8d6c1]/50 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 text-center text-sm text-[#5f7d69] sm:px-8 lg:px-10">
          <p>© Copyright Happy Hands 2026</p>
        </div>
      </footer>
    </main>
  );
}
