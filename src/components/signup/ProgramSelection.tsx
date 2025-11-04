'use client';

import React from 'react';
import { useSignup } from './SignupContext';
import { ChevronDown } from 'lucide-react';

const ProgramSelection = () => {
  const { form, handleChange } = useSignup();

  return (
    <div className="md:col-span-2 w-full">
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        Internship Program <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="program"
          value={form.program}
          onChange={handleChange}
          required
          className="w-full appearance-none border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 shadow-sm bg-white"
        >
          <option value="">Select a program</option>
          <option value="AI">Artificial Intelligence (AI)</option>
          <option value="MERN">MERN Stack</option>
          <option value="DS">Data Science</option>
          <option value="M Coding">Medical Coding</option>
          <option value="Clinical SAS">Clinical SAS</option>
        </select>

        {/* Dropdown icon */}
        <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
      </div>
    </div>
  );
};

export default ProgramSelection;
