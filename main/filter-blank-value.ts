import { isBlank } from "./is-blank";
import { isType } from "./is-type";

/**
 * 过滤对象数据中的空值
 * @export
 * @template T
 * @param {*} data
 * @returns {T}
 */
export function filterBlankValue<T>(data: any): T {
  const valueIsObject = isType<Record<string, any>>(data, "object");
  const valueIsArray = Array.isArray(data);
  if (isBlank(data) || !valueIsArray || !valueIsObject) {
    return data;
  }
  if (valueIsArray) {
    return data.filter(v => !isBlank(v)) as T;
  }
  if (valueIsArray) {
    const temp: Record<string, any> = {};
    Object.keys(data).forEach((key) => {
      if (!isBlank(data[key])) temp[key] = data[key];
    });
    return temp as T;
  }
  return data;
}
