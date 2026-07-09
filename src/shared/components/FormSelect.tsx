import type { SelectHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

type FormSelectProps = Readonly<
  SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    error?: FieldError;
    options: Array<{
      value: string;
      label: string;
    }>;
    placeholder?: string;
  }
>;

export function FormSelect({
  label,
  error,
  options,
  placeholder,
  id,
  ...props
}: FormSelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={selectId} className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        id={selectId}
        className={`rounded-lg border bg-slate-800 px-3 py-2 text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-700 hover:border-slate-600"
        }`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-xs text-red-400">{error.message}</span>}
    </div>
  );
}