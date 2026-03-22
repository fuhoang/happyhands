type FormErrorMessageProps = {
  message: string;
};

export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  return <p className="text-sm font-semibold text-[#b42318]">{message}</p>;
}
