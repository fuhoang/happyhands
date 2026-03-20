import { InputHTMLAttributes } from "react";
import {
  baseFieldClassName,
  fieldDefaultClassName,
  fieldErrorClassName,
} from "@/lib/forms";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function TextInput({ className = "", error, ...props }: TextInputProps) {
  return (
    <input
      {...props}
      aria-invalid={error ? "true" : "false"}
      className={`${baseFieldClassName} ${
        error ? fieldErrorClassName : fieldDefaultClassName
      } ${className}`.trim()}
    />
  );
}
