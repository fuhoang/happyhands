import { POST } from "@/app/api/quote-request/route";

describe("POST /api/quote-request", () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it("returns 400 when required fields are missing", async () => {
    const request = new Request("http://localhost:3000/api/quote-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName: "Test User" }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Missing required quote request fields.");
  });

  it("sends the quote request email when configured", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.QUOTE_REQUEST_TO_EMAIL = "fuhoang84@googlemail.com";
    process.env.QUOTE_REQUEST_FROM_EMAIL = "Happy Hands Quotes <onboarding@resend.dev>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ id: "email_123" }),
    } as Response);

    const request = new Request("http://localhost:3000/api/quote-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test User",
        email: "test@example.com",
        phone: "07123456789",
        service: "Home Cleaning",
        propertyType: "House",
        frequency: "One-off",
        preferredDate: "2026-03-20",
        postcode: "NW6 7FX",
        propertySize: "3 bedrooms",
        details: "Please quote for a one-off clean next week.",
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Quote request received. We will get back to you shortly.");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test_key",
          "Content-Type": "application/json",
        }),
      }),
    );
  });
});
