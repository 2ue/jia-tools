import { isBlank } from "./is-blank";
export function formateMoney(m: string | number): string {
  if (isBlank(m)) return "0.00";
  return Number(Number(m).toFixed(2)).toLocaleString();
}
