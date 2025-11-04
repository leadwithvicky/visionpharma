export const formatDateTimeStamp = (dateString: string | undefined) => {
  if (!dateString) return '-';
  try {
    return new Date(dateString).toLocaleDateString();
  } catch (e) {
    return 'Invalid Date';
  }
};

// Helper function to format time
export const formatTime = (isoTime: string) => {
  if (!isoTime) return '';
  try {
    // Handle HH:MM format
    if (isoTime.includes(':') && isoTime.length <= 5) {
      return isoTime;
    }

    // Handle full ISO string
    const date = new Date(isoTime);
    // Check if date is valid before formatting
    if (isNaN(date.getTime())) {
      console.warn(`Invalid time value: ${isoTime}`);
      return isoTime || 'Invalid time';
    }

    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use AM/PM format
    });
  } catch (error) {
    console.warn(`Error formatting time: ${isoTime}`, error);
    return isoTime || 'Invalid time'; // Fallback
  }
};
