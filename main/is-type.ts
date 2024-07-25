import { getType } from "./get-type";

export function isType<T>(value: any, type: string): value is T {
  return getType(value) === type.toLowerCase();
}
