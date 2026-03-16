import { POST } from "@/app/api/cleaner-application/route";

describe("POST /api/cleaner-application", () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it("returns 400 when required fields are missing", async () => {
    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: "Fu" }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Missing required cleaner application fields.");
  });

  it("rejects submissions that fill the honeypot field", async () => {
    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Fu",
        lastName: "Hoang",
        mobileNumber: "07123456789",
        email: "test@example.com",
        confirmEmail: "test@example.com",
        postcode: "NW6 7FX",
        experienceLength: "1 to 2 years",
        cleaningExperience: ["Private homes"],
        experienceDetails: "Two years of domestic cleaning.",
        hoursPerWeek: "10 to 20 hours",
        workingDays: ["Monday"],
        workDuration: "1 year or more",
        eligibilityConfirmations: [
          "I am eligible to work in the UK.",
          "I can travel to local cleaning jobs.",
          "I am comfortable working in customers' homes.",
          "I am happy to complete checks and onboarding.",
        ],
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
    delete process.env.RECRUITMENT_FROM_EMAIL;
    delete process.env.QUOTE_REQUEST_FROM_EMAIL;

    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Fu",
        lastName: "Hoang",
        mobileNumber: "07123456789",
        email: "test@example.com",
        confirmEmail: "test@example.com",
        postcode: "NW6 7FX",
        experienceLength: "1 to 2 years",
        cleaningExperience: ["Private homes"],
        experienceDetails: "Two years of domestic cleaning.",
        hoursPerWeek: "10 to 20 hours",
        workingDays: ["Monday"],
        workDuration: "1 year or more",
        eligibilityConfirmations: [
          "I am eligible to work in the UK.",
          "I can travel to local cleaning jobs.",
          "I am comfortable working in customers' homes.",
          "I am happy to complete checks and onboarding.",
        ],
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.message).toBe("Recruitment sender email is not configured yet.");
  });

  it("sends the cleaner application email when configured", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.RECRUITMENT_TO_EMAIL = "fuhoang84@googlemail.com";
    process.env.RECRUITMENT_FROM_EMAIL = "Happy Hands Recruitment <recruitment@example.com>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ id: "email_123" }),
    } as Response);

    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Fu",
        lastName: "Hoang",
        mobileNumber: "07123456789",
        email: "test@example.com",
        confirmEmail: "test@example.com",
        gender: "Male",
        postcode: "NW6 7FX",
        experienceLength: "1 to 2 years",
        cleaningExperience: ["Private homes", "Agency cleaning"],
        experienceDetails: "Two years of domestic cleaning.",
        hoursPerWeek: "10 to 20 hours",
        workingDays: ["Monday", "Tuesday"],
        workDuration: "1 year or more",
        eligibilityConfirmations: [
          "I am eligible to work in the UK.",
          "I can travel to local cleaning jobs.",
          "I am comfortable working in customers' homes.",
          "I am happy to complete checks and onboarding.",
        ],
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe(
      "Cleaner application received. We will review it and get back to you shortly."
    );
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test_key",
          "Content-Type": "application/json",
        }),
      })
    );
  });
});
