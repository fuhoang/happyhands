import { NextResponse } from "next/server";

type QuoteRequestPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  propertyType?: string;
  frequency?: string;
  preferredDate?: string;
  postcode?: string;
  propertySize?: string;
  details?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resendApiUrl = "https://api.resend.com/emails";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailText(payload: Required<QuoteRequestPayload>) {
  return [
    "New quote request from Happy Hands website",
    "",
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    `Property type: ${payload.propertyType}`,
    `Frequency: ${payload.frequency}`,
    `Preferred date: ${payload.preferredDate || "Not provided"}`,
    `Postcode: ${payload.postcode}`,
    `Property size: ${payload.propertySize || "Not provided"}`,
    "",
    "Additional details:",
    payload.details,
  ].join("\n");
}

function buildEmailHtml(payload: Required<QuoteRequestPayload>) {
  const rows = [
    ["Full name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service", payload.service],
    ["Property type", payload.propertyType],
    ["Frequency", payload.frequency],
    ["Preferred date", payload.preferredDate || "Not provided"],
    ["Postcode", payload.postcode],
    ["Property size", payload.propertySize || "Not provided"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:700;border:1px solid #d9e8d9;">${label}</td><td style="padding:8px 12px;border:1px solid #d9e8d9;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#163316;">
      <h2 style="margin-bottom:16px;">New quote request from Happy Hands website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;margin-bottom:20px;">
        ${rows}
      </table>
      <h3 style="margin-bottom:8px;">Additional details</h3>
      <p style="line-height:1.7;white-space:pre-wrap;">${payload.details}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as QuoteRequestPayload | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    fullName: clean(body.fullName),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    propertyType: clean(body.propertyType),
    frequency: clean(body.frequency),
    preferredDate: clean(body.preferredDate),
    postcode: clean(body.postcode),
    propertySize: clean(body.propertySize),
    details: clean(body.details),
  };

  if (!payload.fullName || !payload.email || !payload.phone || !payload.service || !payload.propertyType || !payload.frequency || !payload.postcode || !payload.details) {
    return NextResponse.json({ message: "Missing required quote request fields." }, { status: 400 });
  }

  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const quoteRequestToEmail = process.env.QUOTE_REQUEST_TO_EMAIL ?? "fuhoang84@googlemail.com";
  const quoteRequestFromEmail = process.env.QUOTE_REQUEST_FROM_EMAIL;

  if (!resendApiKey) {
    return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 500 });
  }

  if (!quoteRequestFromEmail) {
    return NextResponse.json({ message: "Quote request sender email is not configured yet." }, { status: 500 });
  }

  const emailResponse = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: quoteRequestFromEmail,
      to: [quoteRequestToEmail],
      reply_to: payload.email,
      subject: `Quote request: ${payload.service} - ${payload.fullName}`,
      text: buildEmailText(payload as Required<QuoteRequestPayload>),
      html: buildEmailHtml(payload as Required<QuoteRequestPayload>),
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json({ message: "Unable to send the quote request email right now." }, { status: 502 });
  }

  return NextResponse.json(
    {
      message: "Quote request received. We will get back to you shortly.",
    },
    { status: 200 }
  );
}
