import React from 'react';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { CardSkeleton } from './card-skeleton';

interface TabsSkeletonProps {
  tabCount?: number;
  inputCount?: number;
  hasTextArea?: boolean;
  padding?: string;
}

export const TabsSkeleton: React.FC<TabsSkeletonProps> = ({
  tabCount = 3,
  inputCount = 3,
  hasTextArea = true,
  padding = 'px-4',
}) => {
  return (
    <div className={`space-y-6 ${padding}`}>
      <Tabs defaultValue="general">
        <TabsList>
          {Array(tabCount)
            .fill(0)
            .map((_, i) => (
              <Skeleton
                key={`tab-skeleton-${i}`}
                className={`h-10 w-${i === 0 ? '24' : '20'} ${
                  i > 0 ? 'ml-2' : ''
                }`}
              />
            ))}
        </TabsList>
        <div className="mt-6">
          <CardSkeleton inputCount={inputCount} hasTextArea={hasTextArea} />
        </div>
      </Tabs>
    </div>
  );
};
