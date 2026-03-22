describe("POST /api/quote-request", () => {
  const originalEnv = { ...process.env };
  let POST: typeof import("@/app/api/quote-request/route").POST;

  beforeEach(async () => {
    vi.resetModules();
    ({ POST } = await import("@/app/api/quote-request/route"));
  });

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

  it("returns 400 when the request body is invalid JSON", async () => {
    const request = new Request("http://localhost:3000/api/quote-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{invalid",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Invalid request body.");
  });

  it("returns 400 when the email address is invalid", async () => {
    const request = new Request("http://localhost:3000/api/quote-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test User",
        email: "not-an-email",
        phone: "07123456789",
        service: "Home Cleaning",
        propertyType: "House",
        frequency: "One-off",
        postcode: "NW6 7FX",
        details: "Please quote for a one-off clean next week.",
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Enter a valid email address.");
  });

  it("returns 429 when the client exceeds the rate limit", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.QUOTE_REQUEST_FROM_EMAIL = "Happy Hands Quotes <quotes@example.com>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ id: "email_123" }),
    } as Response);

    const makeRequest = () =>
      new Request("http://localhost:3000/api/quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": "198.51.100.10",
        },
        body: JSON.stringify({
          fullName: "Test User",
          email: "test@example.com",
          phone: "07123456789",
          service: "Home Cleaning",
          propertyType: "House",
          frequency: "One-off",
          postcode: "NW6 7FX",
          details: "Please quote for a one-off clean next week.",
        }),
      });

    for (let index = 0; index < 5; index += 1) {
      const response = await POST(makeRequest());
      expect(response.status).toBe(200);
    }

    const blockedResponse = await POST(makeRequest());
    const body = await blockedResponse.json();

    expect(blockedResponse.status).toBe(429);
    expect(body.message).toBe("Too many quote requests. Please try again shortly.");
  });

  it("rejects submissions that fill the honeypot field", async () => {
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
        postcode: "NW6 7FX",
        details: "Spam attempt",
        company: "bot payload",
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Invalid request.");
  });

  it("returns 500 when the sender address is not configured", async () => {
    process.env.RESEND_API_KEY = "test_key";
    delete process.env.QUOTE_REQUEST_FROM_EMAIL;

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

    expect(response.status).toBe(500);
    expect(body.message).toBe("Quote request sender email is not configured yet.");
  });

  it("returns 500 when email delivery is not configured", async () => {
    delete process.env.RESEND_API_KEY;
    process.env.QUOTE_REQUEST_FROM_EMAIL = "Happy Hands Quotes <quotes@example.com>";

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
        postcode: "NW6 7FX",
        details: "Please quote for a one-off clean next week.",
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.message).toBe("Email delivery is not configured yet.");
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

  it("returns 502 when the email provider rejects the request", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.QUOTE_REQUEST_TO_EMAIL = "fuhoang84@googlemail.com";
    process.env.QUOTE_REQUEST_FROM_EMAIL = "Happy Hands Quotes <quotes@example.com>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({ message: "provider error" }),
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

    expect(response.status).toBe(502);
    expect(body.message).toBe("Unable to send the quote request email right now.");
  });
});
