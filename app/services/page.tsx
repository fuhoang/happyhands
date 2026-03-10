import Link from "next/link";
import StarBorder from "@/components/StarBorder";
import ServicesNavMenu from "@/components/ServicesNavMenu";
import { services } from "@/lib/services";

function renderServiceIcon(slug: string) {
  const className = "h-7 w-7 fill-none stroke-current stroke-2";

  switch (slug) {
    case "after-builders-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M3 19.5h18M5.5 19.5V9.8L12 5l6.5 4.8v9.7M9 19.5v-5h6v5" />
        </svg>
      );
    case "after-party-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M7 4v16M7 8c2.5 0 3.5-2 6-2s3.5 2 6 2v6c-2.5 0-3.5-2-6-2s-3.5 2-6 2" />
        </svg>
      );
    case "carpet-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "end-of-tenancy-cleaners-london":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 19h16M6 19V7h12v12M9 10h6M9 13h6" />
        </svg>
      );
    case "event-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M6 20V8l6-4 6 4v12M9 12h6M12 8v8" />
        </svg>
      );
    case "fogging":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 14h6l2-4h6M6 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm16 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM9 14V9h3" />
        </svg>
      );
    case "home-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 11.5 12 5l8 6.5M7 10.5v8h10v-8" />
        </svg>
      );
    case "office-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 19.5h16M6 19.5V5.5h12v14M10 9h4M10 12h4M10 15h4" />
        </svg>
      );
    case "retail-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 9h14l-1 10H6L5 9ZM7 9V6h10v3M9 13h6" />
        </svg>
      );
    case "rental-turnovers":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 12.5 12 6l8 6.5M6.5 11.5v7h11v-7M9 15h6" />
        </svg>
      );
    case "washing-and-ironing":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 16h12l2-6H9l-4 6Zm0 0h14M11 10l2-3h4" />
        </svg>
      );
    case "leisure-and-hospitality-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M7 4v8a2 2 0 0 0 4 0V4M5 20h10M12 12v8M16 4h3v8a3 3 0 0 1-3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <header className="sticky top-0 z-50 w-full border-b border-[#b8d6c1]/50 bg-white/95 shadow-[0_10px_28px_rgba(0,128,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="hand-wave h-8 w-8 fill-current">
                <path d="M7.5 11.25V6.8a1.05 1.05 0 1 1 2.1 0v3.55h.9V5.8a1.05 1.05 0 1 1 2.1 0v4.55h.9V6.6a1.05 1.05 0 1 1 2.1 0v4.5h.9V8.1a1.05 1.05 0 1 1 2.1 0v6.15c0 3.25-2.3 5.95-5.4 6.45l-1.85.3A5.9 5.9 0 0 1 5.5 15.2v-1.65a1.8 1.8 0 0 1 2-1.8Z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.16em] text-[#008000]">
                Happy Hands
              </p>
              <p className="text-sm font-medium text-[#5f7d5f]">Cleaning Services</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-12 text-sm font-medium tracking-[0.08em] text-[#5f7d5f] md:flex">
            <ServicesNavMenu />
            <Link href="/#testimonials" className="relative pb-1 transition hover:text-[#008000] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008000] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Reviews
            </Link>
            <Link href="/contact" className="relative pb-1 transition hover:text-[#008000] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008000] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Contact
            </Link>
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
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6197120/pexels-photo-6197120.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,77,15,0.72)_0%,rgba(24,96,24,0.62)_55%,rgba(47,138,47,0.52)_100%)]" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#9edf9e]/8 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
            Happy Hands Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            Cleaning services for homes, businesses, events, and managed properties.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
            Explore the full Happy Hands service range and choose the cleaning support that fits your property, schedule, and operational needs.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <StarBorder
              key={service.slug}
              as="div"
              color="#4f4f4f"
              speed="4.5s"
              thickness={4}
              className="service-star h-full"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-md bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {renderServiceIcon(service.slug)}
                </div>
                <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#5a160d]">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5f7d5f]">
                  {service.summary}
                </p>
              </Link>
            </StarBorder>
          ))}
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
                <li><Link href="/about" className="transition hover:text-[#008000]">About</Link></li>
                <li><Link href="/#testimonials" className="transition hover:text-[#008000]">Testimonials</Link></li>
                <li><Link href="/health-and-safety" className="transition hover:text-[#008000]">Health and Safety</Link></li>
                <li><Link href="/employee-treatment" className="transition hover:text-[#008000]">Employee Treatment</Link></li>
                <li><Link href="/contact" className="transition hover:text-[#008000]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#008000]">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="transition hover:text-[#008000]">
                      {service.title}
                    </Link>
                  </li>
                ))}
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
              <p className="max-w-xs text-sm leading-7 text-[#5f7d69]">
                Hey, want to join our Happy Hands team and become a REAL professional?
              </p>
              <a
                href="mailto:happyhandscustomerservice@gmail.com"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#008000] px-5 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600]"
              >
                Join Us
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[#008000]">
            <a href="#" aria-label="Facebook" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.7v3h2.6v8h3.2Z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2Zm4.1-3.3a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M6.4 8.8H3.6V20h2.8V8.8ZM5 4A1.6 1.6 0 1 0 5 7.2 1.6 1.6 0 0 0 5 4Zm5.6 4.8H7.8V20h2.8v-5.6c0-1.5.3-3 2.1-3 1.8 0 1.8 1.7 1.8 3.1V20h2.8v-6.1c0-3-1.6-4.3-3.8-4.3-1.8 0-2.6 1-3 1.7h0V8.8Z" /></svg>
            </a>
            <a href="#" aria-label="X" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.9 3H22l-6.8 7.7L23 21h-6.1l-4.8-6.2L6.6 21H3.5l7.3-8.2L1 3h6.3l4.3 5.7L18.9 3Zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19Z" /></svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20 11.9A8 8 0 0 1 8.1 18.8L4 20l1.3-4A8 8 0 1 1 20 11.9Zm-8-6.4a6.4 6.4 0 0 0-5.4 9.9l.2.3-.8 2.3 2.4-.8.3.2a6.4 6.4 0 1 0 3.3-11.9Zm3.8 8.2c-.2-.1-1.1-.6-1.3-.7s-.3-.1-.5.1-.6.7-.7.8-.2.2-.4 0a5.2 5.2 0 0 1-1.5-.9 5.8 5.8 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3.1-.3c0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.3 2.3 0 0 0-.7 1.7 4 4 0 0 0 .8 2.1 9.1 9.1 0 0 0 3.5 3.1 11.8 11.8 0 0 0 1.2.4 2.8 2.8 0 0 0 1.3.1 2.1 2.1 0 0 0 1.4-1 1.8 1.8 0 0 0 .1-1c0-.1-.2-.2-.4-.3Z" /></svg>
            </a>
            <a href="mailto:happyhandscustomerservice@gmail.com" aria-label="Email" className="transition hover:text-[#006600]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M3 6.8A1.8 1.8 0 0 1 4.8 5h14.4A1.8 1.8 0 0 1 21 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.2V6.8Zm1.8.2v.2l7.2 5.3 7.2-5.3V7H4.8Zm14.4 10V9.4l-6.7 4.9a1 1 0 0 1-1.2 0L4.8 9.4V17h14.4Z" /></svg>
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-[#5f7d69]">
            © Copyright Happy Hands 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
