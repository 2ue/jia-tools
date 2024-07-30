import { isNull } from "./is-null";

/**
 * 基于isNull后，再判断对象是否为空：{}, []
 * @param {any} value:any
 * @returns {any}
 */
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
