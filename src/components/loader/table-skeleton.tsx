import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  cellWidths?: (string | undefined)[];
  cellHeight?: string;
}

// Generate default cell widths based on column count
const getDefaultCellWidths = (columnCount: number): string[] => {
  // Common column patterns based on count
  switch (columnCount) {
    case 3:
      return ['full', 'full', '32'];
    case 4:
      return ['full', 'full', '32', '24'];
    case 5:
      return ['full', 'full', '32', '24', '24'];
    case 6:
      return ['full', 'full', '24', '24', '32', '32'];
    case 7:
      return ['full', 'full', '24', '20', '32', '32', '40'];
    case 8:
      return ['full', 'full', '24', '32', '16', '20', '32', '40'];
    case 9:
      return ['full', 'full', '12', 'full', '24', '20', '32', '32', '40'];
    default:
      // For any other column count, make first column full width and others fixed width
      return Array(columnCount)
        .fill('32')
        .map((width, index) => (index === 0 ? 'full' : width));
  }
};

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 5,
  columns = 3,
  cellWidths: customWidths,
  cellHeight = '5',
}) => {
  // Use custom widths if provided, otherwise generate defaults
  const cellWidths = customWidths?.length
    ? customWidths
    : getDefaultCellWidths(columns);

  return (
    <>
      {Array(rows)
        .fill(0)
        .map((_, rowIndex) => (
          <TableRow key={rowIndex} className="hover:bg-gray-50">
            {Array(columns)
              .fill(0)
              .map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    className={`h-${cellHeight} w-${
                      cellWidths[colIndex] || 'full'
                    }`}
                  />
                </TableCell>
              ))}
          </TableRow>
        ))}
    </>
  );
};
