import InfoCard from "@/components/shared/InfoCard";
import TwoColumnSection from "@/components/shared/TwoColumnSection";

export default function AboutOverview() {
  return (
    <TwoColumnSection
      main={
        <InfoCard className="p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Who we are
          </p>
          <h2 className="mt-3 site-h2-lg">A family-led cleaning company with long-term standards.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#5f7d69]">
            <p>
              Paul Russell established Happy Hands cleaning team in 1999 to provide commercial and domestic cleaning services throughout London and the Home Counties. As an independent company with family values, we pride ourselves on providing a responsive, professional cleaning service with an emphasis on high standards and a tailored service that exactly meets the needs of our clients.
            </p>
            <p>
              We understand how important it is to value our people; as a result, we have many long-standing members on our cleaning team and a low staff turnover ensuring our clients receive a consistent and reliable service. We have a rigorous recruitment and training process and because we reward our staff well we attract and retain the best candidates.
            </p>
            <p>
              All our staff members go through a detailed vetting process and their credentials and references are thoroughly checked to give our clients peace of mind.
            </p>
          </div>
        </InfoCard>
      }
      side={
        <InfoCard className="bg-[#f7fbf7] p-8 shadow-none">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Our values
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
            <li>High standards delivered consistently across every site.</li>
            <li>Responsive communication and tailored client support.</li>
            <li>Fair treatment, training, and long-term retention of staff.</li>
            <li>Rigorous vetting for client confidence and peace of mind.</li>
          </ul>
        </InfoCard>
      }
    />
  );
}
