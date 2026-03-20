"use client";

import { FormEvent, useMemo, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import FormField from "@/components/ui/forms/FormField";
import SelectField from "@/components/ui/forms/SelectField";
import TextInput from "@/components/ui/forms/TextInput";
import TextareaField from "@/components/ui/forms/TextareaField";
import { FormSubmitStatus } from "@/lib/forms";

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
  const [status, setStatus] = useState<FormSubmitStatus>("idle");
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
                  <FormField label="Full Name" error={errors.fullName}>
                    <TextInput type="text" name="fullName" placeholder="Your full name" error={errors.fullName} />
                  </FormField>

                  <FormField label="Email Address" error={errors.email}>
                    <TextInput type="email" name="email" placeholder="you@example.com" error={errors.email} />
                  </FormField>

                  <FormField label="Phone Number" error={errors.phone}>
                    <TextInput type="tel" name="phone" placeholder="Your phone number" error={errors.phone} />
                  </FormField>

                  <FormField label="Service Required" error={errors.service}>
                    <SelectField
                      name="service"
                      value={selectedService || validPrefilledService}
                      onChange={(event) => setSelectedService(event.target.value)}
                      error={errors.service}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </SelectField>
                  </FormField>

                  <FormField label="Property Type" error={errors.propertyType}>
                    <SelectField name="propertyType" defaultValue="" error={errors.propertyType}>
                      <option value="" disabled>
                        Select property type
                      </option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </SelectField>
                  </FormField>

                  <FormField label="Frequency" error={errors.frequency}>
                    <SelectField name="frequency" defaultValue="" error={errors.frequency}>
                      <option value="" disabled>
                        Select frequency
                      </option>
                      {frequencies.map((frequency) => (
                        <option key={frequency} value={frequency}>
                          {frequency}
                        </option>
                      ))}
                    </SelectField>
                  </FormField>

                  <FormField label="Preferred Date">
                    <TextInput type="date" name="preferredDate" />
                  </FormField>

                  <FormField label="Postcode" error={errors.postcode}>
                    <TextInput type="text" name="postcode" placeholder="Property postcode" error={errors.postcode} />
                  </FormField>

                  <FormField label="Property Size">
                    <TextInput
                      type="text"
                      name="propertySize"
                      placeholder="Bedrooms, floors, desks, or square footage"
                    />
                  </FormField>

                  <FormField label="Additional Details" error={errors.details}>
                    <TextareaField
                      name="details"
                      rows={5}
                      placeholder="Tell us about the job, access, timing, or anything that affects the quote."
                      error={errors.details}
                    />
                  </FormField>

                  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="flex flex-wrap items-start gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
            <InfoCard className="p-5 sm:p-8">
              <div className="grid gap-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
                    Help us quote accurately
                  </p>
                  <h3 className="mt-3 site-h3">The more detail you share, the faster we can respond.</h3>
                </div>
                <ul className="grid gap-3 text-sm leading-7 text-[#4f694f]">
                  <li>Include the service you need and whether it is one-off or recurring.</li>
                  <li>Share the postcode and property size so we can judge travel and scope.</li>
                  <li>Use the details box for access notes, timing, or specialist requests.</li>
                  <li>If you need a same-day response, mention it clearly in the notes.</li>
                </ul>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
