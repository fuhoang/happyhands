"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ServicesNavMenu from "@/components/ServicesNavMenu";

type SiteHeaderProps = {
  mode?: "home" | "solid";
  activePage?: "contact" | "services";
};

export default function SiteHeader({ mode = "solid", activePage }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(mode !== "home");

  useEffect(() => {
    if (mode !== "home") return;
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const isTransparent = mode === "home" && !scrolled;
  const navTone = isTransparent ? "light" : "brand";
  const navTextClassName = isTransparent ? "text-white/86" : "text-[#5f7d5f]";
  const linkHoverClassName = isTransparent ? "hover:text-white after:bg-white" : "hover:text-[#008000] after:bg-[#008000]";
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
      </div>
    </header>
  );
}
