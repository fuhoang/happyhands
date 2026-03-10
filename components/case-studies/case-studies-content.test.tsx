import { render, screen } from "@testing-library/react";
import CovidZebraHousingContent from "@/components/case-studies/CovidZebraHousingContent";
import ZebraHousingContent from "@/components/case-studies/ZebraHousingContent";

describe("ZebraHousingContent", () => {
  it("renders the case study overview and key facts", () => {
    render(<ZebraHousingContent />);

    expect(
      screen.getByRole("heading", {
        name: "Zebra Housing Association, Central London",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("140 flats across London")).toBeInTheDocument();
    expect(
      screen.getByText(/15-year service relationship with Happy Hands/i),
    ).toBeInTheDocument();
  });
});

describe("CovidZebraHousingContent", () => {
  it("renders the covid case study overview and key facts", () => {
    render(<CovidZebraHousingContent />);

    expect(
      screen.getByRole("heading", {
        name: "COVID 19 case study Zebra Housing Association",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Enhanced DBS Live Update employee model/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Guidance aligned with DFE and Public Health England/i),
    ).toBeInTheDocument();
  });
});
