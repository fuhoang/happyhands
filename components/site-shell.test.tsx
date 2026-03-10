import { render, screen } from "@testing-library/react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { services } from "@/lib/services";

describe("SiteHeader", () => {
  it("renders the shared navigation elements", () => {
    render(<SiteHeader activePage="contact" />);

    expect(screen.getByRole("link", { name: /happy hands/i })).toHaveAttribute(
      "href",
      "/",
    );

    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "/services",
    );

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );

    expect(screen.getByRole("link", { name: "Get Quote" })).toHaveAttribute(
      "href",
      "mailto:happyhandscustomerservice@gmail.com",
    );
  });
});

describe("SiteFooter", () => {
  it("renders shared explore, case study, and service links", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );

    expect(
      screen.getByRole("link", { name: "Zebra Housing" }),
    ).toHaveAttribute("href", "/case-studies/zebra-housing");

    expect(
      screen.getByRole("link", { name: "COVID-19 Zebra Housing" }),
    ).toHaveAttribute("href", "/case-studies/covid-19-zebra-housing");

    expect(
      screen.getByRole("link", { name: services[0].title }),
    ).toHaveAttribute("href", `/services/${services[0].slug}`);

    expect(
      screen.getByRole("link", { name: "Join Us" }),
    ).toHaveAttribute("href", "mailto:happyhandscustomerservice@gmail.com");
  });
});
