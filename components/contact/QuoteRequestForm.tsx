import InfoCard from "@/components/shared/InfoCard";
import TwoColumnSection from "@/components/shared/TwoColumnSection";

const services = [
  "Home Cleaning",
  "Office Cleaning",
  "End of Tenancy",
  "Carpet Cleaning",
  "After Builders Cleaning",
  "Event Cleaning",
  "Fogging",
  "Other",
];

const propertyTypes = ["House", "Flat", "Office", "Retail", "Hospitality Venue", "Other"];

const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly", "Not sure yet"];

export default function QuoteRequestForm() {
  return (
    <section className="bg-[#f7fbf7] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">Quote request</p>
          <h2 className="mt-3 site-h2">Tell us what you need cleaned</h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
            Send the key details and Happy Hands will respond with a tailored
            quote for domestic, commercial, retail, hospitality, or specialist
            cleaning work.
          </p>
        </div>

        <TwoColumnSection
          sectionClassName="px-0 pb-0 pt-10"
          containerClassName="max-w-none"
          mainClassName="items-start lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]"
          main={
            <InfoCard className="p-6 sm:p-8">
              <form className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Service Required</span>
                  <select
                    name="service"
                    defaultValue=""
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition focus:border-[#008000]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Property Type</span>
                  <select
                    name="propertyType"
                    defaultValue=""
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition focus:border-[#008000]"
                  >
                    <option value="" disabled>
                      Select property type
                    </option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Frequency</span>
                  <select
                    name="frequency"
                    defaultValue=""
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition focus:border-[#008000]"
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>
                    {frequencies.map((frequency) => (
                      <option key={frequency} value={frequency}>
                        {frequency}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Preferred Date</span>
                  <input
                    type="date"
                    name="preferredDate"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Postcode</span>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Property postcode"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Property Size</span>
                  <input
                    type="text"
                    name="propertySize"
                    placeholder="Bedrooms, floors, desks, or any useful size details"
                    className="min-h-12 rounded-sm border border-[#cfe1cf] bg-white px-4 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#163316]">Additional Details</span>
                  <textarea
                    name="details"
                    rows={6}
                    placeholder="Tell us about the cleaning requirement, timing, access, or anything else that will help us quote accurately."
                    className="rounded-sm border border-[#cfe1cf] bg-white px-4 py-3 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000]"
                  />
                </label>

                <div>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#008000] px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600]"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </InfoCard>
          }
          side={
            <InfoCard className="bg-white p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">What to include</p>
              <h3 className="mt-3 site-h3">Help us quote accurately</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
                <li>Tell us the service you need and whether it is one-off or ongoing.</li>
                <li>Include the property type, size, and postcode so we can assess scope.</li>
                <li>Mention any access restrictions, deadlines, or specialist cleaning requirements.</li>
                <li>Add preferred dates so we can respond with practical availability.</li>
              </ul>
              <div className="mt-8 border-t border-[#dce8dc] pt-6 text-sm leading-7 text-[#5f7d69]">
                <p className="font-black text-[#163316]">Need a faster response?</p>
                <p className="mt-2">
                  Call{" "}
                  <a href="tel:+447973403788" className="font-semibold text-[#008000] transition hover:text-[#006600]">
                    07973 403 788
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:happyhandscustomerservice@gmail.com"
                    className="font-semibold text-[#008000] transition hover:text-[#006600]"
                  >
                    happyhandscustomerservice@gmail.com
                  </a>
                  .
                </p>
              </div>
            </InfoCard>
          }
        />
      </div>
    </section>
  );
}
