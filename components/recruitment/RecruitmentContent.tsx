import { ReactNode } from "react";
import InfoCard from "@/components/shared/InfoCard";

const benefits: Array<{ label: string; icon: ReactNode }> = [
  {
    label: "Work full-time or part-time",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 6V4h6v2" />
      </svg>
    ),
  },
  {
    label: "Choose your working days & hours",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Choose your working areas",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Earn £12.50-£13.50 per hour + tips",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <path d="M12 4v16" />
        <path d="M16 7.5c0-1.4-1.8-2.5-4-2.5S8 6.1 8 7.5 9.8 10 12 10s4 1.1 4 2.5S14.2 15 12 15s-4-1.1-4-2.5" />
      </svg>
    ),
  },
  {
    label: "Regular local customers",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
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
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10 6h4" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "7-day cleaner support",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <path d="M12 21c4.4 0 8-3.6 8-8V7l-8-3-8 3v6c0 4.4 3.6 8 8 8Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.7" />
      </svg>
    ),
  },
  {
    label: "Start immediately",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <path d="M12 3v18" />
        <path d="m7 8 5-5 5 5" />
      </svg>
    ),
  },
];

const cleaningExperienceOptions = [
  "Private homes",
  "Agency cleaning",
  "Office cleaning",
  "End of tenancy",
  "Deep cleaning",
  "Hospitality cleaning",
];

const workingDayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const eligibilityOptions = [
  "I am eligible to work in the UK.",
  "I can travel to local cleaning jobs.",
  "I am comfortable working in customers' homes.",
  "I am happy to complete checks and onboarding.",
];

export default function RecruitmentContent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <InfoCard className="p-8 sm:p-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Why cleaners join
          </p>
          <h2 className="mt-3 site-h2">What you get with Happy Hands</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5f7d69]">
            You&apos;ll get more jobs with Happy Hands than anywhere else, all
            in a local area. That means less time travelling and more time
            earning.
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

      <div className="mt-10">
        <div>
          <InfoCard className="p-8 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
              Cleaner application
            </p>
            <h2 className="mt-3 site-h2">Apply to join Happy Hands</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f7d69]">
              Fill in your details below and we will review your application for
              cleaner work.
            </p>

            <form
              className="mt-8 grid gap-10"
              action="mailto:fuhoang84@googlemail.com?subject=Cleaner%20Application"
              method="post"
              encType="text/plain"
            >
              <section className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <h3 className="site-h3">About you</h3>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    First name(s)
                  </span>
                  <input
                    name="firstName"
                    type="text"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    Last name
                  </span>
                  <input
                    name="lastName"
                    type="text"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    UK mobile number
                  </span>
                  <input
                    name="mobileNumber"
                    type="tel"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    Email address
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    Confirm email address
                  </span>
                  <input
                    name="confirmEmail"
                    type="email"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    Gender
                  </span>
                  <select
                    name="gender"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  >
                    <option value="">(optional)</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm font-bold text-[#163316]">
                    UK home postcode
                  </span>
                  <input
                    name="postcode"
                    type="text"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>
              </section>

              <section className="grid gap-5">
                <h3 className="site-h3">Your experience</h3>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    How much experience do you have in professional home
                    cleaning?
                  </span>
                  <select
                    name="experienceLength"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  >
                    <option value="">Please select</option>
                    <option>Less than 6 months</option>
                    <option>6 to 12 months</option>
                    <option>1 to 2 years</option>
                    <option>2 to 5 years</option>
                    <option>5+ years</option>
                  </select>
                </label>

                <fieldset className="grid gap-3">
                  <legend className="text-sm font-bold text-[#163316]">
                    What type of cleaning experience do you have?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cleaningExperienceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]"
                      >
                        <input
                          name="cleaningExperience"
                          value={option}
                          type="checkbox"
                          className="h-4 w-4 accent-[#008000]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    Please describe your home cleaning experience
                  </span>
                  <span className="text-sm text-[#5f7d69]">
                    e.g. &quot;I cleaned houses through an agency for 2
                    years.&quot;
                  </span>
                  <textarea
                    name="experienceDetails"
                    rows={5}
                    className="rounded-sm border border-[#cfe1cf] px-4 py-3 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  />
                </label>
              </section>

              <section className="grid gap-5">
                <h3 className="site-h3">Your availability</h3>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    How many hours of cleaning work do you want per week?
                  </span>
                  <select
                    name="hoursPerWeek"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  >
                    <option value="">Please select</option>
                    <option>Up to 10 hours</option>
                    <option>10 to 20 hours</option>
                    <option>20 to 30 hours</option>
                    <option>30+ hours</option>
                  </select>
                </label>

                <fieldset className="grid gap-3">
                  <legend className="text-sm font-bold text-[#163316]">
                    Which days do you want to work?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {workingDayOptions.map((day) => (
                      <label
                        key={day}
                        className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]"
                      >
                        <input
                          name="workingDays"
                          value={day}
                          type="checkbox"
                          className="h-4 w-4 accent-[#008000]"
                        />
                        <span>{day}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">
                    How long would you like to work with Happy Hands?
                  </span>
                  <select
                    name="workDuration"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] px-4 text-sm text-[#163316] outline-none focus:border-[#008000]"
                  >
                    <option value="">Please fill this in.</option>
                    <option>Just a few months</option>
                    <option>6 to 12 months</option>
                    <option>1 year or more</option>
                    <option>Long term</option>
                  </select>
                </label>
              </section>

              <section className="grid gap-5">
                <h3 className="site-h3">Eligibility</h3>

                <fieldset className="grid gap-3">
                  <legend className="text-sm font-bold text-[#163316]">
                    Please confirm:
                  </legend>
                  <div className="grid gap-3">
                    {eligibilityOptions.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]"
                      >
                        <input
                          name="eligibilityConfirmations"
                          value={item}
                          type="checkbox"
                          className="h-4 w-4 accent-[#008000]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </section>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600]"
                >
                  Submit application
                </button>
                <a
                  href="mailto:fuhoang84@googlemail.com?subject=Cleaner%20Application"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#b7ddb7] bg-white px-8 text-sm font-black uppercase tracking-[0.16em] text-[#008000] transition hover:bg-[#f3fff3]"
                >
                  Apply by email instead
                </a>
              </div>
            </form>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
