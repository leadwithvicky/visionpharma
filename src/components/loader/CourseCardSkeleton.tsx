import { Skeleton } from '@/components/ui/skeleton';

const CourseCardSkeleton = () => {
  return (
    <div className="border h-full w-full bg-white border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm min-h-[300px] flex flex-col gap-3">
      <Skeleton className="w-full aspect-[5/4] rounded-t-2xl sm:rounded-t-3xl" />
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col gap-3 h-full">
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="mt-2 flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
        <Skeleton className="h-12 w-full rounded-full mt-auto" />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
