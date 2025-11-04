'use client';

import React from 'react';

interface CircularProgressLoaderProps {
  percentage: number;
  label: string;
  size?: number; // Optional size in pixels (default 96 -> w-24, h-24)
  strokeWidth?: number; // Optional stroke width (default 10)
}

const CircularProgressLoader: React.FC<CircularProgressLoaderProps> = ({
  percentage,
  label,
  size = 96,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);
  const viewBoxSize = size + strokeWidth; // Adjust viewBox to prevent clipping

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center z-10 bg-gray-100">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        >
          {/* Background circle */}
          <circle
            className="text-gray-300 stroke-current"
            strokeWidth={strokeWidth}
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            r={radius}
            fill="transparent"
          ></circle>
          {/* Progress circle */}
          <circle
            className="text-blue-500 stroke-current transition-all duration-150 ease-linear"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`} // Start from top
          ></circle>
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-xl font-medium text-blue-600">
            {`${percentage}%`}
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
};

export default CircularProgressLoader;
