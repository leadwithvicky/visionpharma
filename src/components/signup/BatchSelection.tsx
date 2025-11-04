'use client';

import React from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { useSignup } from './SignupContext';

interface MonthOption {
  month: string;
  year: number;
}

const BatchSelection: React.FC = () => {
  const { form, handleChange } = useSignup();

  const currentDate = new Date();
  const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Generate next 6 months
  const nextSixMonths: MonthOption[] = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i);
    return {
      month: monthNames[date.getMonth()],
      year: date.getFullYear()
    };
  });

  const uniqueYears: number[] = Array.from(new Set(nextSixMonths.map(m => m.year)));
  const selectedYear = Number(form.batchYear);
  const filteredMonths: string[] = nextSixMonths
    .filter(m => m.year === selectedYear)
    .map(m => m.month);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Batch Year */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1 gap-1">
          <CalendarIcon className="w-4 h-4" />
          Batch Year *
        </label>
        <select
          name="batchYear"
          value={form.batchYear}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Select Year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Batch Month */}
      {form.batchYear && (
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1 gap-1">
            <ClockIcon className="w-4 h-4" />
            Batch Month *
          </label>
          <select
            name="batchMonth"
            value={form.batchMonth}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="">Select Month</option>
            {filteredMonths.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default BatchSelection;
