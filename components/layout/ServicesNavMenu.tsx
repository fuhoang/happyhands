import Link from "next/link";
import { services } from "@/lib/services";

type ServicesNavMenuProps = {
  tone?: "light" | "brand";
  active?: boolean;
};

export default function ServicesNavMenu({ tone = "brand", active = false }: ServicesNavMenuProps) {
  const triggerClassName = tone === "light" ? "text-white hover:text-white" : "text-[#008000] hover:text-[#008000]";
  const underlineClassName = tone === "light" ? "bg-white" : "bg-[#008000]";

  return (
    <div className="group relative flex h-full items-center">
      <Link href="/services" className={`relative inline-flex items-center gap-2 pb-1 transition ${triggerClassName}`}>
        Services
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current transition duration-200 group-hover:rotate-180">
          <path d="M5.6 7.2 10 11.6l4.4-4.4 1.1 1.1L10 13.8 4.5 8.3l1.1-1.1Z" />
        </svg>
        <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transition-transform duration-300 ${underlineClassName} ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="w-80 border border-[#d7e6d7] bg-white p-3 shadow-[0_18px_40px_rgba(20,51,22,0.12)]">
          <div className="grid gap-1">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="px-3 py-2 text-sm font-semibold text-[#5f7d5f] transition hover:bg-[#f3fff3] hover:text-[#008000]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
