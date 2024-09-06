import { NullValue } from '../types';

/**
 * 判断是否为空值（'', null, NaN, undefined）
 * @param {any} value
 * @returns boolean
 */
export function isNull(value: any): value is NullValue {
  return ['', null, NaN, undefined].includes(value);
}
