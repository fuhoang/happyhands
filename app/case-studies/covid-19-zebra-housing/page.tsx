import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Covid19ZebraHousingPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Case Study"
        title="COVID-19 Zebra Housing"
        description="A case study focused on Covid-related cleaning delivery, staff protection and compliance-led working practices at Zebra Housing."
        image="https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=1600"
        overlayClassName="bg-[linear-gradient(135deg,rgba(15,77,15,0.82)_0%,rgba(24,96,24,0.72)_55%,rgba(47,138,47,0.54)_100%)]"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-md border border-[#d7e6d7] bg-white p-8 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Project overview</p>
            <h2 className="mt-3 site-h2-lg">
              COVID 19 case study Zebra Housing Association
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5f7d69]">
              <p>
                At the start of the contract, we deliberately spread the sites across as many lone cleaners as possible. The purpose was to contain any possible contamination to the cleaner and the site.
              </p>
              <p>
                As all our cleaners are employees and covered by Enhanced DBS Live Update checks, they are protected at all times under the Health and Safety at Work Act. Happy Hands Cleaning Services therefore owes a duty of care to our staff and ensures they are trained and protected to reduce the risk of harm.
              </p>
              <p>
                During the pandemic, all our cleaners received training that included Coronavirus COVID-19 awareness, COSHH awareness for employees, fire extinguisher use, fire safety awareness, basic food awareness, hand hygiene, hand hygiene for care, general health and safety awareness, and social distancing. This programme was further strengthened by Queen Elizabeth award-winning CITATION training.
              </p>
              <p>
                The training framework was designed to be practical and robust, enabling our cleaners to work with confidence and with the necessary safety controls in place.
              </p>
              <p>
                Our current clients, including London Borough of Brent Early Years, Zebra Housing for Imperial College, LSE and UCL accommodation, and London Borough of Camden LSI FE, have also provided access to comprehensive Department for Education and Public Health England guidance for cleaning these properties.
              </p>
            </div>
          </article>

          <aside className="self-start rounded-md border border-[#d7e6d7] bg-[#fbfffb] p-8 shadow-[0_18px_40px_rgba(20,51,22,0.06)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Key facts</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
              <li>Lone-cleaner deployment model at contract start</li>
              <li>Enhanced DBS Live Update employee model</li>
              <li>Covid-19, COSHH and hygiene-focused training</li>
              <li>CITATION award-winning training programme</li>
              <li>Guidance aligned with DFE and Public Health England</li>
            </ul>
          </aside>
        </div>
      </section>
      <CtaBanner
        eyebrow="Need a similar outcome?"
        title="Talk to Happy Hands about compliant cleaning support."
        description=""
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Get Quote"
      />
      <SiteFooter />
    </main>
  );
}
