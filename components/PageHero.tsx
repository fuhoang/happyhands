import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
  overlayClassName?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  overlayClassName = "bg-[linear-gradient(135deg,rgba(32,96,48,0.66)_0%,rgba(64,148,86,0.52)_55%,rgba(156,218,164,0.3)_100%)]",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#d7e6d7] bg-[#0f4d0f]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#9edf9e]/8 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-10">
        {children}
        <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
          {description}
        </p>
      </div>
    </section>
  );
}
