import { FieldNames, Item } from '../types';
import { FIELD_NAMES } from '../constants';

/**
 * @function 根据value查找对于值
 * @param data
 * @param value
 * @param fieldNames
 * @returns
 */
export function findByValue(
  data: Item[],
  value: any,
  fieldNames?: Partial<FieldNames>
): Item | undefined {
  let result: Item | undefined = undefined;
  const keys: FieldNames = {
    ...FIELD_NAMES,
    ...(fieldNames ?? {}),
  };
  const valueKey = keys.value as string;
  const childrenkey = keys.children as string;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item[valueKey] === value) {
        result = item;
        break;
      } else if (item[childrenkey]) {
        const tempResult = findByValue(item[childrenkey], value, fieldNames);
        if (tempResult) {
          result = tempResult;
          break;
        }
      }
    }
  }
  return result;
}
