"use client";

import { FormEvent, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import {
  baseFieldClassName,
  fieldDefaultClassName,
  fieldErrorClassName,
  FormSubmitStatus,
} from "@/lib/forms";
import {
  cleaningExperienceOptions,
  eligibilityOptions,
  RECRUITMENT_EMAIL_FALLBACK,
  workingDayOptions,
} from "@/lib/recruitment";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    if (!mobileNumber) nextErrors.mobileNumber = "Enter your mobile number.";
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!emailPattern.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!confirmEmail) nextErrors.confirmEmail = "Confirm your email address.";
    else if (confirmEmail !== email) nextErrors.confirmEmail = "Email addresses must match.";
    if (!postcode) nextErrors.postcode = "Enter your home postcode.";
    if (!experienceLength) nextErrors.experienceLength = "Select your cleaning experience.";
    if (cleaningExperience.length === 0) nextErrors.cleaningExperience = "Select at least one cleaning experience type.";
    if (!experienceDetails) nextErrors.experienceDetails = "Describe your cleaning experience.";
    if (!hoursPerWeek) nextErrors.hoursPerWeek = "Select the hours you want per week.";
    if (workingDays.length === 0) nextErrors.workingDays = "Select at least one working day.";
    if (!workDuration) nextErrors.workDuration = "Select how long you want to work.";
    if (eligibilityConfirmations.length !== eligibilityOptions.length) nextErrors.eligibilityConfirmations = "Confirm all eligibility statements.";

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

    const payload = {
      firstName: formData.get("firstName")?.toString() ?? "",
      lastName: formData.get("lastName")?.toString() ?? "",
      mobileNumber: formData.get("mobileNumber")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      confirmEmail: formData.get("confirmEmail")?.toString() ?? "",
      gender: formData.get("gender")?.toString() ?? "",
      postcode: formData.get("postcode")?.toString() ?? "",
      experienceLength: formData.get("experienceLength")?.toString() ?? "",
      cleaningExperience: formData.getAll("cleaningExperience").map((value) => value.toString()),
      experienceDetails: formData.get("experienceDetails")?.toString() ?? "",
      hoursPerWeek: formData.get("hoursPerWeek")?.toString() ?? "",
      workingDays: formData.getAll("workingDays").map((value) => value.toString()),
      workDuration: formData.get("workDuration")?.toString() ?? "",
      eligibilityConfirmations: formData.getAll("eligibilityConfirmations").map((value) => value.toString()),
      company: formData.get("company")?.toString() ?? "",
    };

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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
              Application received
            </p>
            <h2 className="mt-3 site-h2">Thank you. Your application is on its way.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f7d69]">
              {statusMessage}
            </p>
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
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Cleaner application
          </p>
          <h2 className="mt-3 site-h2">Apply to join Happy Hands</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f7d69]">
            Fill in your details below and we will review your application for
            cleaner work.
          </p>

          <form className="mt-8 grid gap-10" noValidate onSubmit={handleSubmit}>
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <section className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <h3 className="site-h3">About you</h3>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">First name(s)</span>
                <input
                  name="firstName"
                  type="text"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.firstName ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.firstName ? <span className="text-sm font-semibold text-[#b42318]">{errors.firstName}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">Last name</span>
                <input
                  name="lastName"
                  type="text"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.lastName ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.lastName ? <span className="text-sm font-semibold text-[#b42318]">{errors.lastName}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">UK mobile number</span>
                <input
                  name="mobileNumber"
                  type="tel"
                  aria-invalid={errors.mobileNumber ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.mobileNumber ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.mobileNumber ? <span className="text-sm font-semibold text-[#b42318]">{errors.mobileNumber}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">Email address</span>
                <input
                  name="email"
                  type="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.email ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.email ? <span className="text-sm font-semibold text-[#b42318]">{errors.email}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">Confirm email address</span>
                <input
                  name="confirmEmail"
                  type="email"
                  aria-invalid={errors.confirmEmail ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.confirmEmail ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.confirmEmail ? <span className="text-sm font-semibold text-[#b42318]">{errors.confirmEmail}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">Gender</span>
                <select
                  name="gender"
                  defaultValue=""
                  className={`${baseFieldClassName} ${fieldDefaultClassName}`}
                >
                  <option value="">(optional)</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-bold text-[#163316]">UK home postcode</span>
                <input
                  name="postcode"
                  type="text"
                  aria-invalid={errors.postcode ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.postcode ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.postcode ? <span className="text-sm font-semibold text-[#b42318]">{errors.postcode}</span> : null}
              </label>
            </section>

            <section className="grid gap-5">
              <h3 className="site-h3">Your experience</h3>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">
                  How much experience do you have in professional home cleaning?
                </span>
                <select
                  name="experienceLength"
                  defaultValue=""
                  aria-invalid={errors.experienceLength ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.experienceLength ? fieldErrorClassName : fieldDefaultClassName}`}
                >
                  <option value="">Please select</option>
                  <option>Less than 6 months</option>
                  <option>6 to 12 months</option>
                  <option>1 to 2 years</option>
                  <option>2 to 5 years</option>
                  <option>5+ years</option>
                </select>
                {errors.experienceLength ? <span className="text-sm font-semibold text-[#b42318]">{errors.experienceLength}</span> : null}
              </label>

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

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">
                  Please describe your home cleaning experience
                </span>
                <span className="text-sm text-[#5f7d69]">
                  e.g. &quot;I cleaned houses through an agency for 2 years.&quot;
                </span>
                <textarea
                  name="experienceDetails"
                  rows={5}
                  aria-invalid={errors.experienceDetails ? "true" : "false"}
                  className={`rounded-sm border bg-white px-4 py-3 text-sm text-[#163316] outline-none focus:border-[#008000] ${errors.experienceDetails ? fieldErrorClassName : fieldDefaultClassName}`}
                />
                {errors.experienceDetails ? <span className="text-sm font-semibold text-[#b42318]">{errors.experienceDetails}</span> : null}
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
                  defaultValue=""
                  aria-invalid={errors.hoursPerWeek ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.hoursPerWeek ? fieldErrorClassName : fieldDefaultClassName}`}
                >
                  <option value="">Please select</option>
                  <option>Up to 10 hours</option>
                  <option>10 to 20 hours</option>
                  <option>20 to 30 hours</option>
                  <option>30+ hours</option>
                </select>
                {errors.hoursPerWeek ? <span className="text-sm font-semibold text-[#b42318]">{errors.hoursPerWeek}</span> : null}
              </label>

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

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#163316]">
                  How long would you like to work with Happy Hands?
                </span>
                <select
                  name="workDuration"
                  defaultValue=""
                  aria-invalid={errors.workDuration ? "true" : "false"}
                  className={`${baseFieldClassName} ${errors.workDuration ? fieldErrorClassName : fieldDefaultClassName}`}
                >
                  <option value="">Please fill this in.</option>
                  <option>Just a few months</option>
                  <option>6 to 12 months</option>
                  <option>1 year or more</option>
                  <option>Long term</option>
                </select>
                {errors.workDuration ? <span className="text-sm font-semibold text-[#b42318]">{errors.workDuration}</span> : null}
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
