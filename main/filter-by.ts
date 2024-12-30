import { isType } from './is-type';
import type { ObjectType, FilterObj, FilterOption } from '../types';

type ObjValue<T> = Record<string, T>;

/**
 * 查找对象集合中符合特征的元素
 * @export
 * @template T
 * @param {T[]} obj
 * @param {FilterObj} filter
 * @param {FilterOption} options
 * @returns {Record<string, T>}
 */
export function filterBy<T>(
  obj: ObjValue<T>,
  filter?: FilterObj<T>,
  options?: FilterOption
): ObjValue<T> {
  const result: ObjValue<T> = {};
  if (
    !isType<ObjectType>(obj, 'object') ||
    !isType<Function>(filter, 'function')
  ) {
    return {};
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (filter(obj[keys[i]], keys[i])) {
      result[keys[i]] = obj[keys[i]];
      // 0或者不定义表示返回所有
      if (
        options?.returnNum &&
        Object.keys(result).length >= options?.returnNum
      ) {
        break;
      }
    }
  }
  return result;
}
