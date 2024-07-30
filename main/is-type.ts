import { getType } from "./get-type";

/**
 * 判断值的类型
 * @param value 目标值
 * @param type 目标类型
 * @returns
 */
export function isType<P>(value: any, type: string): value is P {
  return getType(value) === type.toLowerCase();
}
