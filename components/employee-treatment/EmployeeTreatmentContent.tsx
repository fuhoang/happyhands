import InfoCard from "@/components/ui/InfoCard";
import TwoColumnSection from "@/components/ui/TwoColumnSection";

export default function EmployeeTreatmentContent() {
  return (
    <TwoColumnSection
      main={
        <InfoCard className="p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Our commitment
          </p>
          <h2 className="mt-3 site-h2-lg">Fair treatment is part of how we operate.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#5f7d69]">
            <p>
              Happy Hands is built on trust. We operate an ethical business in which all employees are treated fairly and with the respect they deserve.
            </p>
            <p>
              We follow all the correct procedures in the employment process from start to finish to ensure that both parties, employees and employer, are fully covered according to employee and employer protection laws.
            </p>
            <p>
              Happy Hands does not employ contract staff. All employees are afforded a full employment contract when starting with us.
            </p>
            <p>
              All our staff members are fully vetted before they are signed up including DBS enhanced checks. This is an extra measure to provide our customers with peace of mind when allowing an employee onto their premises.
            </p>
            <p>
              When signing up with Happy Hands, all staff members are required to submit copies of their identity including documents such as National Insurance Number, proof of address, full colour photo, and a copy of their passport. We also require proof of settlement in the UK. We do not share this information with any third party, ensuring we remain fully General Data Protection Regulation compliant.
            </p>
            <p>
              We are equally committed to preserving the dignity of our employees by paying an equitable wage. We go beyond minimum requirements by enrolling team members in a pension plan from the day they start. All employees are given the appropriate holiday leave and standard sick leave entitlement in line with UK employment law.
            </p>
          </div>
        </InfoCard>
      }
      side={
        <InfoCard className="bg-[#f7fbf7] p-8 shadow-none">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            What this means in practice
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
            <li>Full employment contracts instead of contract-only staffing.</li>
            <li>Enhanced vetting and identity checks before site placement.</li>
            <li>Pension enrolment from day one and lawful leave entitlements.</li>
            <li>Clear employment processes that protect both staff and clients.</li>
          </ul>
        </InfoCard>
      }
    />
  );
}
