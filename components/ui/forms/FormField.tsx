import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function FormField({
  label,
  error,
  hint,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <label className={`grid gap-2 ${className}`.trim()}>
      <span className="text-sm font-bold text-[#163316]">{label}</span>
      {hint ? <span className="text-sm text-[#5f7d69]">{hint}</span> : null}
      {children}
      {error ? <span className="text-sm font-semibold text-[#b42318]">{error}</span> : null}
    </label>
  );
}
