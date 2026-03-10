import { render, screen } from "@testing-library/react";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

describe("PageHero", () => {
  it("renders the shared hero content and any injected children", () => {
    render(
      <PageHero
        eyebrow="Shared hero"
        title="Consistent page hero"
        description="Reusable hero copy."
        image="https://example.com/hero.jpg"
      >
        <div>Breadcrumb content</div>
      </PageHero>,
    );

    expect(screen.getByText("Shared hero")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Consistent page hero" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Reusable hero copy.")).toBeInTheDocument();
    expect(screen.getByText("Breadcrumb content")).toBeInTheDocument();
  });
});

describe("CtaBanner", () => {
  it("renders mailto/tel links correctly", () => {
    render(
      <CtaBanner
        eyebrow="Call to action"
        title="Talk to Happy Hands"
        description="Get in touch with the team."
        primaryHref="tel:+447973403788"
        primaryLabel="Call now"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email us"
      />,
    );

    expect(
      screen.getByRole("link", { name: "Call now" }),
    ).toHaveAttribute("href", "tel:+447973403788");
    expect(screen.getByRole("link", { name: "Email us" })).toHaveAttribute(
      "href",
      "mailto:happyhandscustomerservice@gmail.com",
    );
  });

  it("renders internal links when secondaryAsLink is enabled", () => {
    render(
      <CtaBanner
        eyebrow="Call to action"
        title="Back to services"
        description=""
        primaryHref="/contact"
        primaryLabel="Contact Happy Hands"
        secondaryHref="/services"
        secondaryLabel="Back to all services"
        secondaryAsLink
      />,
    );

    expect(
      screen.getByRole("link", { name: "Contact Happy Hands" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByRole("link", { name: "Back to all services" }),
    ).toHaveAttribute("href", "/services");
  });
});
