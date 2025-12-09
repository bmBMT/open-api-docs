export function isObject(value: unknown) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
