'use client';
import React from 'react';

export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  iconRight,
  error,
  disabled = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-foreground">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-12 pr-10 py-3 rounded-lg border text-base font-medium placeholder:font-normal focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none bg-white/50"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
        {iconRight && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer">
            {iconRight}
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
