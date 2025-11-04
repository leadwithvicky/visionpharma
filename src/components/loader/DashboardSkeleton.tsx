import { Skeleton } from '@/components/ui/skeleton';

const DashboardSkeleton = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar skeleton */}
      <div className="w-64 border-r bg-background p-4">
        <Skeleton className="h-10 w-32 mb-6" />
        <div className="space-y-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="flex-1 p-6">
        <Skeleton className="h-12 w-48 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
