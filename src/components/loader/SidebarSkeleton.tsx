import { Skeleton } from '@/components/ui/skeleton';

export const LeftSidebarSkeleton = ({
  isCollapsed = false,
}: {
  isCollapsed?: boolean;
}) => {
  return (
    <aside
      className={`
        fixed bottom-0 left-0 right-0 h-16 bg-white border-t z-20 // Mobile: Bottom Nav styles
        lg:relative lg:left-auto lg:right-auto lg:bottom-auto lg:top-[1px] lg:min-h-full lg:border-t-0 lg:border-r lg:z-10 // Desktop: Sidebar styles
        ${isCollapsed ? 'lg:w-16' : 'lg:w-60'} // Desktop: Collapsible width
        transition-all duration-300 ease-in-out // General transition
        bg-white // Ensure background is white for both
      `}
    >
      {/* Desktop Header Skeleton (Hidden on Mobile) */}
      <div
        className={`
          hidden lg:flex p-4 border-b border-gray-200
          ${isCollapsed ? 'justify-around' : 'justify-between'} items-center
          transition-all duration-300 ease-in-out
        `}
      >
        {/* Simple skeleton for header */}
        <Skeleton className={`h-6 ${isCollapsed ? 'w-6' : 'w-32'}`} />
      </div>

      {/* Navigation Area Skeleton */}
      <nav
        className={`
          h-full lg:h-auto lg:flex-1 lg:overflow-y-auto // Mobile: Full height of bar, Desktop: Flex-grow with scroll
          overflow-x-auto whitespace-nowrap // Mobile: Horizontal scroll
          lg:overflow-x-hidden lg:whitespace-normal // Desktop: No horizontal scroll
          py-0 lg:py-3 // Mobile: No vertical padding, Desktop: Vertical padding
          px-2 lg:px-3 ${
            isCollapsed ? 'lg:px-2' : 'lg:mr-3'
          } // Mobile/Desktop Padding
        `}
      >
        {/* Item List Skeleton */}
        <ul
          className={`flex flex-row h-full lg:flex-col lg:space-y-2 items-center lg:items-stretch space-x-2 lg:space-x-0`}
        >
          {' '}
          {/* Mobile: Row, Full Height, Center items, Space-x; Desktop: Column, Space-y */}
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <li key={i} className="flex-shrink-0 h-full lg:h-auto">
                {/* Skeleton Item: Square for mobile icon/text area, taller rect for desktop */}
                <Skeleton
                  className={`h-full w-14 lg:h-12 ${
                    isCollapsed ? 'lg:w-full' : 'lg:w-full'
                  } rounded-lg lg:rounded-xl`}
                />
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
};
