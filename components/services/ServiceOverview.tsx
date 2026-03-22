type ServiceOverviewProps = {
  title: string;
  intro: string;
  body?: string[];
};

export default function ServiceOverview({ title, intro, body }: ServiceOverviewProps) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
      <div>
        <h2 className="site-h2">{title}</h2>
        <p className="mt-5 text-base leading-8 text-[#5f7d5f]">{intro}</p>
        {body?.map((paragraph) => (
          <p key={paragraph} className="mt-5 text-base leading-8 text-[#5f7d5f]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
