import { isBlank } from "./is-blank";
import { isType } from "./is-type";

export function filterEmptyValue<T>(data: any): T {
  if (isBlank(data) || !isType<Record<string, any>>(data, "object")) return data;
  const temp: Record<string, any> = {};
  Object.keys(data).forEach((key) => {
    if (!isBlank(data[key])) temp[key] = data[key];
  });
  return temp as any;
}
