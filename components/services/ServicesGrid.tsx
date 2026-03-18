import Link from "next/link";
import { renderServiceIcon } from "@/components/ui/ServiceIcons";
import StarBorder from "@/components/ui/StarBorder";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
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
              <h2 className="mt-4 site-h3">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5f7d5f]">{service.summary}</p>
            </Link>
          </StarBorder>
        ))}
      </div>
    </section>
  );
}
