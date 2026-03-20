"use client";

import { FormEvent, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import FormField from "@/components/ui/forms/FormField";
import SelectField from "@/components/ui/forms/SelectField";
import TextInput from "@/components/ui/forms/TextInput";
import TextareaField from "@/components/ui/forms/TextareaField";
import { FormSubmitStatus } from "@/lib/forms";
import {
  cleaningExperienceOptions,
  eligibilityOptions,
  RECRUITMENT_EMAIL_FALLBACK,
  workingDayOptions,
} from "@/lib/recruitment";

export default function RecruitmentApplicationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormSubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (formData: FormData) => {
    const nextErrors: Record<string, string> = {};
    const firstName = formData.get("firstName")?.toString().trim() ?? "";
    const lastName = formData.get("lastName")?.toString().trim() ?? "";
    const mobileNumber = formData.get("mobileNumber")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const confirmEmail = formData.get("confirmEmail")?.toString().trim() ?? "";
    const postcode = formData.get("postcode")?.toString().trim() ?? "";
    const experienceLength = formData.get("experienceLength")?.toString().trim() ?? "";
    const experienceDetails = formData.get("experienceDetails")?.toString().trim() ?? "";
    const hoursPerWeek = formData.get("hoursPerWeek")?.toString().trim() ?? "";
    const workDuration = formData.get("workDuration")?.toString().trim() ?? "";
    const cleaningExperience = formData.getAll("cleaningExperience");
    const workingDays = formData.getAll("workingDays");
    const eligibilityConfirmations = formData.getAll("eligibilityConfirmations");

    if (!firstName) nextErrors.firstName = "Enter your first name.";
    if (!lastName) nextErrors.lastName = "Enter your last name.";
    if (!mobileNumber) nextErrors.mobileNumber = "Enter your UK mobile number.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!confirmEmail) nextErrors.confirmEmail = "Confirm your email address.";
    else if (confirmEmail !== email) nextErrors.confirmEmail = "Email addresses must match.";
    if (!postcode) nextErrors.postcode = "Enter your home postcode.";
    if (!experienceLength) nextErrors.experienceLength = "Select your experience length.";
    if (cleaningExperience.length === 0) nextErrors.cleaningExperience = "Select at least one experience type.";
    if (!experienceDetails) nextErrors.experienceDetails = "Describe your cleaning experience.";
    if (!hoursPerWeek) nextErrors.hoursPerWeek = "Select how many hours you want.";
    if (workingDays.length === 0) nextErrors.workingDays = "Select at least one working day.";
    if (!workDuration) nextErrors.workDuration = "Tell us how long you want to work with Happy Hands.";
    if (eligibilityConfirmations.length === 0) nextErrors.eligibilityConfirmations = "Confirm the eligibility statements.";

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

    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(
      formData.entries()
    );
    payload.cleaningExperience = formData.getAll("cleaningExperience");
    payload.workingDays = formData.getAll("workingDays");
    payload.eligibilityConfirmations = formData.getAll("eligibilityConfirmations");

    try {
      const response = await fetch("/api/cleaner-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result?.message ?? "Unable to submit your application right now.");
        return;
      }

      form.reset();
      setStatus("success");
      setStatusMessage(result?.message ?? "Application received.");
    } catch {
      setStatus("error");
      setStatusMessage("Unable to submit your application right now.");
    }
  };

  return (
    <InfoCard className="p-8 sm:p-10">
      {status === "success" ? (
        <div className="grid gap-5">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-[2.4]">
              <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Application received</p>
            <h3 className="mt-3 site-h3">Thank you. Your cleaner application is on its way.</h3>
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
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Application form</p>
            <h2 className="mt-3 site-h2">Apply to join Happy Hands</h2>
          </div>

          <form className="grid gap-8" noValidate onSubmit={handleSubmit}>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <section className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <h3 className="site-h3">About you</h3>
              </div>

              <FormField label="First name(s)" error={errors.firstName}>
                <TextInput name="firstName" type="text" error={errors.firstName} />
              </FormField>

              <FormField label="Last name" error={errors.lastName}>
                <TextInput name="lastName" type="text" error={errors.lastName} />
              </FormField>

              <FormField label="UK mobile number" error={errors.mobileNumber}>
                <TextInput name="mobileNumber" type="tel" error={errors.mobileNumber} />
              </FormField>

              <FormField label="Email address" error={errors.email}>
                <TextInput name="email" type="email" error={errors.email} />
              </FormField>

              <FormField label="Confirm email address" error={errors.confirmEmail}>
                <TextInput name="confirmEmail" type="email" error={errors.confirmEmail} />
              </FormField>

              <FormField label="Gender">
                <SelectField name="gender" defaultValue="">
                  <option value="">(optional)</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </SelectField>
              </FormField>

              <FormField label="UK home postcode" error={errors.postcode} className="md:col-span-2">
                <TextInput name="postcode" type="text" error={errors.postcode} />
              </FormField>
            </section>

            <section className="grid gap-5">
              <h3 className="site-h3">Your experience</h3>

              <FormField label="How much experience do you have in professional home cleaning?" error={errors.experienceLength}>
                <SelectField name="experienceLength" defaultValue="" error={errors.experienceLength}>
                  <option value="">Please select</option>
                  <option>Less than 6 months</option>
                  <option>6 to 12 months</option>
                  <option>1 to 2 years</option>
                  <option>2 to 5 years</option>
                  <option>5+ years</option>
                </SelectField>
              </FormField>

              <fieldset className="grid gap-3">
                <legend className="text-sm font-bold text-[#163316]">
                  What type of cleaning experience do you have?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cleaningExperienceOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]">
                      <input name="cleaningExperience" value={option} type="checkbox" className="h-4 w-4 accent-[#008000]" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.cleaningExperience ? <span className="text-sm font-semibold text-[#b42318]">{errors.cleaningExperience}</span> : null}
              </fieldset>

              <FormField
                label="Please describe your home cleaning experience"
                hint="e.g. &quot;I cleaned houses through an agency for 2 years.&quot;"
                error={errors.experienceDetails}
              >
                <TextareaField name="experienceDetails" rows={5} error={errors.experienceDetails} />
              </FormField>
            </section>

            <section className="grid gap-5">
              <h3 className="site-h3">Your availability</h3>

              <FormField label="How many hours of cleaning work do you want per week?" error={errors.hoursPerWeek}>
                <SelectField name="hoursPerWeek" defaultValue="" error={errors.hoursPerWeek}>
                  <option value="">Please select</option>
                  <option>Up to 10 hours</option>
                  <option>10 to 20 hours</option>
                  <option>20 to 30 hours</option>
                  <option>30+ hours</option>
                </SelectField>
              </FormField>

              <fieldset className="grid gap-3">
                <legend className="text-sm font-bold text-[#163316]">
                  Which days do you want to work?
                </legend>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {workingDayOptions.map((day) => (
                    <label key={day} className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]">
                      <input name="workingDays" value={day} type="checkbox" className="h-4 w-4 accent-[#008000]" />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
                {errors.workingDays ? <span className="text-sm font-semibold text-[#b42318]">{errors.workingDays}</span> : null}
              </fieldset>

              <FormField label="How long would you like to work with Happy Hands?" error={errors.workDuration}>
                <SelectField name="workDuration" defaultValue="" error={errors.workDuration}>
                  <option value="">Please fill this in.</option>
                  <option>Just a few months</option>
                  <option>6 to 12 months</option>
                  <option>1 year or more</option>
                  <option>Long term</option>
                </SelectField>
              </FormField>
            </section>

            <section className="grid gap-5">
              <h3 className="site-h3">Eligibility</h3>

              <fieldset className="grid gap-3">
                <legend className="text-sm font-bold text-[#163316]">
                  Please confirm:
                </legend>
                <div className="grid gap-3">
                  {eligibilityOptions.map((item) => (
                    <label key={item} className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]">
                      <input name="eligibilityConfirmations" value={item} type="checkbox" className="h-4 w-4 accent-[#008000]" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                {errors.eligibilityConfirmations ? <span className="text-sm font-semibold text-[#b42318]">{errors.eligibilityConfirmations}</span> : null}
              </fieldset>
            </section>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting..." : "Submit application"}
              </button>
              <a
                href={`mailto:${RECRUITMENT_EMAIL_FALLBACK}?subject=Cleaner%20Application`}
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#b7ddb7] bg-white px-8 text-sm font-black uppercase tracking-[0.16em] text-[#008000] transition hover:bg-[#f3fff3]"
              >
                Apply by email instead
              </a>
            </div>

            {status === "error" ? (
              <p className="text-sm font-semibold text-[#b42318]">{statusMessage}</p>
            ) : null}
          </form>
        </>
      )}
    </InfoCard>
  );
}
