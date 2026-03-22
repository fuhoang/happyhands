import { render, screen } from "@testing-library/react";
import AboutOverview from "@/components/about/AboutOverview";
import ContactDetails from "@/components/contact/ContactDetails";
import EmployeeTreatmentContent from "@/components/employee-treatment/EmployeeTreatmentContent";
import FoggingDocuments from "@/components/health-and-safety/FoggingDocuments";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceOverview from "@/components/services/ServiceOverview";

describe("AboutOverview", () => {
  it("renders the main about content and values", () => {
    render(<AboutOverview />);

    expect(
      screen.getByRole("heading", {
        name: "A family-led cleaning company with long-term standards.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Our values")).toBeInTheDocument();
  });
});

describe("ContactDetails", () => {
  it("renders key contact routes and office details", () => {
    render(<ContactDetails />);

    expect(screen.getByRole("heading", { name: "How to reach us" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "happyhandscustomerservice@gmail.com" }),
    ).toHaveAttribute("href", "mailto:happyhandscustomerservice@gmail.com");
    expect(screen.getByText("Company Reg No. 7190269")).toBeInTheDocument();
  });
});

describe("FoggingDocuments", () => {
  it("renders the fogging document links", () => {
    render(<FoggingDocuments />);

    expect(
      screen.getByRole("heading", {
        name: "Supporting documents for fogging health and safety.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "Laboratory Testing of the Residual Activity of Vivid™ SENSE",
      }),
    ).toHaveAttribute(
      "href",
      "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Laboratory-Testing-of-Residual-Activity.pdf",
    );
  });
});

describe("EmployeeTreatmentContent", () => {
  it("renders the employee commitment copy", () => {
    render(<EmployeeTreatmentContent />);

    expect(
      screen.getByRole("heading", { name: "Fair treatment is part of how we operate." }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Happy Hands is built on trust\./),
    ).toBeInTheDocument();
  });
});

describe("ServicesGrid", () => {
  it("renders service links from shared data", () => {
    render(<ServicesGrid />);

    expect(
      screen.getByRole("link", { name: /After Builders Cleaning/i }),
    ).toHaveAttribute("href", "/services/after-builders-cleaning");
    expect(
      screen.getByRole("link", { name: /Washing and Ironing/i }),
    ).toHaveAttribute("href", "/services/washing-and-ironing");
  });
});

describe("ServiceOverview", () => {
  it("renders intro and body paragraphs", () => {
    render(
      <ServiceOverview
        title="Service overview"
        intro="Intro copy"
        body={["First paragraph", "Second paragraph"]}
      />,
    );

    expect(screen.getByRole("heading", { name: "Service overview" })).toBeInTheDocument();
    expect(screen.getByText("Intro copy")).toBeInTheDocument();
    expect(screen.getByText("First paragraph")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph")).toBeInTheDocument();
  });
});
