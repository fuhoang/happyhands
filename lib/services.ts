export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  heroImage: string;
  body?: string[];
  points: string[];
};

export type ServicePageContent = {
  heroEyebrow: string;
  overviewTitle: string;
  ctaEyebrow: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  breadcrumbHomeLabel: string;
  breadcrumbIndexLabel: string;
};

export type ServicesIndexContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
};

export const services: ServiceItem[] = [
  {
    slug: "after-builders-cleaning",
    title: "After Builders Cleaning",
    heroImage:
      "https://images.pexels.com/photos/5691620/pexels-photo-5691620.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Specialist post-construction cleaning delivered on short notice for smooth project handover.",
    intro:
      "Happy Hands provides a responsive 24-hour after builders cleaning service for construction, refurbishment and fit-out projects across London and the surrounding areas.",
    body: [
      "At short notice, we can deploy from 2 to 35 specialist cleaners to support projects of different sizes and timelines.",
      "Our teams have worked across a wide range of construction environments, and we understand the importance of flexibility when deadlines are tight and handover standards are high.",
      "We have supported leading construction, design and build, interior fit-out and design companies throughout the UK, working closely with contracts managers and clients to help ensure a successful final finish and handover.",
      "Our objective is to clean, dust, deodorise and buff the site thoroughly so that the finished space feels fresh, presentable and ready for occupation, rather than resembling an active construction environment.",
      "Happy Hands is CIS registered and is a member of both the British Institute of Cleaning Science and the Institute of Directors.",
    ],
    points: [
      "24-hour response for urgent post-build cleans",
      "Flexible teams from 2 to 35 specialist cleaners",
      "Support for fit-out, refurbishment and construction handovers",
      "Close coordination with contracts managers and clients",
      "CIS registered with recognised industry memberships",
    ],
  },
  {
    slug: "after-party-cleaning",
    title: "After Party Cleaning",
    heroImage:
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Fast, reliable venue recovery before or after events, parties and corporate functions.",
    intro:
      "Happy Hands provides professional after party cleaning services for venues, private events and office functions, helping you restore the space quickly and efficiently once the event is over.",
    body: [
      "When the party has finished and the venue needs to be returned to order, our team can attend at short notice and carry out a thorough clean so normal operations can resume without delay.",
      "We also support office environments after staff events, restoring workplaces to a clean, professional standard with minimal disruption.",
      "In addition to post-event cleaning, we can help prepare a venue before an event takes place, ensuring the space is presented to a high standard from the outset.",
      "Our wider event support can include venue cleaning, wedding cleaning, waiters and waitresses, toilet and restroom attendants, bar staff, pre-event cleaning personnel, carpet cleaning subject to inspection, floor polishing, handyman support for minor repairs and office after party cleaning.",
    ],
    points: [
      "Short-notice attendance for post-event recovery",
      "Pre-event and post-event venue cleaning",
      "Support for offices, venues, weddings and private events",
      "Additional staffing options where required",
      "Carpet cleaning, floor polishing and minor repair support",
    ],
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    heroImage:
      "https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Professional carpet and upholstery cleaning for homes, workplaces and managed properties.",
    intro:
      "Happy Hands provides a comprehensive carpet cleaning service for both domestic and commercial environments, covering everything from carpets and rugs to upholstery and soft furnishings.",
    body: [
      "Our service covers carpets, Oriental and Persian rugs, cushions and upholstery, using methods selected to suit the material, condition and level of soiling.",
      "We offer hot water extraction and wet cleaning systems, as well as a specialist dry foam cleaning system and controlled settings for delicate items where a more careful approach is required.",
      "All products used are self-neutralising, non-toxic and biodegradable, supporting a safe and professional clean.",
      "Our focus is always on delivering strong results at a fair price. We take pride in helping to revive carpets and restore a fresher, cleaner finish underfoot.",
      "Our carpet cleaning operatives are carefully vetted and selected to maintain the high standards clients expect from Happy Hands.",
    ],
    points: [
      "Domestic and commercial carpet cleaning",
      "Rugs, upholstery, cushions and delicate fabrics",
      "Wet cleaning and dry foam cleaning options",
      "Non-toxic and biodegradable products",
      "Experienced and thoroughly vetted operatives",
    ],
  },
  {
    slug: "end-of-tenancy-cleaners-london",
    title: "End of Tenancy Cleaners London",
    heroImage:
      "https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Tailored end of tenancy cleaning for tenants, landlords and property professionals.",
    intro:
      "If you are moving out of a rental property or preparing a property for marketing or re-letting, Happy Hands can deliver a detailed end of tenancy clean designed to leave the premises in excellent condition.",
    body: [
      "Our specialist cleaners are available 24 hours a day, 7 days a week, and we tailor our work to meet inventory requirements and the expectations of property management companies.",
      "We have supported leading property management businesses, letting agents and estate agents across a wide range of properties, from studio flats to larger residential portfolios.",
      "Every property is approached with care and attention to detail, whether the requirement is a standard handover clean or a more extensive programme of cleaning and remedial support.",
      "In addition to end of tenancy cleaning, clients can request carpet cleaning, minor repair work, painting and decorating, and presentation support to help a property achieve a strong show-home finish before going to market.",
    ],
    points: [
      "24/7 availability for tenancy changeovers",
      "Cleaning aligned to inventory and management requirements",
      "Experience across studios, houses and larger portfolios",
      "Additional carpet cleaning and remedial support available",
      "Suitable for tenants, landlords and letting professionals",
    ],
  },
  {
    slug: "event-cleaning",
    title: "Event Cleaning",
    heroImage:
      "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Flexible event cleaning for venues, exhibitions, fashion shows, concerts and large-scale functions.",
    intro:
      "Happy Hands provides a 24-hour event cleaning service for exhibitions, fashion shows, museums, pop concerts, parties and other live events requiring a reliable and adaptable cleaning partner.",
    body: [
      "At short notice, we can provide from 2 to 35 specialist cleaners, together with toilet attendants and carpet cleaners, depending on the size and operational demands of the event.",
      "We are comfortable working to an event manager’s specification or helping shape the cleaning requirement based on our own experience of live event environments.",
      "Our team has supported leading event management companies, museums and fashion houses, and has provided services for large events including the O2 Wireless Festival in Hyde Park.",
      "Our aim is to clean, disinfect, dust, deodorise and buff the venue so that it is fresh, presentable and ready for guests, exhibitors or reopening.",
      "Where required, we can also provide related services such as carpet cleaning, remedial repair work, painting and decorating to help prepare the venue fully.",
    ],
    points: [
      "24-hour event cleaning coverage",
      "Flexible team sizes for changing event demands",
      "Support for concerts, exhibitions, museums and parties",
      "Toilet attendants and carpet cleaners available",
      "Additional preparation and remedial services on request",
    ],
  },
  {
    slug: "fogging",
    title: "Fogging",
    heroImage:
      "https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Professional fogging and sanitisation support for workplaces and high-contact environments.",
    intro:
      "Happy Hands provides a professional Covid-19 fogging and sanitisation service designed to help neutralise contamination risks across workplace surfaces and shared environments.",
    body: [
      "We use Vivid SENSE fogging solution together with specialist spray equipment to distribute a fine fog across affected areas, helping treat surfaces where viruses and bacteria may present a hazard if left unattended.",
      "All products and procedures are supported by the appropriate fogging documentation, giving clients confidence in the service and its supporting information.",
      "While the solution used is not toxic to humans, we place equal importance on the safety of our technicians and our clients. Operators are equipped with appropriate masks, goggles, hazmat suits and gloves to protect against discomfort and potential contamination.",
      "We recognise that many businesses need to continue operating during normal working hours, so we schedule visits at times that are practical for your organisation and your customers wherever possible.",
    ],
    points: [
      "Workplace fogging and sanitisation support",
      "Specialist equipment and documented solutions",
      "Technicians equipped with appropriate PPE",
      "Practical scheduling around business operations",
      "Suitable for offices and other shared environments",
    ],
  },
  {
    slug: "home-cleaning",
    title: "Home Cleaning",
    heroImage:
      "https://images.pexels.com/photos/4107128/pexels-photo-4107128.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Reliable domestic cleaning tailored to the needs of busy households.",
    intro:
      "Happy Hands provides professional home cleaning services designed to help households maintain a consistently clean, well-presented and comfortable living environment.",
    body: [
      "We support a wide range of domestic cleaning requirements, from regular scheduled visits to one-off deep cleans, with services tailored to the size, layout and priorities of each home.",
      "Our team can focus on kitchens, bathrooms, bedrooms, living areas and other high-use spaces, ensuring attention to detail across the areas that matter most day to day.",
      "Whether you require ongoing support to maintain standards or additional help at key times, we provide a dependable, professional service shaped around your home and routine.",
    ],
    points: [
      "Regular or one-off domestic cleaning visits",
      "Cleaning tailored to each home and household",
      "Attention to kitchens, bathrooms and living areas",
      "Dependable scheduling and professional standards",
      "Suitable for busy families and individual households",
    ],
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    heroImage:
      "https://images.pexels.com/photos/6197118/pexels-photo-6197118.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Professional office cleaning that supports presentation, hygiene and day-to-day business operations.",
    intro:
      "First impressions matter, and a clean working environment says a great deal about your organisation. Happy Hands provides office cleaning services that help maintain a professional appearance while supporting the wellbeing of staff and visitors.",
    body: [
      "We develop cleaning schedules that reflect your business needs and budget, using specialist equipment to deliver an efficient and effective service.",
      "Wherever possible, we use environmentally responsible products that are kinder to both the workplace and the people using it.",
      "Our teams attend at times that support the smooth operation of your business, and we can also provide emergency cleaning when unexpected incidents occur.",
      "Office cleaning services are delivered by a friendly, fully trained team, and wherever possible we aim to provide continuity of personnel so cleaners remain familiar with the building layout and internal procedures.",
    ],
    points: [
      "Cleaning schedules built around business operations",
      "Specialist equipment and eco-conscious product choices",
      "Out-of-hours and emergency cleaning available",
      "Consistent, fully trained cleaning personnel",
      "Suitable for reception areas, offices and shared spaces",
    ],
  },
  {
    slug: "retail-cleaning",
    title: "Retail Cleaning",
    heroImage:
      "https://images.pexels.com/photos/7937657/pexels-photo-7937657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Flexible retail cleaning for shops, department stores and larger retail environments.",
    intro:
      "At Happy Hands, we understand the importance of a clean retail environment, from the shopfront and display areas through to the wider customer and staff experience.",
    body: [
      "We know that retail cleaning must work around demanding trading hours and changing operational pressures, so our service is designed to be flexible while minimising disruption.",
      "Our teams support the full retail spectrum, from individual stores and department stores through to larger shopping centres, with cleaning programmes tailored to seasonal demand and variations in footfall.",
      "All services are delivered by fully trained and vetted teams, giving clients confidence in both service quality and professionalism.",
      "Our retail cleaning service is available 24 hours a day, 7 days a week, and can also include consumables support and janitorial tasks where required.",
    ],
    points: [
      "Cleaning support across the retail sector",
      "Programmes adapted to seasonality and footfall",
      "Minimal disruption to trading operations",
      "24/7 service availability",
      "Janitorial support and consumables available",
    ],
  },
  {
    slug: "rental-turnovers",
    title: "Rental Turnovers",
    heroImage:
      "https://images.pexels.com/photos/7218579/pexels-photo-7218579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Efficient turnover cleaning for rental properties between occupancies.",
    intro:
      "Happy Hands provides rental turnover cleaning services that help landlords, agents and property managers prepare homes and apartments quickly between tenancies, guests or short-let stays.",
    body: [
      "Our service is designed to restore the property to a clean, welcoming and ready-to-occupy condition, with attention given to presentation as well as hygiene.",
      "We can support managed portfolios, individual rental units and short-term accommodation, working to practical turnaround times while maintaining professional standards throughout the property.",
      "Where required, turnover cleaning can also be combined with related services to help ensure the property is ready for the next occupant without delay.",
    ],
    points: [
      "Turnover cleaning for rentals and managed properties",
      "Fast preparation between occupancies",
      "Suitable for landlords, agents and short-let operators",
      "Focus on readiness, hygiene and presentation",
      "Can be combined with additional support services",
    ],
  },
  {
    slug: "washing-and-ironing",
    title: "Washing and Ironing",
    heroImage:
      "https://images.pexels.com/photos/5202797/pexels-photo-5202797.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Convenient laundry support for homes, managed properties and busy households.",
    intro:
      "Happy Hands provides washing and ironing services to help clients keep clothing, household linen and day-to-day laundry organised, presentable and ready for use.",
    body: [
      "The service is suitable for busy households, managed properties and clients who want dependable support with routine laundry tasks as part of a broader cleaning arrangement or as a standalone requirement.",
      "We handle washing and ironing with care, supporting a neat, practical and professional finish across everyday garments, bedding and household fabrics.",
      "Our approach is designed to save time for clients while maintaining consistency and attention to presentation.",
    ],
    points: [
      "Laundry support for homes and managed properties",
      "Washing and ironing handled with care",
      "Suitable for regular household linen and garments",
      "Can complement wider domestic cleaning support",
      "Designed for convenience and consistency",
    ],
  },
  {
    slug: "leisure-and-hospitality-cleaning",
    title: "Leisure and Hospitality Cleaning",
    heroImage:
      "https://images.pexels.com/photos/4871115/pexels-photo-4871115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Specialist cleaning for bars, restaurants, clubs and other hospitality venues.",
    intro:
      "If you own or manage a bar, pub, restaurant or club, maintaining a consistently clean environment is essential to customer confidence, staff wellbeing and the overall reputation of the business.",
    body: [
      "High footfall and long opening hours create particular cleaning pressures, and with customers having many venues to choose from, cleanliness forms an important part of the overall leisure experience.",
      "Happy Hands has the experience to advise on an effective cleaning schedule that supports the smooth running of your premises, whether you operate a busy pub, a bar or club, or an exclusive restaurant.",
      "We understand the importance of hygiene throughout customer-facing areas as well as the impact that cleaning standards have on your reputation and operational confidence.",
      "Our professional team is trained in leisure and hospitality health and safety cleaning, and wherever possible we provide continuity of operatives so your premises are looked after by people familiar with the agreed requirements.",
      "In addition to front-of-house cleaning, we also provide back-of-house cleans to help maintain high hygiene standards in food preparation and service areas.",
    ],
    points: [
      "Cleaning for pubs, bars, restaurants and clubs",
      "Schedules designed around trading patterns",
      "Front-of-house and back-of-house coverage",
      "Health and safety aware hospitality cleaning teams",
      "Continuity of operatives where possible",
    ],
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  ServiceItem
>;

export const servicePageContent: ServicePageContent = {
  heroEyebrow: "Happy Hands Service",
  overviewTitle: "Service overview",
  ctaEyebrow: "Ready to book",
  ctaDescription:
    "Speak to Happy Hands about availability, property details, and the cleaning support you need.",
  ctaPrimaryLabel: "Contact Happy Hands",
  ctaSecondaryLabel: "Back to all services",
  breadcrumbHomeLabel: "Home",
  breadcrumbIndexLabel: "Services",
};

export const servicesIndexContent: ServicesIndexContent = {
  heroEyebrow: "Happy Hands Services",
  heroTitle: "Cleaning services for homes, businesses, events, and managed properties.",
  heroDescription:
    "Explore the full Happy Hands service range and choose the cleaning support that fits your property, schedule, and operational needs.",
  heroImage:
    "https://images.pexels.com/photos/6197120/pexels-photo-6197120.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export function getServiceBySlug(slug: string) {
  return serviceMap[slug];
}

export function getServiceQuoteHref(service: ServiceItem) {
  return `/contact?service=${encodeURIComponent(service.title)}#quote-request`;
}

export function getServiceCtaTitle(service: ServiceItem) {
  return `Request a tailored quote for ${service.title.toLowerCase()}.`;
}

export function getServicePageProps(service: ServiceItem) {
  return {
    heroEyebrow: servicePageContent.heroEyebrow,
    overviewTitle: servicePageContent.overviewTitle,
    ctaEyebrow: servicePageContent.ctaEyebrow,
    ctaTitle: getServiceCtaTitle(service),
    ctaDescription: servicePageContent.ctaDescription,
    ctaPrimaryHref: getServiceQuoteHref(service),
    ctaPrimaryLabel: servicePageContent.ctaPrimaryLabel,
    ctaSecondaryHref: "/services",
    ctaSecondaryLabel: servicePageContent.ctaSecondaryLabel,
  };
}
