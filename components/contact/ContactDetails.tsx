import InfoCard from "@/components/shared/InfoCard";
import TwoColumnSection from "@/components/shared/TwoColumnSection";

const contactCards = [
  {
    title: "Postal Address",
    content: (
      <div className="mt-3 space-y-1 text-base leading-8 text-[#163316]">
        <p>Happy Hands Cleaning Services Ltd</p>
        <p>PO Box 30418</p>
        <p>London</p>
        <p>NW6 7FX</p>
      </div>
    ),
  },
  {
    title: "Telephone and Mobile",
    content: (
      <div className="mt-3 space-y-3 text-sm leading-7 text-[#5f7d5f]">
        <p>
          <span className="font-black text-[#163316]">Accounts:</span>{" "}
          <a href="tel:01992470222" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            01992 470 222
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">Sales (Domestic Cleaning):</span>{" "}
          <a href="tel:02084524060" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            0208 452 4060
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">Sales (Building &amp; Maintenance):</span>{" "}
          <a href="tel:02084524060" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            0208 452 4060
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">Fax:</span>{" "}
          <a href="tel:01992470222" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            01992 470 222
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">Mobile:</span>{" "}
          <a href="tel:+447973403788" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            07973 403 788
          </a>{" "}
          or{" "}
          <a href="tel:+447970211028" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            07970 211 028
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Digital Contact",
    content: (
      <div className="mt-3 space-y-3 text-sm leading-7 text-[#5f7d5f]">
        <p>
          <span className="font-black text-[#163316]">Skype:</span>{" "}
          <span className="font-semibold text-[#163316]">happy.hands</span>
        </p>
        <p>
          <span className="font-black text-[#163316]">E-mail:</span>{" "}
          <a href="mailto:happyhandscustomerservice@gmail.com" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            happyhandscustomerservice@gmail.com
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">E-mail:</span>{" "}
          <a href="mailto:mirelahappyhands@gmail.com" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            mirelahappyhands@gmail.com
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">E-mail:</span>{" "}
          <a href="mailto:jacquie@happy-hands.biz" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            jacquie@happy-hands.biz
          </a>
        </p>
        <p>
          <span className="font-black text-[#163316]">Alternative email:</span>{" "}
          <a href="mailto:happyhandsdirectors@gmail.com" className="font-semibold text-[#008000] transition hover:text-[#006600]">
            happyhandsdirectors@gmail.com
          </a>
        </p>
      </div>
    ),
  },
];

export default function ContactDetails() {
  return (
    <TwoColumnSection
      mainClassName="lg:grid-cols-[1.1fr_0.9fr]"
      main={
        <div>
          <h2 className="site-h2">How to reach us</h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
            If you need a quote, want to discuss a cleaning requirement, or
            would like to ask about availability, use the details below to
            contact Happy Hands directly.
          </p>

          <div className="mt-8 space-y-5">
            {contactCards.map((card) => (
              <InfoCard key={card.title} className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  {card.title}
                </p>
                {card.content}
              </InfoCard>
            ))}
          </div>
        </div>
      }
      side={
        <InfoCard className="bg-[#f7fbf7] p-8 shadow-none">
          <h2 className="site-h2">Registered and office details</h2>
          <div className="mt-5 space-y-6 text-sm leading-7 text-[#5f7d5f]">
            <div>
              <p className="font-black text-[#163316]">Registered Office</p>
              <div className="mt-2 space-y-1">
                <p>Happy Hands Cleaning Services Ltd</p>
                <p>7 Plaza Parade</p>
                <p>Maida Vale</p>
                <p>London</p>
                <p>NW6 5RP</p>
              </div>
            </div>

            <div>
              <p className="font-black text-[#163316]">Company details</p>
              <div className="mt-2 space-y-1">
                <p>Company Reg No. 7190269</p>
                <p>VAT Reg No. 888 5636 53</p>
              </div>
            </div>

            <div>
              <p className="font-black text-[#163316]">Additional office</p>
              <div className="mt-2 space-y-1">
                <p>Happy Hands Cleaning Services Ltd</p>
                <p>Suite 2</p>
                <p>1 Golders Green Road</p>
                <p>LONDON</p>
                <p>NW11 8DY</p>
              </div>
            </div>
          </div>
        </InfoCard>
      }
    />
  );
}
