import { SelectHTMLAttributes } from "react";
import {
  baseFieldClassName,
  fieldDefaultClassName,
  fieldErrorClassName,
} from "@/lib/forms";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export default function SelectField({ className = "", error, ...props }: SelectFieldProps) {
  return (
    <select
      {...props}
      aria-invalid={error ? "true" : "false"}
      className={`${baseFieldClassName} ${
        error ? fieldErrorClassName : fieldDefaultClassName
      } ${className}`.trim()}
    />
  );
}
