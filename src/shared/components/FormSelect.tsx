import React from 'react';
import type { FieldError } from 'react-hook-form';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  options: Array<{
    value: string;
    label: string;
  }>;
  placeholder?: string;
}

export function FormSelect({
  label,
  error,
  options,
  placeholder,
  ...props
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <select
        className={`px-3 py-2 rounded-lg bg-slate-800 border text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-slate-700 hover:border-slate-600'
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
