import React from "react";
import type { FieldError } from "react-hook-form";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
}

export function FormTextarea({
  label,
  error,
  helperText,
  id,
  ...props
}: FormTextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={textareaId} className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <textarea
        id={textareaId}
        rows={3}
        className={`resize-none rounded-lg border bg-slate-800 px-3 py-2 text-white placeholder-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-700 hover:border-slate-600"
        }`}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-400">{error.message}</span>
      )}

      {helperText && (
        <span className="text-xs text-slate-400">{helperText}</span>
      )}
    </div>
  );
}