import { isType } from './is-type';
import { isNull } from "./is-null";

/**
 * 安全的格式化string为json数据
 * 1、如果为空值或者格式不为string，返回默认值或者原值
 * 2、如果处理报错则catch错误，且不影响外层逻辑
 * @export
 * @template P
 * @param {string} str - 需要处理的string
 * @param {?*} [defaultValue] - 处理出错或者为空时返回的默认值
 * @returns {P}
 */
export function string2Json<P>(str: string, defaultValue?: any): P {
  if (isNull(str) || !isType<string>(str, 'string')) {
    return defaultValue;
  }
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error(e);
    return defaultValue;
  }
}
