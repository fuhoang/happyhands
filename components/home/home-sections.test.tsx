import { render, screen } from "@testing-library/react";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeWhyUs from "@/components/home/HomeWhyUs";

describe("HomeHero", () => {
  it("renders hero copy and primary actions", () => {
    render(<HomeHero />);

    expect(
      screen.getByText("Trusted cleaning services across London and the Home Counties"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a free quote" })).toHaveAttribute(
      "href",
      "mailto:happyhandscustomerservice@gmail.com",
    );
    expect(screen.getByRole("link", { name: /Call 07973 403 788/ })).toHaveAttribute(
      "href",
      "tel:+447973403788",
    );
  });
});

describe("HomeServices", () => {
  it("renders the homepage services section", () => {
    render(<HomeServices />);

    expect(
      screen.getByRole("heading", {
        name: "Cleaning services for homes, offices, rental properties, and commercial spaces",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Home Cleaning")).toBeInTheDocument();
    expect(screen.getByText("Event Cleaning")).toBeInTheDocument();
  });
});

describe("HomeWhyUs", () => {
  it("renders the why-us heading and direct contact copy", () => {
    render(<HomeWhyUs />);

    expect(
      screen.getByRole("heading", {
        name: "Cleaning that feels upbeat, dependable, and instantly visible.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/happyhandscustomerservice@gmail.com/)).toBeInTheDocument();
  });
});

describe("HomeTestimonials", () => {
  it("renders testimonial content", () => {
    render(<HomeTestimonials />);

    expect(
      screen.getByRole("heading", { name: "Trusted by busy homes and businesses" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Sarah, homeowner/)).toBeInTheDocument();
  });
});

describe("HomeFinalCta", () => {
  it("renders final CTA actions", () => {
    render(<HomeFinalCta />);

    expect(
      screen.getByRole("heading", { name: "Get a fast quote from Happy Hands today" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Call 07973 403 788/ })).toHaveAttribute(
      "href",
      "tel:+447973403788",
    );
    expect(screen.getByRole("link", { name: "Email for a quote" })).toHaveAttribute(
      "href",
      "mailto:happyhandscustomerservice@gmail.com",
    );
  });
});
