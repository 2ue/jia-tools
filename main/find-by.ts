import { isBlank } from './is-blank';
import { isType } from './is-type';
import type { ObjectType, FilterObj, FilterOption } from '../types';

type Value<T> = Record<string, T>;

/**
 * 查找符合特征的元素index
 * @export
 * @template T
 * @param {T[]} obj
 * @param {FilterObj} filter
 * @param {FilterOption} options
 * @returns {Record<string, T>}
 */
export function findBy<T>(obj: Value<T>, filter: FilterObj<T>, options?: FilterOption): Value<T> {
  const result: Value<T> = {};
  if (!isType<ObjectType>(obj, 'object') || !isType<Function>(filter, 'function')) {
    return {};
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (filter(obj[keys[i]], keys[i])) {
      result[keys[i]] = obj[keys[i]];
      // 0或者不定义表示返回所有
      if (options?.returnNum && Object.keys(result).length >= options?.returnNum) {
        break;
      }
    }
  }
  return result;
}
