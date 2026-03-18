import { ReactNode } from "react";

const className = "h-7 w-7 fill-none stroke-current stroke-2";

export function renderServiceIcon(slug: string): ReactNode {
  switch (slug) {
    case "after-builders-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M3 19.5h18M5.5 19.5V9.8L12 5l6.5 4.8v9.7M9 19.5v-5h6v5" />
        </svg>
      );
    case "after-party-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M7 4v16M7 8c2.5 0 3.5-2 6-2s3.5 2 6 2v6c-2.5 0-3.5-2-6-2s-3.5 2-6 2" />
        </svg>
      );
    case "carpet-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "end-of-tenancy-cleaners-london":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 19h16M6 19V7h12v12M9 10h6M9 13h6" />
        </svg>
      );
    case "event-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M6 20V8l6-4 6 4v12M9 12h6M12 8v8" />
        </svg>
      );
    case "fogging":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 14h6l2-4h6M6 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm16 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM9 14V9h3" />
        </svg>
      );
    case "home-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 11.5 12 5l8 6.5M7 10.5v8h10v-8" />
        </svg>
      );
    case "office-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 19.5h16M6 19.5V5.5h12v14M10 9h4M10 12h4M10 15h4" />
        </svg>
      );
    case "retail-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 9h14l-1 10H6L5 9ZM7 9V6h10v3M9 13h6" />
        </svg>
      );
    case "rental-turnovers":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 12.5 12 6l8 6.5M6.5 11.5v7h11v-7M9 15h6" />
        </svg>
      );
    case "washing-and-ironing":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M5 16h12l2-6H9l-4 6Zm0 0h14M11 10l2-3h4" />
        </svg>
      );
    case "leisure-and-hospitality-cleaning":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M7 4v8a2 2 0 0 0 4 0V4M5 20h10M12 12v8M16 4h3v8a3 3 0 0 1-3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
  }
}
