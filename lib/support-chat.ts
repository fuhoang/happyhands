import { caseStudies } from "@/lib/case-studies";
import { RECRUITMENT_EMAIL_FALLBACK } from "@/lib/recruitment";
import { services } from "@/lib/services";
import { contactInfo } from "@/lib/site-content";

export type SupportChatLink = {
  href: string;
  label: string;
};

export type SupportChatReply = {
  text: string;
  links?: SupportChatLink[];
};

type SupportTopic = {
  keywords: string[];
  buildReply: () => SupportChatReply;
};

const serviceList = services.map((service) => service.title).join(", ");
const serviceLinks: SupportChatLink[] = services.slice(0, 4).map((service) => ({
  href: `/services/${service.slug}`,
  label: service.title,
}));

const topics: SupportTopic[] = [
  {
    keywords: ["quote", "price", "pricing", "cost", "book", "booking"],
    buildReply: () => ({
      text:
        "You can request a quote through the contact form. Share the service, property type, postcode, and any timing details so Happy Hands can respond with a tailored quote.",
      links: [
        { href: "/contact#quote-request", label: "Request a quote" },
        { href: contactInfo.phoneHref, label: `Call ${contactInfo.phoneDisplay}` },
      ],
    }),
  },
  {
    keywords: ["service", "services", "cleaning", "office", "home", "tenancy", "event", "fogging"],
    buildReply: () => ({
      text: `Happy Hands covers a wide range of services, including ${serviceList}.`,
      links: [{ href: "/services", label: "View all services" }, ...serviceLinks],
    }),
  },
  {
    keywords: ["contact", "phone", "email", "call"],
    buildReply: () => ({
      text: `You can contact Happy Hands by phone on ${contactInfo.phoneDisplay} or by email at ${contactInfo.email}.`,
      links: [
        { href: contactInfo.phoneHref, label: `Call ${contactInfo.phoneDisplay}` },
        { href: contactInfo.emailHref, label: "Email Happy Hands" },
        { href: "/contact", label: "Contact page" },
      ],
    }),
  },
  {
    keywords: ["join", "job", "jobs", "recruitment", "cleaner", "work"],
    buildReply: () => ({
      text:
        "If you want to work with Happy Hands, use the join-us page to submit your cleaner application with your experience, availability, and working areas.",
      links: [
        { href: "/join-us", label: "Join as a cleaner" },
        {
          href: `mailto:${RECRUITMENT_EMAIL_FALLBACK}?subject=Cleaner%20Application`,
          label: "Apply by email",
        },
      ],
    }),
  },
  {
    keywords: ["case", "case study", "examples", "clients", "portfolio"],
    buildReply: () => ({
      text:
        "Happy Hands has published case studies showing long-term residential cleaning support and compliance-led Covid cleaning delivery.",
      links: [
        { href: "/case-studies", label: "View case studies" },
        ...caseStudies.map((caseStudy) => ({
          href: `/case-studies/${caseStudy.slug}`,
          label: caseStudy.title,
        })),
      ],
    }),
  },
];

const defaultReply: SupportChatReply = {
  text:
    "I can help with services, quotes, contact details, recruitment, and case studies. Ask about pricing, booking, cleaner jobs, or a specific service.",
  links: [
    { href: "/services", label: "Services" },
    { href: "/contact#quote-request", label: "Get a quote" },
    { href: "/join-us", label: "Cleaner jobs" },
  ],
};

export function getSupportReply(message: string): SupportChatReply {
  const query = message.toLowerCase();
  const topic = topics.find((item) => item.keywords.some((keyword) => query.includes(keyword)));
  return topic ? topic.buildReply() : defaultReply;
}
