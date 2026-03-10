import InfoCard from "@/components/shared/InfoCard";
import TwoColumnSection from "@/components/shared/TwoColumnSection";

export default function ZebraHousingContent() {
  return (
    <TwoColumnSection
      className="max-w-6xl"
      main={
        <InfoCard className="p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Project overview</p>
          <h2 className="mt-3 site-h2-lg">
            Zebra Housing Association, Central London
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#5f7d69]">
            <p>
              Based in London, Zebra Housing Association is a specialist not-for-profit housing association providing accommodation and support services to international students and their dependants. The association has more than fifty years of experience in this specialised area, offering good-value accommodation and responsive support to its tenants. Zebra’s aim is to provide a quiet and safe environment for residents and their families while they are staying in London. The association has 140 flats, employs ten staff, and provides accommodation to 250 people.
            </p>
            <p>
              Zebra provides accommodation to students from every continent and has well-established relationships with a core group of universities. Around 90% of residents are studying at PhD or Masters level, and Zebra serves students from major London institutions including LSE, SOAS, King’s College London, University College London, Imperial College, the Royal College of Art, Westminster University, City University, the Royal Colleges of Art and Music, the University of the Arts and London Business School. All resident students are overseas nationals, and many have partners and children.
            </p>
            <p>
              The association operates its own maintenance team for general responsive maintenance and works with Happy Hands for end of tenancy cleaning across London, as well as the cleaning of public areas across six buildings, including stairwells, shared bathrooms, lobbies and other communal spaces.
            </p>
            <p>
              Happy Hands has provided cleaning services to Zebra Housing for 15 years, delivering twice-weekly cleaning across five sites, daily cleaning at head office, and end of tenancy cleaning across its 140 flats.
            </p>
            <p>
              Lisa Harley of Zebra Housing said that they have had a long and happy relationship with Happy Hands, and that it is important to have a cleaning service able to provide a range of services, meet varying needs, and remain reliable and trustworthy. She highlighted Happy Hands as extremely flexible and exceptionally responsive, often with very little notice, and praised the thorough standard of cleaning delivered across multiple sites.
            </p>
          </div>
        </InfoCard>
      }
      side={
        <InfoCard className="bg-[#fbfffb] p-6 shadow-[0_18px_40px_rgba(20,51,22,0.06)]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Key facts</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5f7d69]">
            <li>140 flats across London</li>
            <li>Accommodation for 250 residents</li>
            <li>Twice-weekly cleaning across five sites</li>
            <li>Daily cleaning at head office</li>
            <li>15-year service relationship with Happy Hands</li>
          </ul>
        </InfoCard>
      }
    />
  );
}
