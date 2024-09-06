import { isNull } from './is-null';

/**
 * 在isNull的基础上判断去掉所有空格后，是否是空字符串
 *
 * @export
 * @param {*} value
 * @returns {value is null}
 */
export function isTrimNull(value: any): value is null {
  if (isNull(value)) return true;
  if (typeof value === 'string') {
    return isNull(value.replace(/[\s\uFEFF\xA0]+/g, ''));
  }
  return false;
}
