// components/Stats/StatsCard.tsx
'use client';
import React from 'react';

interface StatsCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

export const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => (
  <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 shadow-lg">
    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-400 rounded-lg sm:rounded-xl flex items-center justify-center">
      <Icon className="text-white w-4 h-4 sm:w-6 sm:h-6" />
    </div>
    <div>
      <div className="font-bold text-lg sm:text-xl">{value}</div>
      <div className="text-gray-600 text-xs sm:text-sm">{label}</div>
    </div>
  </div>
);
