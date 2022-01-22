import { format } from "date-fns";

// Converts an ISO date value to a friendly string representation
// e.g February 21st, 2022
export function ISOToFriendlyDate(isoDate: Date) {
  const isoString = isoDate.toString();
  const dateOnly = isoString.substring(0, isoString.indexOf("T"));
  return format(new Date(dateOnly), "PPP");
}
