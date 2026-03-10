import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="contact" />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Happy Hands"
        description="Speak to our team about domestic, commercial, retail, hospitality, event, and specialist cleaning services across London and the Home Counties."
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="site-h2">
              How to reach us
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
              If you need a quote, want to discuss a cleaning requirement, or
              would like to ask about availability, use the details below to
              contact Happy Hands directly.
            </p>

            <div className="mt-8 space-y-5">
              <article className="rounded-md border border-[#d7e6d7] bg-white p-6 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Postal Address
                </p>
                <div className="mt-3 space-y-1 text-base leading-8 text-[#163316]">
                  <p>Happy Hands Cleaning Services Ltd</p>
                  <p>PO Box 30418</p>
                  <p>London</p>
                  <p>NW6 7FX</p>
                </div>
              </article>

              <article className="rounded-md border border-[#d7e6d7] bg-white p-6 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Telephone and Mobile
                </p>
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
              </article>

              <article className="rounded-md border border-[#d7e6d7] bg-white p-6 shadow-[0_18px_40px_rgba(20,51,22,0.08)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#008000]">
                  Digital Contact
                </p>
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
              </article>
            </div>
          </div>

          <div className="self-start rounded-md border border-[#d7e6d7] bg-[#f7fbf7] p-8">
            <h2 className="site-h2">
              Registered and office details
            </h2>
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
          </div>
        </div>
      </section>
      <CtaBanner
        eyebrow="Ready to book"
        title="Request your cleaning quote"
        description="Tell us the property type, service needed, and preferred timing, and Happy Hands will get back to you with a tailored response."
        primaryHref="tel:+447973403788"
        primaryLabel="Call now"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email us"
      />
      <SiteFooter />
    </main>
  );
}
