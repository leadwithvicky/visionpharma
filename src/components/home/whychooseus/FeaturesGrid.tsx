// components/sections/why-choose-us/FeaturesGrid.tsx
import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Feature } from '@/types/whychooseus';

interface FeaturesGridProps {
  features: Feature[];
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </div>
);
