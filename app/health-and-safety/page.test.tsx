import { render, screen } from "@testing-library/react";
import HealthAndSafetyPage from "./page";

describe("HealthAndSafetyPage", () => {
  it("renders the page heading and fogging document links", () => {
    render(<HealthAndSafetyPage />);

    expect(
      screen.getByRole("heading", { name: "Health and Safety" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Fogging Health & Safety Record" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Laboratory Testing of the Residual Activity of Vivid™ SENSE",
      }),
    ).toHaveAttribute(
      "href",
      "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Laboratory-Testing-of-Residual-Activity.pdf",
    );

    expect(
      screen.getByRole("link", {
        name: "Vivid™ SENSE Fogging Solution Data Sheet",
      }),
    ).toHaveAttribute(
      "href",
      "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Performance-Report.pdf",
    );

    expect(
      screen.getByRole("link", {
        name: "COSHH-ASSESSMENT Vivid™ SENSE Disinfectant Fogging Solution",
      }),
    ).toHaveAttribute(
      "href",
      "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-COSHH-Sheet.pdf",
    );
  });
});
