import Link from "next/link";
import { services } from "@/lib/services";

const exploreLinks = [
  { href: "/about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/health-and-safety", label: "Health and Safety" },
  { href: "/employee-treatment", label: "Employee Treatment" },
  { href: "/contact", label: "Contact" },
];

const caseStudyLinks = [
  { href: "/case-studies/zebra-housing", label: "Zebra Housing" },
  { href: "/case-studies/covid-19-zebra-housing", label: "COVID-19 Zebra Housing" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#b8d6c1]/50 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-5 py-6 text-center text-sm text-[#5f7d69] sm:px-8 lg:px-10">
        <div className="grid w-full max-w-6xl gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="site-footer-h3">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#008000]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer-h3">Services</h3>
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
            <h3 className="site-footer-h3">Case Studies</h3>
            <ul className="space-y-2">
              {caseStudyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#008000]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer-h3">Become a Happy Hand Cleaner!</h3>
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
          <a href="#" aria-label="Facebook" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.7v3h2.6v8h3.2Z" /></svg></a>
          <a href="#" aria-label="Instagram" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2Zm4.1-3.3a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" /></svg></a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M6.4 8.8H3.6V20h2.8V8.8ZM5 4A1.6 1.6 0 1 0 5 7.2 1.6 1.6 0 0 0 5 4Zm5.6 4.8H7.8V20h2.8v-5.6c0-1.5.3-3 2.1-3 1.8 0 1.8 1.7 1.8 3.1V20h2.8v-6.1c0-3-1.6-4.3-3.8-4.3-1.8 0-2.6 1-3 1.7h0V8.8Z" /></svg></a>
          <a href="#" aria-label="X" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.9 3H22l-6.8 7.7L23 21h-6.1l-4.8-6.2L6.6 21H3.5l7.3-8.2L1 3h6.3l4.3 5.7L18.9 3Zm-1.1 16h1.7L6.4 4.9H4.6L17.8 19Z" /></svg></a>
          <a href="#" aria-label="WhatsApp" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20 11.9A8 8 0 0 1 8.1 18.8L4 20l1.3-4A8 8 0 1 1 20 11.9Zm-8-6.4a6.4 6.4 0 0 0-5.4 9.9l.2.3-.8 2.3 2.4-.8.3.2a6.4 6.4 0 1 0 3.3-11.9Zm3.8 8.2c-.2-.1-1.1-.6-1.3-.7s-.3-.1-.5.1-.6.7-.7.8-.2.2-.4 0a5.2 5.2 0 0 1-1.5-.9 5.8 5.8 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3.1-.3c0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.3 2.3 0 0 0-.7 1.7 4 4 0 0 0 .8 2.1 9.1 9.1 0 0 0 3.5 3.1 11.8 11.8 0 0 0 1.2.4 2.8 2.8 0 0 0 1.3.1 2.1 2.1 0 0 0 1.4-1 1.8 1.8 0 0 0 .1-1c0-.1-.2-.2-.4-.3Z" /></svg></a>
          <a href="mailto:happyhandscustomerservice@gmail.com" aria-label="Email" className="transition hover:text-[#006600]"><svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M3 6.8A1.8 1.8 0 0 1 4.8 5h14.4A1.8 1.8 0 0 1 21 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.2V6.8Zm1.8.2v.2l7.2 5.3 7.2-5.3V7H4.8Zm14.4 10V9.4l-6.7 4.9a1 1 0 0 1-1.2 0L4.8 9.4V17h14.4Z" /></svg></a>
        </div>

        <p className="mt-6 text-center text-sm text-[#5f7d69]">© Copyright Happy Hands 2026</p>
      </div>
    </footer>
  );
}
