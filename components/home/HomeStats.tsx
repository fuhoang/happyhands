const stats = [
  ["450+", "spaces cleaned each month", "bg-[#f3fff3]"],
  ["4.9/5", "average customer rating", "bg-[#fbfffb]"],
  ["Same day", "quote responses when availability allows", "bg-[#f3fff3]"],
  ["7 days", "weekly booking availability", "bg-[#fbfffb]"],
] as const;

export default function HomeStats() {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
      <div className="grid gap-4 rounded-md border-2 border-[#b7ddb7]/60 bg-white/90 p-5 shadow-[0_18px_45px_rgba(0,128,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, copy, tone]) => (
          <div key={value} className={`rounded-sm p-5 ${tone}`}>
            <p className="text-3xl font-black text-[#008000]">{value}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#6f8f6f]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
