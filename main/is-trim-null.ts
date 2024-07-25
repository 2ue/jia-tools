import { isNull } from "./is-null";
export function isTrimNull(value: any): value is null {
  if (isNull(value)) return true;
  if (typeof value === "string") {
    return isNull(value.replace(/[\s\uFEFF\xA0]+/g, ""));
  }
  return false;
}
