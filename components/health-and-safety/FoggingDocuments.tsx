import InfoCard from "@/components/shared/InfoCard";

const documents = [
  {
    label: "Laboratory Testing of the Residual Activity of Vivid™ SENSE",
    href: "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Laboratory-Testing-of-Residual-Activity.pdf",
  },
  {
    label: "Vivid™ SENSE Fogging Solution Data Sheet",
    href: "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-Performance-Report.pdf",
  },
  {
    label: "COSHH-ASSESSMENT Vivid™ SENSE Disinfectant Fogging Solution",
    href: "https://happy-hands.biz/2020/wp-content/uploads/2021/02/VIVID-105-COSHH-Sheet.pdf",
  },
];

export default function FoggingDocuments() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
      <InfoCard className="p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
          Fogging Health &amp; Safety Record
        </p>
        <h2 className="mt-3 site-h2">Supporting documents for fogging health and safety.</h2>
        <p className="mt-5 text-base leading-8 text-[#5f7d69]">
          Documents relating to our fogging health and safety in the workplace:
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f7d69]">
          {documents.map((document) => (
            <li key={document.href}>
              <a
                href={document.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#008000] transition hover:text-[#006600]"
              >
                {document.label}
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>
    </section>
  );
}
