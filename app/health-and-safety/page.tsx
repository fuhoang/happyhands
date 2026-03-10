import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HealthAndSafetyPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Happy Hands Standards"
        title="Health and Safety"
        description="We maintain clear health and safety procedures to protect our clients, our staff, and every environment we work in across London and the Home Counties."
        image="https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-md border border-[#d7e6d7] bg-white p-8 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
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
          </article>

          <aside className="self-start rounded-md border border-[#d7e6d7] bg-[#f7fbf7] p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
              Key standards
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
              <li>Site-specific risk awareness and controlled working methods.</li>
              <li>Clear product handling and hygiene procedures for staff.</li>
              <li>Documented training and operational consistency across teams.</li>
              <li>Flexible scheduling that supports safe delivery around client operations.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-md border border-[#d7e6d7] bg-white p-8 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Fogging Health &amp; Safety Record
          </p>
          <h2 className="mt-3 site-h2">Supporting documents for fogging health and safety.</h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d69]">
            Documents relating to our fogging health and safety in the workplace:
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
            <li>
              <a
                href="https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Laboratory-Testing-of-Residual-Activity.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#008000] transition hover:text-[#006600]"
              >
                Laboratory Testing of the Residual Activity of Vivid™ SENSE
              </a>
            </li>
            <li>
              <a
                href="https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Performance-Report.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#008000] transition hover:text-[#006600]"
              >
                Vivid™ SENSE Fogging Solution Data Sheet
              </a>
            </li>
            <li>
              <a
                href="https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-COSHH-Sheet.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#008000] transition hover:text-[#006600]"
              >
                COSHH-ASSESSMENT Vivid™ SENSE Disinfectant Fogging Solution
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Need a cleaning team with strong standards?"
        description="Speak to us about cleaning support backed by professional processes, reliable staff, and consistent site care."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
