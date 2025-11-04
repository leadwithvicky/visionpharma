// utils/formatDateTime.js
import { format, parseISO, isValid } from 'date-fns';

/**
 * Formats a date or time using a given pattern.
 * @param {Date|string} date - Date object or ISO string
 * @param {string} formatStr - Format pattern (e.g. 'yyyy-MM-dd', 'HH:mm')
 * @returns {string} - Formatted date/time string
 */
export function formatDateTime(date: Date | string, formatStr: string) {
  if (!date) return '';

  try {
    // Parse the date if it's a string
    let parsedDate: Date;
    if (typeof date === 'string') {
      // Check if it's a time string (HH:MM)
      if (date.includes(':') && date.length <= 5) {
        // For simple time strings like "09:30", we don't need to parse as ISO
        // Just return as is since it's already in the right format for time
        if (formatStr === 'HH:mm') return date;

        // For other formats, we'd need a valid date, so we'll return empty
        console.warn(
          `Cannot format time string ${date} with format ${formatStr}`
        );
        return '';
      }

      parsedDate = parseISO(date);
    } else {
      parsedDate = date;
    }

    // Verify date is valid before formatting
    if (!isValid(parsedDate)) {
      console.warn(`Invalid date: ${date}`);
      return '';
    }

    return format(parsedDate, formatStr);
  } catch (error) {
    console.error(`Error formatting date/time: ${date}`, error);
    return '';
  }
}
// const isoDate = '2025-04-04T06:30:00.000Z';
// console.log(formatDateTime(isoDate, 'yyyy-MM-dd')); // ➤ 2025-04-04
// console.log(formatDateTime(isoDate, 'HH:mm'));      // ➤ 06:30
// console.log(formatDateTime(isoDate, 'MMMM do, yyyy')); // ➤ April 4th, 2025
