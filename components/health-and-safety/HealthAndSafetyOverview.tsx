import InfoCard from "@/components/ui/InfoCard";
import TwoColumnSection from "@/components/ui/TwoColumnSection";

export default function HealthAndSafetyOverview() {
  return (
    <TwoColumnSection
      main={
        <InfoCard className="p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Our approach
          </p>
          <h2 className="mt-3 site-h2-lg">Practical standards that protect staff, clients, and sites.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#5f7d69]">
            <p>
              Happy Hands operates with clear health and safety procedures designed to support safe, consistent delivery across domestic, commercial, retail, hospitality, event, and specialist cleaning environments.
            </p>
            <p>
              Our teams work to defined processes covering site access, safe use of products, equipment handling, hygiene expectations, and day-to-day working practices so that clients receive a reliable and controlled service.
            </p>
            <p>
              We maintain a strong emphasis on staff training, documented procedures, and practical supervision so that our cleaning teams can work confidently while meeting the standards expected across each property type.
            </p>
          </div>
        </InfoCard>
      }
      side={
        <InfoCard className="bg-[#f7fbf7] p-8 shadow-none">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Key standards
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
            <li>Site-specific risk awareness and controlled working methods.</li>
            <li>Clear product handling and hygiene procedures for staff.</li>
            <li>Documented training and operational consistency across teams.</li>
            <li>Flexible scheduling that supports safe delivery around client operations.</li>
          </ul>
        </InfoCard>
      }
    />
  );
}
