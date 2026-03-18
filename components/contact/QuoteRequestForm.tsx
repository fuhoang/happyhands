"use client";

import { FormEvent, useMemo, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";

const services = [
  "Home Cleaning",
  "Office Cleaning",
  "End of Tenancy",
  "Carpet Cleaning",
  "After Builders Cleaning",
  "Event Cleaning",
  "Fogging",
  "Other",
];

const propertyTypes = ["House", "Flat", "Office", "Retail", "Hospitality Venue", "Other"];

const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly", "Not sure yet"];

type QuoteRequestFormProps = {
  prefilledService?: string;
};

export default function QuoteRequestForm({ prefilledService = "" }: QuoteRequestFormProps) {
  const validPrefilledService = useMemo(
    () => (prefilledService && services.includes(prefilledService) ? prefilledService : ""),
    [prefilledService]
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const validate = (formData: FormData) => {
    const nextErrors: Record<string, string> = {};
    const fullName = formData.get("fullName")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const service = formData.get("service")?.toString().trim() ?? "";
    const propertyType = formData.get("propertyType")?.toString().trim() ?? "";
    const frequency = formData.get("frequency")?.toString().trim() ?? "";
    const postcode = formData.get("postcode")?.toString().trim() ?? "";
    const details = formData.get("details")?.toString().trim() ?? "";

    if (!fullName) nextErrors.fullName = "Enter your full name.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!phone) nextErrors.phone = "Enter a phone number.";
    if (!service) nextErrors.service = "Select a service.";
    if (!propertyType) nextErrors.propertyType = "Select a property type.";
    if (!frequency) nextErrors.frequency = "Select a frequency.";
    if (!postcode) nextErrors.postcode = "Enter the property postcode.";
    if (!details) nextErrors.details = "Add a short description of the work.";

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setStatusMessage("");

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result?.message ?? "Unable to submit your request right now.");
        return;
      }

      form.reset();
      setSelectedService("");
      setStatus("success");
      setStatusMessage(result?.message ?? "Quote request received.");
    } catch {
      setStatus("error");
      setStatusMessage("Unable to submit your request right now.");
    }
  };

  const fieldClassName =
    "min-h-12 rounded-sm border bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]";
  const errorClassName = "border-[#b42318]";
  const defaultClassName = "border-[#cfe1cf]";

  return (
    <section id="quote-request" className="bg-[#f7fbf7] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Quote request</p>
          <h2 className="mt-3 site-h2">Tell us what you need cleaned</h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
            Send the key details and Happy Hands will respond with a tailored
            quote for domestic, commercial, retail, hospitality, or specialist
            cleaning work.
          </p>
        </div>

        <div className="grid items-start gap-8 pt-8 sm:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="min-w-0">
            <InfoCard className="p-5 sm:p-8">
              {status === "success" ? (
                <div className="grid gap-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-[2.4]">
                      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Request received</p>
                    <h3 className="mt-3 site-h3">Thank you. Your quote request is on its way.</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f7d69]">{statusMessage}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setErrors({});
                        setStatus("idle");
                        setStatusMessage("");
                      }}
                      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600]"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
              <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    aria-invalid={errors.fullName ? "true" : "false"}
                    className={`${fieldClassName} ${errors.fullName ? errorClassName : defaultClassName}`}
                  />
                  {errors.fullName ? <span className="text-sm font-semibold text-[#b42318]">{errors.fullName}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`${fieldClassName} ${errors.email ? errorClassName : defaultClassName}`}
                  />
                  {errors.email ? <span className="text-sm font-semibold text-[#b42318]">{errors.email}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    aria-invalid={errors.phone ? "true" : "false"}
                    className={`${fieldClassName} ${errors.phone ? errorClassName : defaultClassName}`}
                  />
                  {errors.phone ? <span className="text-sm font-semibold text-[#b42318]">{errors.phone}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Service Required</span>
                  <select
                    name="service"
                    value={selectedService || validPrefilledService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    aria-invalid={errors.service ? "true" : "false"}
                    className={`${fieldClassName} ${errors.service ? errorClassName : defaultClassName}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <span className="text-sm font-semibold text-[#b42318]">{errors.service}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Property Type</span>
                  <select
                    name="propertyType"
                    defaultValue=""
                    aria-invalid={errors.propertyType ? "true" : "false"}
                    className={`${fieldClassName} ${errors.propertyType ? errorClassName : defaultClassName}`}
                  >
                    <option value="" disabled>
                      Select property type
                    </option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.propertyType ? <span className="text-sm font-semibold text-[#b42318]">{errors.propertyType}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Frequency</span>
                  <select
                    name="frequency"
                    defaultValue=""
                    aria-invalid={errors.frequency ? "true" : "false"}
                    className={`${fieldClassName} ${errors.frequency ? errorClassName : defaultClassName}`}
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>
                    {frequencies.map((frequency) => (
                      <option key={frequency} value={frequency}>
                        {frequency}
                      </option>
                    ))}
                  </select>
                  {errors.frequency ? <span className="text-sm font-semibold text-[#b42318]">{errors.frequency}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Preferred Date</span>
                  <input
                    type="date"
                    name="preferredDate"
                    className={`${fieldClassName} ${defaultClassName}`}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Postcode</span>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Property postcode"
                    aria-invalid={errors.postcode ? "true" : "false"}
                    className={`${fieldClassName} ${errors.postcode ? errorClassName : defaultClassName}`}
                  />
                  {errors.postcode ? <span className="text-sm font-semibold text-[#b42318]">{errors.postcode}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Property Size</span>
                  <input
                    type="text"
                    name="propertySize"
                    placeholder="Bedrooms, floors, desks, or any useful size details"
                    className={`${fieldClassName} ${defaultClassName}`}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Additional Details</span>
                  <textarea
                    name="details"
                    rows={6}
                    placeholder="Tell us about the cleaning requirement, timing, access, or anything else that will help us quote accurately."
                    aria-invalid={errors.details ? "true" : "false"}
                    className={`rounded-sm border bg-white px-4 py-3 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000] ${errors.details ? errorClassName : defaultClassName}`}
                  />
                  {errors.details ? <span className="text-sm font-semibold text-[#b42318]">{errors.details}</span> : null}
                </label>

                <label className="hidden" aria-hidden="true">
                  Company
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>

                <div className="grid gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600] disabled:cursor-not-allowed disabled:bg-[#78aa78] sm:w-auto"
                  >
                    {status === "submitting" ? "Sending request..." : "Request Quote"}
                  </button>
                  {status === "error" ? <p className="text-sm font-semibold text-[#b42318]">{statusMessage}</p> : null}
                  <p className="text-sm leading-6 text-[#6f876f]">
                    We only use your details to review your enquiry and respond
                    with a quote.
                  </p>
                </div>
              </form>
              )}
            </InfoCard>
          </div>
          <div className="min-w-0">
            <InfoCard className="bg-white p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">What to include</p>
              <h3 className="mt-3 site-h3">Help us quote accurately</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
                <li>Tell us the service you need and whether it is one-off or ongoing.</li>
                <li>Include the property type, size, and postcode so we can assess scope.</li>
                <li>Mention any access restrictions, deadlines, or specialist cleaning requirements.</li>
                <li>Add preferred dates so we can respond with practical availability.</li>
              </ul>
              <div className="mt-8 border-t border-[#dce8dc] pt-6 text-sm leading-7 text-[#5f7d69]">
                <p className="font-black text-[#163316]">Need a faster response?</p>
                <p className="mt-2">
                  Call{" "}
                  <a href="tel:+447973403788" className="font-semibold text-[#008000] transition hover:text-[#006600]">
                    07973 403 788
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:happyhandscustomerservice@gmail.com"
                    className="font-semibold text-[#008000] transition hover:text-[#006600]"
                  >
                    happyhandscustomerservice@gmail.com
                  </a>
                  .
                </p>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
