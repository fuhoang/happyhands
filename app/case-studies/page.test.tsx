import { render, screen } from "@testing-library/react";
import CaseStudiesPage from "@/app/case-studies/page";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import { getCaseStudyBySlug } from "@/lib/case-studies";

describe("CaseStudiesPage", () => {
  it("renders the case studies index heading and links to detail pages", () => {
    render(<CaseStudiesPage />);

    expect(
      screen.getByRole("heading", {
        name: "See how Happy Hands supports clients in the real world",
      }),
    ).toBeInTheDocument();

    const links = screen.getAllByRole("link", { name: "Read Case Study" });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/case-studies/zebra-housing");
    expect(links[1]).toHaveAttribute("href", "/case-studies/covid-19-zebra-housing");
    expect(screen.getByRole("link", { name: "COVID-19 Zebra Housing" })).toHaveAttribute(
      "href",
      "/case-studies/covid-19-zebra-housing",
    );
  });
});

describe("CaseStudyPage", () => {
  it("renders shared hero and CTA content from case study data", () => {
    const caseStudy = getCaseStudyBySlug("zebra-housing");

    if (!caseStudy) {
      throw new Error("Expected zebra-housing case study data");
    }

    render(
      <CaseStudyPage caseStudy={caseStudy}>
        <div>Case study body</div>
      </CaseStudyPage>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Zebra Housing",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(caseStudy.description)).toBeInTheDocument();
    expect(screen.getByText("Case study body")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: caseStudy.ctaTitle,
      }),
    ).toBeInTheDocument();
  });
});
