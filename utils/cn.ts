type ClassValue = string | false | null | undefined;

/** Joins class names, dropping falsy values. */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}
