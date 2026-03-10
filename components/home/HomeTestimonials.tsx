import { homeContent } from "@/lib/site-content";

const testimonials = [
  [
    "Happy Hands made the place feel brand new. They were punctual, friendly, and the finish was excellent.",
    "Sarah, homeowner",
    "bg-white",
  ],
  [
    "We needed reliable office cleaning and got exactly that. Clear communication, flexible booking, and consistently tidy results.",
    "Daniel, studio manager",
    "bg-[#f3fff3]",
  ],
  [
    "The rental turnaround was fast and detailed. Guests noticed how fresh everything felt as soon as they walked in.",
    "Mia, host",
    "bg-white",
  ],
] as const;

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#008000]">
          Testimonials
        </p>
        <h2 className="mt-3 site-h2-lg">{homeContent.testimonialsHeading}</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map(([quote, author, tone]) => (
          <article
            key={author}
            className={`rounded-md border-2 border-[#b7ddb7]/60 p-7 shadow-[0_18px_45px_rgba(0,128,0,0.08)] ${tone}`}
          >
            <p className="text-base leading-8 text-[#6f8f6f]">“{quote}”</p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#008000]">
              {author}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
