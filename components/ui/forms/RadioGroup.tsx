type RadioGroupProps = {
  legend: string;
  name: string;
  options: string[];
  error?: string;
  columnsClassName?: string;
};

export default function RadioGroup({
  legend,
  name,
  options,
  error,
  columnsClassName = "sm:grid-cols-2",
}: RadioGroupProps) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-bold text-[#163316]">{legend}</legend>
      <div className={`grid gap-3 ${columnsClassName}`.trim()}>
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 rounded-sm border border-[#d8e8d8] bg-[#f9fcf9] px-4 py-3 text-sm text-[#163316]"
          >
            <input name={name} value={option} type="radio" className="h-4 w-4 accent-[#008000]" />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error ? <span className="text-sm font-semibold text-[#b42318]">{error}</span> : null}
    </fieldset>
  );
}
