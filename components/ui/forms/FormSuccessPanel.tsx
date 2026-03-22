import { ReactNode } from "react";

type FormSuccessPanelProps = {
  eyebrow: string;
  title: string;
  message: string;
  action: ReactNode;
};

export default function FormSuccessPanel({
  eyebrow,
  title,
  message,
  action,
}: FormSuccessPanelProps) {
  return (
    <div className="grid gap-5">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-[2.4]">
          <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">{eyebrow}</p>
        <h3 className="mt-3 site-h3">{title}</h3>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f7d69]">{message}</p>
      </div>
      <div className="flex flex-wrap gap-3">{action}</div>
    </div>
  );
}
