import StarBorder from "@/components/StarBorder";
import { renderServiceIcon } from "@/components/shared/ServiceIcons";
import { homeContent } from "@/lib/site-content";

const cards = [
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    copy:
      "Routine and deep-clean packages for kitchens, bathrooms, bedrooms, living rooms, and busy family spaces.",
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    copy:
      "Flexible cleaning for studios, shops, and office spaces that need a polished look every day.",
  },
  {
    slug: "rental-turnovers",
    title: "Rental Turnovers",
    copy:
      "Quick resets for Airbnb and short-term rentals with detail work that keeps every arrival guest-ready.",
  },
  {
    slug: "retail-cleaning",
    title: "Retail Cleaning",
    copy:
      "Reliable cleaning for shops and retail spaces with polished floors, tidy displays, and a welcoming customer environment.",
  },
  {
    slug: "leisure-and-hospitality-cleaning",
    title: "Leisure and Hospitality Cleaning",
    copy:
      "Cleaning support for hotels, restaurants, lounges, and leisure venues that need a spotless guest-ready presentation.",
  },
  {
    slug: "event-cleaning",
    title: "Event Cleaning",
    copy:
      "Pre-event preparation, during-event upkeep, and post-event cleaning for venues that need fast, professional turnaround.",
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#008000]">
          Services
        </p>
        <h2 className="mt-3 site-h2-lg">{homeContent.servicesHeading}</h2>
        <p className="mt-4 text-base leading-8 text-[#6f8f6f]">{homeContent.servicesCopy}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <StarBorder
            key={card.title}
            as="div"
            color="#4f4f4f"
            speed="4.5s"
            thickness={4}
            className="service-star h-full"
          >
            <article className="group flex h-full flex-col rounded-md bg-white p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] transition">
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white transition duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {renderServiceIcon(card.slug)}
              </div>
              <h3 className="mt-5 site-h3">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6f8f6f]">{card.copy}</p>
            </article>
          </StarBorder>
        ))}
      </div>
    </section>
  );
}
