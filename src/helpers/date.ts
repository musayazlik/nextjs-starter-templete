/**
 * Converts date to a specific format
 * @param date - Date object or string
 * @param format - Output format (default: DD/MM/YYYY)
 */
export const formatDate = (
  date: Date | string,
  format: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD" = "DD/MM/YYYY"
): string => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  switch (format) {
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    default:
      return d.toISOString();
  }
};
