import { render, screen } from "@testing-library/react";
import CheckboxGroup from "@/components/ui/forms/CheckboxGroup";
import FormErrorMessage from "@/components/ui/forms/FormErrorMessage";
import FormField from "@/components/ui/forms/FormField";
import FormSuccessPanel from "@/components/ui/forms/FormSuccessPanel";
import RadioGroup from "@/components/ui/forms/RadioGroup";
import SelectField from "@/components/ui/forms/SelectField";
import TextInput from "@/components/ui/forms/TextInput";
import TextareaField from "@/components/ui/forms/TextareaField";

describe("FormField", () => {
  it("renders label, hint, child field, and error message", () => {
    render(
      <FormField
        label="Email address"
        hint="We will only use this to reply."
        error="Enter your email address."
      >
        <TextInput name="email" type="email" />
      </FormField>,
    );

    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("We will only use this to reply.")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Enter your email address.")).toBeInTheDocument();
  });
});

describe("SelectField and TextareaField", () => {
  it("renders shared select and textarea controls", () => {
    render(
      <>
        <label>
          Service
          <SelectField name="service" defaultValue="">
            <option value="">Select</option>
            <option value="home">Home Cleaning</option>
          </SelectField>
        </label>
        <label>
          Details
          <TextareaField name="details" rows={4} />
        </label>
      </>,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Details" })).toBeInTheDocument();
  });
});

describe("CheckboxGroup and RadioGroup", () => {
  it("renders shared choice groups with options and errors", () => {
    render(
      <>
        <CheckboxGroup
          legend="Working days"
          name="workingDays"
          options={["Monday", "Tuesday"]}
          error="Select at least one day."
        />
        <RadioGroup
          legend="Employment type"
          name="employmentType"
          options={["Full-time", "Part-time"]}
          error="Select one option."
        />
      </>,
    );

    expect(screen.getByText("Working days")).toBeInTheDocument();
    expect(screen.getByLabelText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Select at least one day.")).toBeInTheDocument();
    expect(screen.getByText("Employment type")).toBeInTheDocument();
    expect(screen.getByLabelText("Full-time")).toBeInTheDocument();
    expect(screen.getByText("Select one option.")).toBeInTheDocument();
  });
});

describe("Form feedback components", () => {
  it("renders shared success and error feedback", () => {
    render(
      <>
        <FormSuccessPanel
          eyebrow="Request received"
          title="Thank you"
          message="We will be in touch shortly."
          action={<button type="button">Submit Another Request</button>}
        />
        <FormErrorMessage message="Unable to submit right now." />
      </>,
    );

    expect(screen.getByText("Request received")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Thank you" })).toBeInTheDocument();
    expect(screen.getByText("We will be in touch shortly.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit Another Request" })).toBeInTheDocument();
    expect(screen.getByText("Unable to submit right now.")).toBeInTheDocument();
  });
});
