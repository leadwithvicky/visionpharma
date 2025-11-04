import React from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface CardSkeletonProps {
  title?: boolean;
  inputCount?: number;
  hasTextArea?: boolean;
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  title = true,
  inputCount = 3,
  hasTextArea = true,
  className = '',
}) => {
  return (
    <Card className={`p-6 ${className}`}>
      {title && <Skeleton className="h-8 w-48 mb-6" />}
      <div className="space-y-4">
        {Array(inputCount)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={`input-skeleton-${i}`} className="h-10 w-full" />
          ))}
        {hasTextArea && <Skeleton className="h-24 w-full" />}
      </div>
    </Card>
  );
};
