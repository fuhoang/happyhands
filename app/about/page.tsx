import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="About Happy Hands"
        title="Professional cleaning built on consistency, trust, and care."
        description="Happy Hands has built its reputation by delivering reliable cleaning services with high standards, friendly support, and attention to detail across homes, businesses, and specialist environments."
        image="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-md border border-[#d7e6d7] bg-white p-8 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
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
          </article>

          <aside className="self-start rounded-md border border-[#d7e6d7] bg-[#f7fbf7] p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
              Our values
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#5f7d69]">
              <li>High standards delivered consistently across every site.</li>
              <li>Responsive communication and tailored client support.</li>
              <li>Fair treatment, training, and long-term retention of staff.</li>
              <li>Rigorous vetting for client confidence and peace of mind.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            The Happy Hands Team
          </p>
          <h2 className="mt-3 site-h2">Built around dependable people and clear standards.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
            <div
              className="h-52 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900')",
              }}
            />
            <div className="p-6">
              <h3 className="site-h3">Operations</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
                Reliable delivery across homes, offices, communal spaces, and managed properties.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
            <div
              className="h-52 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=900')",
              }}
            />
            <div className="p-6">
              <h3 className="site-h3">Training</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
                Structured onboarding, clear processes, and regular standards-led development.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
            <div
              className="h-52 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=900')",
              }}
            />
            <div className="p-6">
              <h3 className="site-h3">Support</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7d69]">
                A responsive office team that helps clients and operatives stay aligned.
              </p>
            </div>
          </article>
        </div>
      </section>
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Looking for reliable cleaning support?"
        description="Speak to our team about tailored cleaning support for homes, offices, retail, hospitality, and events."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
