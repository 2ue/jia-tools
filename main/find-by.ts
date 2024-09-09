import { isType } from './is-type';
import type { FilterArr, FilterOption } from '../types';
type ArrValue<T> = T[];

/**
 * 查找数组集合中符合特征的元素
 * @export
 * @template T
 * @param {ArrValue<T>} arr
 * @param {FilterArr} filter
 * @param {FilterOption} options
 * @returns {ArrValue<T>}
 */
export function findBy<T>(arr: ArrValue<T>, filter?: FilterArr<T>, options?: FilterOption): ArrValue<T> {
  const result: ArrValue<T> = [];
  if (!isType<Function>(filter, 'function')) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i)) {
      result.push(arr[i]);
      // 0或者不定义表示返回所有
      if (options?.returnNum && result.length >= options?.returnNum) {
        break;
      }
    }
  }
  return result;
}