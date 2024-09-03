import { isBlank } from "./is-blank";
import { isType } from "./is-type";

/**
 * 过滤对象数据中的空值
 * @export
 * @template T
 * @param {*} data
 * @returns {T}
 */
export function filterEmptyValue<T>(data: any): T {
  if (isBlank(data) || !isType<Record<string, any>>(data, "object")) {
    return data;
  }
  const temp: Record<string, any> = {};
  Object.keys(data).forEach((key) => {
    if (!isBlank(data[key])) temp[key] = data[key];
  });
  return temp as any;
}
