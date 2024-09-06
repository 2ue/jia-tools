import { isNull } from './is-null';
import { isType } from './is-type';
import { ObjectType, BlankValue } from '../types';

/**
 * 基于isNull后，再判断对象是否为空：{}, []
 * @returns {any}
 * @param value
 */
export function isBlank(value: any): value is BlankValue {
  if (isNull(value)) return true;
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (isType<ObjectType>(value, 'object')) {
    return Object.keys(value).length === 0;
  }
  return false;
}
