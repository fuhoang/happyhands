"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ServicesNavMenu from "@/components/ServicesNavMenu";
import { services } from "@/lib/services";

type SiteHeaderProps = {
  mode?: "home" | "solid";
  activePage?: "contact" | "services";
};

export default function SiteHeader({ mode = "solid", activePage }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(mode !== "home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mode !== "home") return;
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [mode, activePage]);

  const isTransparent = mode === "home" && !scrolled;
  const navTone = isTransparent ? "light" : "brand";
  const navTextClassName = isTransparent ? "text-white/86" : "text-[#5f7d5f]";
  const linkHoverClassName = isTransparent ? "hover:text-white after:bg-white" : "hover:text-[#008000] after:bg-[#008000]";
  const mobilePanelClassName = isTransparent
    ? "border-white/12 bg-[#12311c]/94 text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
    : "border-[#d7e6d7] bg-white text-[#1f2a1f] shadow-[0_18px_40px_rgba(20,51,22,0.12)]";
  const mobileLinkClassName = isTransparent
    ? "text-white/88 hover:bg-white/10 hover:text-white"
    : "text-[#315033] hover:bg-[#f3fff3] hover:text-[#008000]";
  const mobileSectionLabelClassName = isTransparent ? "text-white/60" : "text-[#5f7d69]";
  const mobileButtonClassName = isTransparent
    ? "border border-white/18 bg-white/10 text-white hover:bg-white/16"
    : "border border-[#d7e6d7] bg-white text-[#008000] hover:bg-[#f3fff3]";
  const wrapperClassName =
    mode === "home"
      ? `fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
          isTransparent
            ? "border-white/12 bg-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            : "border-[#b8d6c1]/50 bg-white/95 shadow-[0_10px_28px_rgba(37,84,57,0.08)]"
        }`
      : "sticky top-0 z-50 w-full border-b border-[#b8d6c1]/50 bg-white/95 shadow-[0_10px_28px_rgba(37,84,57,0.08)] backdrop-blur-md";

  return (
    <header className={wrapperClassName}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <BrandLogo tone={navTone} />

        <nav className={`hidden items-center gap-12 text-sm font-medium tracking-[0.08em] md:flex ${navTextClassName}`}>
          <ServicesNavMenu tone={navTone} active={activePage === "services"} />
          <Link
            href="/#testimonials"
            className={`relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${linkHoverClassName}`}
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className={`relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300 after:content-[''] ${
              activePage === "contact"
                ? `${isTransparent ? "text-white" : "text-[#008000]"} after:scale-x-100 ${isTransparent ? "after:bg-white" : "after:bg-[#008000]"}`
                : `after:scale-x-0 hover:after:scale-x-100 ${linkHoverClassName}`
            }`}
          >
            Contact
          </Link>
          <a
            href="mailto:happyhandscustomerservice@gmail.com"
            className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              isTransparent
                ? "border border-white/28 bg-white/12 text-white hover:bg-white/18"
                : "border border-[#b7ddb7] bg-white/70 text-[#008000] hover:bg-[#f3fff3]"
            }`}
          >
            Get Quote
          </a>
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-sm transition md:hidden ${mobileButtonClassName}`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            {mobileMenuOpen ? (
              <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-inherit md:hidden">
          <div className="mx-auto w-full max-w-7xl px-5 pb-5 sm:px-8">
            <div className={`mt-3 rounded-sm border p-4 ${mobilePanelClassName}`}>
              <div className="grid gap-2">
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`rounded-sm px-3 py-3 text-sm font-semibold transition ${mobileLinkClassName}`}>
                  Services
                </Link>

                <div className={`px-3 pt-2 text-[11px] font-black uppercase tracking-[0.18em] ${mobileSectionLabelClassName}`}>
                  Service pages
                </div>

                <div className="grid gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-sm px-3 py-2 text-sm font-medium transition ${mobileLinkClassName}`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-2 grid gap-2">
                  <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className={`rounded-sm px-3 py-3 text-sm font-semibold transition ${mobileLinkClassName}`}>
                    Reviews
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`rounded-sm px-3 py-3 text-sm font-semibold transition ${mobileLinkClassName}`}>
                    Contact
                  </Link>
                  <a
                    href="mailto:happyhandscustomerservice@gmail.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mt-2 inline-flex min-h-11 items-center justify-center rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                      isTransparent
                        ? "border border-white/24 bg-white text-[#12311c] hover:bg-white/90"
                        : "bg-[#008000] text-white hover:bg-[#006600]"
                    }`}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
