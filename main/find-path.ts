import { FieldNames, Item } from '../types';
import { FIELD_NAMES } from '../constants';

/**
 * @function 根据value和key查找对应路径
 * @param data
 * @param value
 * @param fieldKeys
 * @returns
 */
export function findPath(
  data: Item[],
  value: any,
  fieldKeys?: FieldNames
): (string | number)[] {
  const xpath = []; // 存放路径
  const keys: FieldNames = {
    ...FIELD_NAMES,
    ...(fieldKeys ?? {}),
  };
  const valueKey = keys.value as string;
  const childrenkey = keys.children as string;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item[valueKey] === value) {
        xpath.push(i);
        break;
      } else if (item[childrenkey]) {
        const tempPath = findPath(item[childrenkey], value, fieldKeys);
        if (tempPath.length) {
          xpath.push(i);
          xpath.push(childrenkey);
          xpath.push(...tempPath);
        }
      }
    }
  }
  return xpath;
}
