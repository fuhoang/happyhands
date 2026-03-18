import { ReactNode } from "react";
import InfoCard from "@/components/ui/InfoCard";

const benefits: Array<{ label: string; icon: ReactNode }> = [
  {
    label: "Work full-time or part-time",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 6V4h6v2" />
      </svg>
    ),
  },
  {
    label: "Choose your working days & hours",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Choose your working areas",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Earn £12.50-£13.50 per hour + tips",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <path d="M12 4v16" />
        <path d="M16 7.5c0-1.4-1.8-2.5-4-2.5S8 6.1 8 7.5 9.8 10 12 10s4 1.1 4 2.5S14.2 15 12 15s-4-1.1-4-2.5" />
      </svg>
    ),
  },
  {
    label: "Regular local customers",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M4 19c0-2.8 2.3-5 5-5h1c2.8 0 5 2.2 5 5" />
        <path d="M14.5 18c.2-1.9 1.8-3.5 3.8-3.5" />
      </svg>
    ),
  },
  {
    label: "Manage everything in your app",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 6h4" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "7-day cleaner support",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <path d="M12 21c4.4 0 8-3.6 8-8V7l-8-3-8 3v6c0 4.4 3.6 8 8 8Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </svg>
    ),
  },
  {
    label: "Start immediately",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
        <path d="M12 3v18" />
        <path d="m7 8 5-5 5 5" />
      </svg>
    ),
  },
];

export default function RecruitmentBenefits() {
  return (
    <InfoCard className="p-8 sm:p-10">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
          Why cleaners join
        </p>
        <h2 className="mt-3 site-h2">What you get with Happy Hands</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5f7d69]">
          You&apos;ll get more jobs with Happy Hands than anywhere else, all in a
          local area. That means less time travelling and more time earning.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <li
            key={benefit.label}
            className="flex items-start gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-4"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
              {benefit.icon}
            </span>
            <span className="text-sm font-semibold leading-7 text-[#163316]">
              {benefit.label}
            </span>
          </li>
        ))}
      </ul>
    </InfoCard>
  );
}
