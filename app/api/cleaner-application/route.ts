import { NextResponse } from "next/server";
import {
  eligibilityOptions,
  RECRUITMENT_EMAIL_FALLBACK,
} from "@/lib/recruitment";
import {
  clean,
  cleanArray,
  createRateLimiter,
  emailPattern,
  getClientIdentifier,
  resendApiUrl,
} from "@/lib/api";

type CleanerApplicationPayload = {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  email?: string;
  confirmEmail?: string;
  gender?: string;
  postcode?: string;
  experienceLength?: string;
  cleaningExperience?: string[];
  experienceDetails?: string;
  hoursPerWeek?: string;
  workingDays?: string[];
  workDuration?: string;
  eligibilityConfirmations?: string[];
  company?: string;
};

const isRateLimited = createRateLimiter();

function buildEmailText(payload: Required<CleanerApplicationPayload>) {
  return [
    "New cleaner application from Happy Hands website",
    "",
    `First name: ${payload.firstName}`,
    `Last name: ${payload.lastName}`,
    `Mobile: ${payload.mobileNumber}`,
    `Email: ${payload.email}`,
    `Gender: ${payload.gender || "Not provided"}`,
    `Postcode: ${payload.postcode}`,
    `Professional cleaning experience: ${payload.experienceLength}`,
    `Cleaning types: ${payload.cleaningExperience.join(", ")}`,
    "",
    "Experience details:",
    payload.experienceDetails,
    "",
    `Hours per week: ${payload.hoursPerWeek}`,
    `Working days: ${payload.workingDays.join(", ")}`,
    `Intended work duration: ${payload.workDuration}`,
    "",
    `Eligibility confirmations: ${payload.eligibilityConfirmations.join(", ")}`,
  ].join("\n");
}

function buildEmailHtml(payload: Required<CleanerApplicationPayload>) {
  const rows = [
    ["First name", payload.firstName],
    ["Last name", payload.lastName],
    ["Mobile", payload.mobileNumber],
    ["Email", payload.email],
    ["Gender", payload.gender || "Not provided"],
    ["Postcode", payload.postcode],
    ["Professional cleaning experience", payload.experienceLength],
    ["Cleaning types", payload.cleaningExperience.join(", ")],
    ["Hours per week", payload.hoursPerWeek],
    ["Working days", payload.workingDays.join(", ")],
    ["Intended work duration", payload.workDuration],
    ["Eligibility confirmations", payload.eligibilityConfirmations.join(", ")],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:700;border:1px solid #d9e8d9;">${label}</td><td style="padding:8px 12px;border:1px solid #d9e8d9;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#163316;">
      <h2 style="margin-bottom:16px;">New cleaner application from Happy Hands website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;margin-bottom:20px;">
        ${rows}
      </table>
      <h3 style="margin-bottom:8px;">Experience details</h3>
      <p style="line-height:1.7;white-space:pre-wrap;">${payload.experienceDetails}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const clientIdentifier = getClientIdentifier(request);

  if (isRateLimited(clientIdentifier)) {
    return NextResponse.json(
      { message: "Too many applications. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = (await request.json().catch(() => null)) as CleanerApplicationPayload | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    mobileNumber: clean(body.mobileNumber),
    email: clean(body.email),
    confirmEmail: clean(body.confirmEmail),
    gender: clean(body.gender),
    postcode: clean(body.postcode),
    experienceLength: clean(body.experienceLength),
    cleaningExperience: cleanArray(body.cleaningExperience),
    experienceDetails: clean(body.experienceDetails),
    hoursPerWeek: clean(body.hoursPerWeek),
    workingDays: cleanArray(body.workingDays),
    workDuration: clean(body.workDuration),
    eligibilityConfirmations: cleanArray(body.eligibilityConfirmations),
    company: clean(body.company),
  };

  if (payload.company) {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.mobileNumber ||
    !payload.email ||
    !payload.confirmEmail ||
    !payload.postcode ||
    !payload.experienceLength ||
    payload.cleaningExperience.length === 0 ||
    !payload.experienceDetails ||
    !payload.hoursPerWeek ||
    payload.workingDays.length === 0 ||
    !payload.workDuration
  ) {
    return NextResponse.json(
      { message: "Missing required cleaner application fields." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  if (payload.email !== payload.confirmEmail) {
    return NextResponse.json({ message: "Email addresses must match." }, { status: 400 });
  }

  if (
    eligibilityOptions.some(
      (item) => !payload.eligibilityConfirmations.includes(item)
    )
  ) {
    return NextResponse.json(
      { message: "Confirm all eligibility statements." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const recruitmentToEmail =
    process.env.RECRUITMENT_TO_EMAIL ?? RECRUITMENT_EMAIL_FALLBACK;
  const recruitmentFromEmail =
    process.env.RECRUITMENT_FROM_EMAIL ?? process.env.QUOTE_REQUEST_FROM_EMAIL;

  if (!resendApiKey) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  if (!recruitmentFromEmail) {
    return NextResponse.json(
      { message: "Recruitment sender email is not configured yet." },
      { status: 500 }
    );
  }

  const emailResponse = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: recruitmentFromEmail,
      to: [recruitmentToEmail],
      reply_to: payload.email,
      subject: `Cleaner application: ${payload.firstName} ${payload.lastName}`,
      text: buildEmailText(payload as Required<CleanerApplicationPayload>),
      html: buildEmailHtml(payload as Required<CleanerApplicationPayload>),
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json(
      { message: "Unable to send the cleaner application right now." },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      message: "Cleaner application received. We will review it and get back to you shortly.",
    },
    { status: 200 }
  );
}
