import { isBlank } from "./is-blank";
import { isNumber } from "./is-number";
export function formateMoney(
  m: string | number,
  format?: Record<string, any>
): string {
  if (isBlank(m) || !isNumber(m)) return "0.00";
  return Number(Number(m).toFixed(2)).toLocaleString(
    "zh-CN",
    format ?? { style: "currency", currency: "CNY" }
  );
}
