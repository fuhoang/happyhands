import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import QuoteRequestForm from "@/components/contact/QuoteRequestForm";

describe("QuoteRequestForm", () => {
  it("shows validation errors when required fields are missing", async () => {
    const fetchSpy = vi.spyOn(global, "fetch");

    render(<QuoteRequestForm />);

    fireEvent.click(screen.getByRole("button", { name: "Request Quote" }));

    expect(await screen.findByText("Enter your full name.")).toBeInTheDocument();
    expect(screen.getByText("Enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Add a short description of the work.")).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();

    fetchSpy.mockRestore();
  });

  it("submits the form and shows the success message", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Quote request received. We will get back to you shortly." }),
    } as Response);

    render(<QuoteRequestForm />);

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("Phone Number"), { target: { value: "07123456789" } });
    fireEvent.change(screen.getByLabelText("Service Required"), { target: { value: "Home Cleaning" } });
    fireEvent.change(screen.getByLabelText("Property Type"), { target: { value: "House" } });
    fireEvent.change(screen.getByLabelText("Frequency"), { target: { value: "One-off" } });
    fireEvent.change(screen.getByLabelText("Postcode"), { target: { value: "NW6 7FX" } });
    fireEvent.change(screen.getByLabelText("Additional Details"), {
      target: { value: "Please quote for a one-off clean next week." },
    });

    fireEvent.click(screen.getByRole("button", { name: "Request Quote" }));

    await waitFor(() => {
      expect(screen.getByText("Quote request received. We will get back to you shortly.")).toBeInTheDocument();
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
