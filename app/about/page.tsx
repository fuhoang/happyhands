import Plasma from "@/components/Plasma";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <header className="sticky top-0 z-50 w-full border-b border-[#b8d6c1]/50 bg-white/95 shadow-[0_10px_28px_rgba(0,128,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="hand-wave h-8 w-8 fill-current">
                <path d="M7.5 11.25V6.8a1.05 1.05 0 1 1 2.1 0v3.55h.9V5.8a1.05 1.05 0 1 1 2.1 0v4.55h.9V6.6a1.05 1.05 0 1 1 2.1 0v4.5h.9V8.1a1.05 1.05 0 1 1 2.1 0v6.15c0 3.25-2.3 5.95-5.4 6.45l-1.85.3A5.9 5.9 0 0 1 5.5 15.2v-1.65a1.8 1.8 0 0 1 2-1.8Z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold tracking-[0.16em] uppercase text-[#008000]">
                Happy Hands
              </p>
              <p className="text-sm font-medium text-[#5f7d5f]">Cleaning Services</p>
            </div>
          </a>

          <nav className="hidden items-center gap-12 text-sm font-medium tracking-[0.08em] text-[#5f7d5f] md:flex">
            <a href="/#services" className="relative pb-1 transition hover:text-[#008000] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008000] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Services
            </a>
            <a href="/#testimonials" className="relative pb-1 transition hover:text-[#008000] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008000] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Reviews
            </a>
            <a href="/#contact" className="relative pb-1 transition hover:text-[#008000] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008000] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Contact
            </a>
            <a
              href="mailto:happyhandscustomerservice@gmail.com"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#b7ddb7] bg-white/70 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#008000] transition hover:bg-[#f3fff3]"
            >
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#d7e6d7] bg-[#0f4d0f]">
        <div className="absolute inset-0 opacity-55">
          <Plasma
            color="#72d272"
            speed={0.5}
            scale={1}
            opacity={0.65}
            mouseInteractive={false}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,77,15,0.72)_0%,rgba(24,96,24,0.62)_55%,rgba(47,138,47,0.52)_100%)]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#9edf9e]/8 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
            About Happy Hands
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            Professional cleaning built on consistency, trust, and care.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
            Happy Hands has built its reputation by delivering reliable cleaning
            services with high standards, friendly support, and attention to
            detail across homes, businesses, and specialist environments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em]">Who we are</h2>
            <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
              Paul Russell established Happy Hands cleaning team in 1999 to
              provide commercial and domestic cleaning services throughout
              London and the Home Counties. As an independent company with
              family values, we pride ourselves on providing a responsive,
              professional cleaning service with an emphasis on high standards
              and a tailored service that exactly meets the needs of our
              clients.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
              We understand how important it is to value our people; as a
              result, we have many long-standing members on our cleaning team
              and a low staff turnover ensuring our clients receive a consistent
              and reliable service. We have a rigorous recruitment and training
              process and because we reward our staff well we attract and retain
              the best candidates. All our staff members go through a detailed
              vetting process and their credentials and references are
              thoroughly checked to give our clients peace of mind.
            </p>
          </div>

          <div className="self-start rounded-md border border-[#d7e6d7] bg-[#f7fbf7] p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#008000]">
              Our values
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f7d5f]">
              <li>Consistency in every clean</li>
              <li>Professional and friendly communication</li>
              <li>Respect for safety, staff, and client spaces</li>
              <li>Reliable service you can recommend</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-md border border-[#d7e6d7] bg-white p-8 text-center sm:p-10">
          <h2 className="text-3xl font-black tracking-[-0.04em]">
            The Happy Hands Team
          </h2>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            <div className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Happy Hands operations team member"
                className="h-52 w-full object-cover"
              />
              <div className="px-6 pb-7 pt-6">
                <div className="h-1.5 w-16 rounded-full bg-[#008000]" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Operations
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#163316]">
                  Site Management
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f7d5f]">
                  Coordinating schedules, quality checks, and client
                  requirements across domestic and commercial sites.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Happy Hands training team member"
                className="h-52 w-full object-cover"
              />
              <div className="px-6 pb-7 pt-6">
                <div className="h-1.5 w-16 rounded-full bg-[#008000]" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Training
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#163316]">
                  Professional Standards
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f7d5f]">
                  Rigorous training and vetting keeps every clean safe,
                  consistent, and aligned with high service standards.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
              <img
                src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Happy Hands support team member"
                className="h-52 w-full object-cover"
              />
              <div className="px-6 pb-7 pt-6">
                <div className="h-1.5 w-16 rounded-full bg-[#008000]" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Support
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#163316]">
                  Reliable Service
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f7d5f]">
                  Long-standing staff and responsive communication give clients
                  a dependable service they can trust and recommend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-md bg-[linear-gradient(135deg,#008000_0%,#26a626_100%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4fff1]">
              Work with Happy Hands
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
              Looking for reliable cleaning support?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/85">
              Speak to our team about tailored cleaning support for homes,
              offices, retail, hospitality, and events.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[18rem]">
            <a
              href="tel:+447973403788"
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-7 text-sm font-black text-[#008000] transition hover:bg-[#f3fff3]"
            >
              Call 07973 403 788
            </a>
            <a
              href="mailto:happyhandscustomerservice@gmail.com"
              className="inline-flex min-h-14 items-center justify-center rounded-sm border-2 border-white/40 bg-white/10 px-7 text-sm font-black text-white transition hover:bg-white/15"
            >
              Email our team
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#b8d6c1]/50 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-5 py-6 text-center text-sm text-[#5f7d69] sm:px-8 lg:px-10">
          <div className="grid w-full max-w-6xl gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#008000]">
                Explore
              </h3>
              <ul className="space-y-2">
                <li><a href="/about" className="transition hover:text-[#008000]">About</a></li>
                <li><a href="/#testimonials" className="transition hover:text-[#008000]">Testimonials</a></li>
                <li><a href="/health-and-safety" className="transition hover:text-[#008000]">Health and Safety</a></li>
                <li><a href="#" className="transition hover:text-[#008000]">Employee Treatment</a></li>
                <li><a href="/#contact" className="transition hover:text-[#008000]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#008000]">
                Services
              </h3>
              <ul className="space-y-2">
                <li><a href="/#services" className="transition hover:text-[#008000]">After Builders Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">After Party Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Carpet Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">End of Tenancy Cleaners London</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Event Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Fogging</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Home Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Office Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Retail Cleaning</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Rental Turnovers</a></li>
                <li><a href="/#services" className="transition hover:text-[#008000]">Washing and Ironing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#008000]">
                Case Studies
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="transition hover:text-[#008000]">Zebra Housing</a></li>
                <li><a href="#" className="transition hover:text-[#008000]">COVID-19 Zebra Housing</a></li>
                <li><a href="#" className="transition hover:text-[#008000]">Before and After</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#008000]">
                Become a Happy Hand Cleaner!
              </h3>
              <p className="max-w-xs leading-7 text-[#6f8f6f]">
                Hey, want to join our Happy Hands team and become a REAL professional?
              </p>
              <a
                href="#"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#008000] px-5 text-sm font-black text-white transition hover:bg-[#006b00]"
              >
                Join Us
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 text-[#008000]">
            <a href="#" aria-label="Facebook" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.2v2.6H9V14h2.4v7h2.1Z" /></svg></a>
            <a href="#" aria-label="Instagram" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="#" aria-label="LinkedIn" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M6.2 8.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM4.8 9.8h2.8V19H4.8V9.8Zm4.4 0H12v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19H9.2V9.8Z" /></svg></a>
            <a href="#" aria-label="X" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.9 4H21l-4.6 5.3L22 20h-4.4l-3.5-4.8L9.9 20H7.8l4.9-5.7L2 4h4.5l3.2 4.4L13.5 4h2.1Zm-1.5 14.2h1.2L5.9 5.7H4.6l12.8 12.5Z" /></svg></a>
            <a href="#" aria-label="WhatsApp" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 4a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 4Zm0 14.5c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.1-.2a6.5 6.5 0 1 1 5.4 2.9Zm3.6-4.8c-.2-.1-1.3-.7-1.5-.8-.2-.1-.3-.1-.5.1l-.4.5c-.1.1-.2.1-.4.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1 0-.3 0-.4l-.7-1.6c-.1-.3-.2-.3-.4-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.5 2.4 3.8 3.2.5.2.9.3 1.2.4.5.1 1 .1 1.4.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1Z" /></svg></a>
            <a href="mailto:happyhandscustomerservice@gmail.com" aria-label="Email" className="transition hover:opacity-75"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></a>
          </div>

          <p className="mt-6">© Copyright Happy Hands 2026</p>
        </div>
      </footer>
    </main>
  );
}
