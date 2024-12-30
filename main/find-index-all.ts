import { isType } from './is-type';
import type { FilterArr, FilterOption } from '../types';

/**
 * 查找符合特征的元素index
 * @export
 * @template T
 * @param {T[]} arr - 目标数组
 * @param {FilterArr} filter - 条件判断，返回true则会返回对应index，反之不返回；如果filter不传，则返回空数组
 * @param {FilterOption} options - 处理的一些配置
 * @returns {number[]} 符合特征的元素的index[]
 */
export function findIndexAll<T>(
  arr: T[],
  filter?: FilterArr<T>,
  options?: FilterOption
): number[] {
  const indexArr: number[] = [];
  if (!Array.isArray(arr) || !isType<Function>(filter, 'function')) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i)) {
      indexArr.push(i);
      // 0或者不定义表示返回所有
      if (options?.returnNum && indexArr.length >= options?.returnNum) {
        break;
      }
    }
  }
  return indexArr;
}
