import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function EmployeeTreatmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Happy Hands Standards"
        title="Employee Treatment"
        description="We believe strong service begins with fair treatment, clear processes, and respect for every member of the Happy Hands team."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-md border border-[#d7e6d7] bg-white p-8 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
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
          </article>

          <aside className="self-start rounded-md border border-[#d7e6d7] bg-[#f7fbf7] p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
              What this means in practice
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
              <li>Full employment contracts instead of contract-only staffing.</li>
              <li>Enhanced vetting and identity checks before site placement.</li>
              <li>Pension enrolment from day one and lawful leave entitlements.</li>
              <li>Clear employment processes that protect both staff and clients.</li>
            </ul>
          </aside>
        </div>
      </section>
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Want to work with a professional team?"
        description="Speak to us if you are looking for a cleaning company built on clear standards, reliable service, and fair treatment of staff."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
