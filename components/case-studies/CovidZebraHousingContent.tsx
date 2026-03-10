import InfoCard from "@/components/shared/InfoCard";
import TwoColumnSection from "@/components/shared/TwoColumnSection";

export default function CovidZebraHousingContent() {
  return (
    <TwoColumnSection
      className="max-w-6xl"
      main={
        <InfoCard className="p-8">
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
        </InfoCard>
      }
      side={
        <InfoCard className="bg-[#fbfffb] p-8 shadow-[0_18px_40px_rgba(20,51,22,0.06)]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Key facts</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
            <li>Lone-cleaner deployment model at contract start</li>
            <li>Enhanced DBS Live Update employee model</li>
            <li>Covid-19, COSHH and hygiene-focused training</li>
            <li>CITATION award-winning training programme</li>
            <li>Guidance aligned with DFE and Public Health England</li>
          </ul>
        </InfoCard>
      }
    />
  );
}
