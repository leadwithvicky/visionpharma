/**
 * Generates an array of years suitable for batch selection.
 * Includes all years from a specified start year up to the current year,
 * plus a specified number of future years after the current year.
 *
 * @param startYear The first year to include (e.g., 2024).
 * @param futureYearsCount The number of years to include after the current year (e.g., 5).
 * @returns An array of numbers representing the years.
 */
export const generateBatchYears = (
  startYear: number,
  futureYearsCount: number
): number[] => {
  const currentYear = new Date().getFullYear();

  // Generate years from startYear up to the current year
  const pastAndCurrentYearsCount =
    currentYear >= startYear ? currentYear - startYear + 1 : 0;
  const pastAndCurrentYears =
    pastAndCurrentYearsCount > 0
      ? Array.from(
          { length: pastAndCurrentYearsCount },
          (_, i) => startYear + i
        )
      : [];

  // Generate the future years after the current year
  const futureYears = Array.from(
    { length: futureYearsCount },
    (_, i) => currentYear + 1 + i
  );

  // Combine and return
  const years = [...pastAndCurrentYears, ...futureYears];
  // Optional: Sort if needed
  // years.sort((a, b) => a - b);
  return years;
};
