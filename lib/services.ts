export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  body?: string[];
  points: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "after-builders-cleaning",
    title: "After Builders Cleaning",
    summary:
      "24-hour after builders cleaning support with flexible specialist cleaners for construction, fit-out, and handover work.",
    intro:
      "Happy Hands provides a 24-hour after builders cleaning service. At very short notice we can provide from 2 to 35 specialist spring cleaners. Our after builders cleaners have worked on many construction projects and we understand that we need to be flexible in order for you to successfully complete your work and hand over to the client.",
    body: [
      "Happy Hands provides a 24hr after builders cleaning service. At very short notice we can provide from 2-35 specialist spring cleaners.",
      "Our after builders cleaners have worked on many construction projects and we understand that we need to be flexible in order for you to successfully complete your work and hand-over to the client.",
      "We have worked with some of the leading Construction, Design & Build, Interior fit-outs and Design companies in the UK.",
      "Operating closely with Contracts Managers and Clients to ensure final finish and handover is successful.",
      "The aim is to clean, dust, deodorize and buff, so that the site smells like a ‘flower shop’ and not a construction site after the builders have left.",
      "We are off-course CIS registered and are members of the British Institute of Cleaning Science and the Institute of Directors.",
    ],
    points: [
      "24hr service with rapid availability for 2 to 35 specialist spring cleaners",
      "Flexible support for construction projects, interior fit-outs, and final handovers",
      "Close coordination with Contracts Managers and Clients throughout the finishing stage",
      "Detailed cleaning, dusting, deodorizing, and buffing before client handover",
      "CIS registered and members of the British Institute of Cleaning Science and the Institute of Directors",
    ],
  },
  {
    slug: "after-party-cleaning",
    title: "After Party Cleaning",
    summary:
      "Professional after party cleaning for venues, offices, and event spaces that need to be reset quickly and properly.",
    intro:
      "We are professionals at after party cleaning. When the party is over and the venue needs to be cleaned up, we are the people you can call and count on.",
    body: [
      "At relatively short notice we can visit your establishment and get it back to its original state so that you can continue to operate as normal.",
      "After your office party, we’ll get your workplace back to a place of business in no time at all.",
      "We can also clean a venue before a party or event. Let our fully trained team prepare your venue for a spectacular occasion, and when you’re done we’ll come back and clean it all up!",
      "Contact us for:",
      "After party cleaning at venues",
      "Wedding cleaning",
      "Waiters & waitresses",
      "Toilet/restroom attendants",
      "Bar staff",
      "Before party cleaning personnel",
      "Carpet cleaners (subject to inspection)",
      "Floor polishing",
      "Handymen for repairs",
      "After party cleaning at the office",
    ],
    points: [
      "Clear-up support after private, family, or business events",
      "Kitchen, bathroom, floor, and surface cleaning included",
      "Flexible scheduling for urgent or next-day cleanups",
    ],
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    summary:
      "Professional carpet care to refresh appearance, lift buildup, and help maintain a cleaner indoor environment.",
    intro:
      "Happy Hands offers carpet cleaning support designed to improve presentation, freshness, and day-to-day cleanliness across busy domestic and commercial spaces. This service is ideal for properties where carpets need extra care beyond routine surface cleaning.",
    points: [
      "Suitable for homes, offices, and managed commercial settings",
      "Helps improve presentation in high-traffic and heavily used areas",
      "Can be arranged as part of a wider cleaning or reset package",
    ],
  },
  {
    slug: "end-of-tenancy-cleaners-london",
    title: "End of Tenancy Cleaners London",
    summary:
      "Comprehensive move-in and move-out cleaning support for rented homes and managed properties across London.",
    intro:
      "Our end of tenancy cleaning service is designed to help tenants, landlords, property managers, and letting agents prepare properties for handover. We focus on getting the property clean, presentable, and ready for its next stage of occupancy.",
    points: [
      "Detailed cleaning for full property resets and handovers",
      "Support for lettings, landlords, tenants, and managed properties",
      "Available across London and surrounding service areas",
    ],
  },
  {
    slug: "event-cleaning",
    title: "Event Cleaning",
    summary:
      "Cleaning support before, during, and after events to keep venues organised, presentable, and guest-ready.",
    intro:
      "Happy Hands provides reliable event cleaning for private, corporate, hospitality, and public-facing environments where presentation matters. We help maintain a clean environment before guests arrive and after the event has finished.",
    points: [
      "Pre-event preparation, live support, and post-event cleanup",
      "Suitable for venues, hospitality spaces, and shared event environments",
      "Responsive scheduling built around event timings and access windows",
    ],
  },
  {
    slug: "fogging",
    title: "Fogging",
    summary:
      "Specialist fogging support for disinfecting treatment requirements and hygiene-focused environments.",
    intro:
      "Our fogging service supports environments that require an additional disinfecting process alongside broader cleaning standards. It is designed for clients who need an extra hygiene-focused treatment as part of their cleaning programme.",
    points: [
      "Suitable for hygiene-sensitive and high-contact environments",
      "Can complement regular or specialist cleaning programmes",
      "Backed by supporting health and safety documentation and records",
    ],
  },
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    summary:
      "Routine and deep cleaning support for houses, apartments, and busy family spaces.",
    intro:
      "Happy Hands offers home cleaning services built around consistency, trust, and attention to detail in everyday living spaces. Whether you need regular support or a more intensive clean, we tailor the service around your property and routine.",
    points: [
      "General domestic cleaning, refresh work, and deep-clean support",
      "Tailored around your schedule, priorities, and property needs",
      "Reliable support from a trusted and experienced cleaning team",
    ],
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    summary:
      "Professional office cleaning to support presentation, hygiene, and a dependable workplace environment every day.",
    intro:
      "Our office cleaning service is designed for businesses that need consistent standards, responsive communication, and flexible scheduling. We help workplaces stay clean, professional, and comfortable for staff, visitors, and clients.",
    points: [
      "Suitable for offices, shared workspaces, and managed business premises",
      "Focus on presentation, hygiene, desks, kitchens, washrooms, and touchpoints",
      "Available as regular scheduled support or a tailored arrangement",
    ],
  },
  {
    slug: "retail-cleaning",
    title: "Retail Cleaning",
    summary:
      "Cleaning support for customer-facing retail environments where appearance, hygiene, and consistency are essential.",
    intro:
      "Happy Hands helps retail spaces stay clean, polished, and ready for staff and customers throughout trading periods. We understand the importance of maintaining a professional appearance in environments that are seen by the public every day.",
    points: [
      "Customer-facing presentation standards across the full store environment",
      "Support for shop floors, counters, fittings, and shared staff areas",
      "Flexible scheduling around trading hours where needed",
    ],
  },
  {
    slug: "rental-turnovers",
    title: "Rental Turnovers",
    summary:
      "Fast-turnaround cleaning support for short lets, managed properties, and busy changeover periods.",
    intro:
      "Our rental turnover service helps prepare properties quickly between occupants, guests, or scheduled use. Happy Hands focuses on readiness, presentation, and efficient turnaround support for managed homes and short-stay environments.",
    points: [
      "Designed for tight changeover windows and fast resets",
      "Suitable for managed homes, serviced properties, and short-let settings",
      "Focused on readiness, presentation, and reliable handover standards",
    ],
  },
  {
    slug: "washing-and-ironing",
    title: "Washing and Ironing",
    summary:
      "Laundry support services to help keep clothing, linen, and household items organised, fresh, and presentable.",
    intro:
      "Happy Hands provides washing and ironing support as part of a broader practical cleaning service for homes and managed spaces. This service helps clients stay on top of laundry tasks where time, presentation, and convenience matter.",
    points: [
      "Convenient support for busy households and managed properties",
      "Can complement regular domestic or turnover cleaning services",
      "Helpful for guest-ready, family, and day-to-day living environments",
    ],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceItem>;
