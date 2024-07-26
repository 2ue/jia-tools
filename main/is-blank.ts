import { isNull } from "./is-null";
export function isBlank(value: any): boolean {
  if (isNull(value)) return true;
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return false;
}
