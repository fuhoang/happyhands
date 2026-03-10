import { render, screen } from "@testing-library/react";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServicesGrid from "@/components/services/ServicesGrid";

describe("ServiceBreadcrumb", () => {
  it("renders breadcrumb links and current page title", () => {
    render(<ServiceBreadcrumb title="After Builders Cleaning" />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "/services",
    );
    expect(screen.getByText("After Builders Cleaning")).toBeInTheDocument();
  });
});

describe("ServicesGrid", () => {
  it("renders service cards with links from shared service data", () => {
    render(<ServicesGrid />);

    expect(
      screen.getByRole("link", { name: /After Builders Cleaning/i }),
    ).toHaveAttribute("href", "/services/after-builders-cleaning");
    expect(
      screen.getByRole("link", { name: /Leisure and Hospitality Cleaning/i }),
    ).toHaveAttribute("href", "/services/leisure-and-hospitality-cleaning");
  });
});
