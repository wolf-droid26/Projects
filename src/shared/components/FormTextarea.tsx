import React from 'react';
import type { FieldError } from 'react-hook-form';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
}

export function FormTextarea({ label, error, helperText, ...props }: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <textarea
        className={`px-3 py-2 rounded-lg bg-slate-800 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-slate-700 hover:border-slate-600'
        }`}
        rows={3}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error.message}</span>}
      {helperText && <span className="text-xs text-slate-400">{helperText}</span>}
    </div>
  );
}
