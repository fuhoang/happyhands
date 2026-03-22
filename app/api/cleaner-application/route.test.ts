describe("POST /api/cleaner-application", () => {
  const originalEnv = { ...process.env };
  let POST: typeof import("@/app/api/cleaner-application/route").POST;

  beforeEach(async () => {
    vi.resetModules();
    ({ POST } = await import("@/app/api/cleaner-application/route"));
  });

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

  it("returns 400 when the request body is invalid JSON", async () => {
    const request = new Request("http://localhost:3000/api/cleaner-application", {
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
    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Fu",
        lastName: "Hoang",
        mobileNumber: "07123456789",
        email: "invalid-email",
        confirmEmail: "invalid-email",
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

    expect(response.status).toBe(400);
    expect(body.message).toBe("Enter a valid email address.");
  });

  it("returns 400 when the email addresses do not match", async () => {
    const request = new Request("http://localhost:3000/api/cleaner-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Fu",
        lastName: "Hoang",
        mobileNumber: "07123456789",
        email: "test@example.com",
        confirmEmail: "other@example.com",
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

    expect(response.status).toBe(400);
    expect(body.message).toBe("Email addresses must match.");
  });

  it("returns 400 when eligibility confirmations are incomplete", async () => {
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
        eligibilityConfirmations: ["I am eligible to work in the UK."],
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe("Confirm all eligibility statements.");
  });

  it("returns 429 when the client exceeds the rate limit", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.RECRUITMENT_FROM_EMAIL = "Happy Hands Recruitment <recruitment@example.com>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ id: "email_123" }),
    } as Response);

    const makeRequest = () =>
      new Request("http://localhost:3000/api/cleaner-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-real-ip": "203.0.113.12",
        },
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

    for (let index = 0; index < 5; index += 1) {
      const response = await POST(makeRequest());
      expect(response.status).toBe(200);
    }

    const blockedResponse = await POST(makeRequest());
    const body = await blockedResponse.json();

    expect(blockedResponse.status).toBe(429);
    expect(body.message).toBe("Too many applications. Please try again shortly.");
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

  it("returns 500 when email delivery is not configured", async () => {
    delete process.env.RESEND_API_KEY;
    process.env.RECRUITMENT_FROM_EMAIL = "Happy Hands Recruitment <recruitment@example.com>";

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
    expect(body.message).toBe("Email delivery is not configured yet.");
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

  it("returns 502 when the email provider rejects the request", async () => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.RECRUITMENT_TO_EMAIL = "fuhoang84@googlemail.com";
    process.env.RECRUITMENT_FROM_EMAIL = "Happy Hands Recruitment <recruitment@example.com>";

    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({ message: "provider error" }),
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

    expect(response.status).toBe(502);
    expect(body.message).toBe("Unable to send the cleaner application right now.");
  });
});
