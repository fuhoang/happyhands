const teamCards = [
  {
    title: "Operations",
    copy: "Reliable delivery across homes, offices, communal spaces, and managed properties.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Training",
    copy: "Structured onboarding, clear processes, and regular standards-led development.",
    image:
      "https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Support",
    copy: "A responsive office team that helps clients and operatives stay aligned.",
    image:
      "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function AboutTeam() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:px-10">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
          The Happy Hands Team
        </p>
        <h2 className="mt-3 site-h2">Built around dependable people and clear standards.</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {teamCards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)]"
          >
            <div
              className="h-52 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.image}')` }}
            />
            <div className="p-6">
              <h3 className="site-h3">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7d69]">{card.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
