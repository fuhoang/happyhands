import Link from "next/link";
import { servicePageContent } from "@/lib/services";

type ServiceBreadcrumbProps = {
  title: string;
};

export default function ServiceBreadcrumb({ title }: ServiceBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 mt-1 flex flex-wrap items-center gap-2 text-sm font-black tracking-[0.08em] text-white/78"
    >
      <Link href="/" className="transition hover:text-white">
        {servicePageContent.breadcrumbHomeLabel}
      </Link>
      <span className="text-white/45">/</span>
      <Link href="/services" className="transition hover:text-white">
        {servicePageContent.breadcrumbIndexLabel}
      </Link>
      <span className="text-white/45">/</span>
      <span className="text-white">{title}</span>
    </nav>
  );
}
