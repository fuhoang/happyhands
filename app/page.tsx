 "use client";

import { useEffect, useState } from "react";

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
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#1f7a4d,#7dcf9a)] text-lg font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
              H
            </div>
            <div>
              <p
                className={`text-base font-semibold tracking-[0.16em] uppercase ${
                  scrolled ? "text-[#245239]" : "text-white"
                }`}
              >
                Happy Hands
              </p>
              <p
                className={`text-sm font-medium ${
                  scrolled ? "text-[#5f7d69]" : "text-white/78"
                }`}
              >
                Cleaning Services
              </p>
            </div>
          </div>

          <nav
            className={`hidden items-center gap-12 text-sm font-medium tracking-[0.08em] md:flex ${
              scrolled ? "text-[#4d6f5a]" : "text-white/86"
            }`}
          >
            <a
              href="#services"
              className={`transition ${scrolled ? "hover:text-[#245239]" : "hover:text-white"}`}
            >
              Services
            </a>
            <a
              href="#why-us"
              className={`transition ${scrolled ? "hover:text-[#245239]" : "hover:text-white"}`}
            >
              Why us
            </a>
            <a
              href="#testimonials"
              className={`transition ${scrolled ? "hover:text-[#245239]" : "hover:text-white"}`}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className={`transition ${scrolled ? "hover:text-[#245239]" : "hover:text-white"}`}
            >
              Contact
            </a>
            <a
              href="mailto:happyhandscustomerservice@gmail.com"
              className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                scrolled
                  ? "border border-[#b8d6c1] bg-white/70 text-[#245239] hover:bg-[#edf7f1]"
                  : "border border-white/28 bg-white/12 text-white hover:bg-white/18"
              }`}
            >
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[78vh] w-full overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-[center_right]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.4)_34%,rgba(0,0,0,0.08)_72%,rgba(0,0,0,0.02)_100%)]" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-sm border-2 border-[#8fd0a5] bg-[#edf7f1] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#1f7a4d] shadow-[0_8px_20px_rgba(125,207,154,0.24)]">
              Bright energetic cleaning in your city
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
              Bold shine.
              <br />
              Fast refresh.
              <br />
              Happy Hands.
            </h1>

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
                className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[#1f7a4d] px-7 text-sm font-black text-white shadow-[0_18px_36px_rgba(31,122,77,0.28)] transition hover:-translate-y-0.5 hover:bg-[#17623d]"
              >
                Book a free quote
              </a>
              <a
                href="tel:+447973403788"
                className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-[#8fd0a5] bg-[#edf7f1] px-7 text-sm font-black text-[#245239] transition hover:-translate-y-0.5"
              >
                Call 07973 403 788
              </a>
            </div>

            <div className="mt-8 max-w-md rounded-md border border-white/20 bg-white/14 p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-sm">
              <p className="text-base font-black text-[#9ee0b3]">Fast booking process</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Share the property size, preferred day, and service type. Happy
                Hands will reply with a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-md border-2 border-[#b8d6c1]/60 bg-white/90 p-5 shadow-[0_18px_45px_rgba(31,122,77,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm bg-[#edf7f1] p-5">
            <p className="text-3xl font-black text-[#1f7a4d]">450+</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#5f7d69]">
              spaces cleaned each month
            </p>
          </div>
          <div className="rounded-sm bg-[#f8fcf9] p-5">
            <p className="text-3xl font-black text-[#1f7a4d]">4.9/5</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#5f7d69]">
              average customer rating
            </p>
          </div>
          <div className="rounded-sm bg-[#edf7f1] p-5">
            <p className="text-3xl font-black text-[#1f7a4d]">Same day</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#5f7d69]">
              quote responses when availability allows
            </p>
          </div>
          <div className="rounded-sm bg-[#f8fcf9] p-5">
            <p className="text-3xl font-black text-[#1f7a4d]">7 days</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#5f7d69]">
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1f7a4d]">
            Services
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#5a160d] sm:text-5xl">
            Cleaning packages built for homes, workspaces, and rental properties
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5f7d69]">
            Choose the service that fits your space, then get a fast quote with
            a schedule that works for you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#1f7a4d,#7dcf9a)] text-2xl text-white">
              ✦
            </div>
            <h3 className="mt-5 text-2xl font-black">Home Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              Routine and deep-clean packages for kitchens, bathrooms,
              bedrooms, living rooms, and busy family spaces.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-[#edf7f1] p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#1f7a4d,#7dcf9a)] text-2xl text-white">
              ■
            </div>
            <h3 className="mt-5 text-2xl font-black">Office Cleaning</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              Flexible cleaning for studios, shops, and office spaces that need
              a polished look every day.
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)] transition hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#1f7a4d,#7dcf9a)] text-2xl text-white">
              ○
            </div>
            <h3 className="mt-5 text-2xl font-black">Rental Turnovers</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              Quick resets for Airbnb and short-term rentals with detail work
              that keeps every arrival guest-ready.
            </p>
          </article>
        </div>
      </section>

      <section
        id="why-us"
        className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        <div className="rounded-md bg-[linear-gradient(180deg,#1f7a4d_0%,#145235_100%)] p-8 text-white shadow-[0_24px_60px_rgba(31,122,77,0.24)]">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#bde6cb]">
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
          <div className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7">
            <p className="text-lg font-black text-[#1f7a4d]">Flexible scheduling</p>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              One-time visits, weekly cleaning, and last-minute support for
              homes and business spaces.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b8d6c1]/60 bg-[#edf7f1] p-7">
            <p className="text-lg font-black text-[#1f7a4d]">Friendly communication</p>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              Clear quotes, quick replies, and a simple booking experience from
              first message to final clean.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b8d6c1]/60 bg-[#edf7f1] p-7">
            <p className="text-lg font-black text-[#1f7a4d]">Attention to detail</p>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
              High-touch areas, finishing checks, and presentation-focused
              cleaning that makes a strong impression.
            </p>
          </div>
          <div className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7">
            <p className="text-lg font-black text-[#1f7a4d]">Direct contact</p>
            <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1f7a4d]">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Trusted by busy homes and businesses
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)]">
            <p className="text-base leading-8 text-[#5f7d69]">
              “Happy Hands made the place feel brand new. They were punctual,
              friendly, and the finish was excellent.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#1f7a4d]">
              Sarah, homeowner
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-[#edf7f1] p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)]">
            <p className="text-base leading-8 text-[#5f7d69]">
              “We needed reliable office cleaning and got exactly that. Clear
              communication, flexible booking, and consistently tidy results.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#1f7a4d]">
              Daniel, studio manager
            </p>
          </article>

          <article className="rounded-md border-2 border-[#b8d6c1]/60 bg-white p-7 shadow-[0_18px_45px_rgba(31,122,77,0.12)]">
            <p className="text-base leading-8 text-[#5f7d69]">
              “The rental turnaround was fast and detailed. Guests noticed how
              fresh everything felt as soon as they walked in.”
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#1f7a4d]">
              Mia, host
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="rounded-md bg-[linear-gradient(135deg,#1f7a4d_0%,#2fa768_100%)] p-8 text-white shadow-[0_30px_70px_rgba(31,122,77,0.24)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d4f0de]">
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
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#245239] transition hover:-translate-y-0.5"
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
    </main>
  );
}
