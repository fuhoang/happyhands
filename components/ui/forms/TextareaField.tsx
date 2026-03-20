import { TextareaHTMLAttributes } from "react";
import { fieldDefaultClassName, fieldErrorClassName } from "@/lib/forms";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export default function TextareaField({
  className = "",
  error,
  ...props
}: TextareaFieldProps) {
  return (
    <textarea
      {...props}
      aria-invalid={error ? "true" : "false"}
      className={`rounded-sm border bg-white px-4 py-3 text-sm text-[#163316] outline-none transition placeholder:text-[#83a183] focus:border-[#008000] ${
        error ? fieldErrorClassName : fieldDefaultClassName
      } ${className}`.trim()}
    />
  );
}
