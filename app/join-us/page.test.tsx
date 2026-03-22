import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import JoinUsPage from "@/app/join-us/page";
import { RECRUITMENT_EMAIL_FALLBACK } from "@/lib/recruitment";

describe("JoinUsPage", () => {
  it("renders the recruitment CTA and submits the application form successfully", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        message: "Cleaner application received. We will review it and get back to you shortly.",
      }),
    } as Response);

    render(<JoinUsPage />);

    expect(screen.getByRole("link", { name: "Apply by Email" })).toHaveAttribute(
      "href",
      `mailto:${RECRUITMENT_EMAIL_FALLBACK}?subject=Cleaner%20Application`,
    );

    fireEvent.change(screen.getByLabelText("First name(s)"), { target: { value: "Fu" } });
    fireEvent.change(screen.getByLabelText("Last name"), { target: { value: "Hoang" } });
    fireEvent.change(screen.getByLabelText("UK mobile number"), { target: { value: "07123456789" } });
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("Confirm email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("UK home postcode"), { target: { value: "NW6 7FX" } });
    fireEvent.change(
      screen.getByLabelText("How much experience do you have in professional home cleaning?"),
      { target: { value: "1 to 2 years" } },
    );
    fireEvent.click(screen.getByLabelText("Private homes"));
    fireEvent.change(
      screen.getByRole("textbox", {
        name: /please describe your home cleaning experience/i,
      }),
      {
        target: { value: "I cleaned houses through an agency for 2 years." },
      },
    );
    fireEvent.change(
      screen.getByLabelText("How many hours of cleaning work do you want per week?"),
      { target: { value: "10 to 20 hours" } },
    );
    fireEvent.click(screen.getByLabelText("Monday"));
    fireEvent.change(screen.getByLabelText("How long would you like to work with Happy Hands?"), {
      target: { value: "1 year or more" },
    });
    fireEvent.click(screen.getByLabelText("I am eligible to work in the UK."));
    fireEvent.click(screen.getByLabelText("I can travel to local cleaning jobs."));
    fireEvent.click(screen.getByLabelText("I am comfortable working in customers' homes."));
    fireEvent.click(screen.getByLabelText("I am happy to complete checks and onboarding."));

    fireEvent.click(screen.getByRole("button", { name: "Submit application" }));

    await waitFor(() => {
      expect(
        screen.getByText(
          "Cleaner application received. We will review it and get back to you shortly.",
        ),
      ).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/cleaner-application",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );

    vi.restoreAllMocks();
  });
});
