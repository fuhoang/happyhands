import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("ContactPage", () => {
  it("prefills the quote form service from search params and submits successfully", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        message: "Quote request received. We will get back to you shortly.",
      }),
    } as Response);

    render(
      await ContactPage({
        searchParams: Promise.resolve({ service: "Carpet Cleaning" }),
      }),
    );

    expect(screen.getByLabelText("Service Required")).toHaveValue("Carpet Cleaning");

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Fu Hoang" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("Phone Number"), { target: { value: "07123456789" } });
    fireEvent.change(screen.getByLabelText("Property Type"), { target: { value: "House" } });
    fireEvent.change(screen.getByLabelText("Frequency"), { target: { value: "One-off" } });
    fireEvent.change(screen.getByLabelText("Postcode"), { target: { value: "NW6 7FX" } });
    fireEvent.change(screen.getByLabelText("Additional Details"), {
      target: { value: "Need carpet cleaning for two rooms." },
    });

    fireEvent.click(screen.getByRole("button", { name: "Request Quote" }));

    await waitFor(() => {
      expect(
        screen.getByText("Quote request received. We will get back to you shortly."),
      ).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/quote-request",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );

    vi.restoreAllMocks();
  });
});
