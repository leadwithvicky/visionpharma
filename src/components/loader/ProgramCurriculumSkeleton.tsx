import { Skeleton } from '@/components/ui/skeleton';

const ProgramCurriculumSkeleton = () => {
  return (
    <div className="bg-gray-50">
      {/* Breadcrumbs skeleton */}
      <div className="bg-white border-b">
        <nav className="font-medium">
          <ol className="flex items-center gap-2 p-4 sm:text-lg">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-4" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-4" />
            <Skeleton className="h-6 w-40" />
          </ol>
        </nav>
      </div>

      <div className="flex">
        {/* Week Navigation skeleton */}
        <div className="w-44 bg-white border-r overflow-y-auto">
          <Skeleton className="h-8 w-32 m-4" />
          <div className="p-2 space-y-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={`week-${i}`} className="h-12 w-38 mx-2" />
              ))}
          </div>
        </div>

        {/* Content Type Navigation skeleton */}
        <div className="w-44 bg-white border-r overflow-y-auto">
          <Skeleton className="h-8 w-24 m-4" />
          <div className="p-2 space-y-2">
            <Skeleton className="h-12 w-38 mx-2" />
            <Skeleton className="h-12 w-38 mx-2" />
            <Skeleton className="h-12 w-38 mx-2" />
          </div>
        </div>

        {/* Content Items skeleton */}
        <div className="w-44 bg-white border-r overflow-y-auto">
          <Skeleton className="h-8 w-24 m-4" />
          <div className="p-2 space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={`item-${i}`} className="h-12 w-38 mx-2" />
              ))}
          </div>
        </div>

        {/* Main Content Area skeleton */}
        <div className="flex-1 bg-white p-2">
          <div className="space-y-4 min-h-full">
            {/* Video/PDF container skeleton */}
            <Skeleton className="aspect-video w-full rounded-lg" />
            {/* Navigation buttons skeleton */}
            <div className="flex justify-between items-center">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
            {/* Notes area skeleton */}
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCurriculumSkeleton;
