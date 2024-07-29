import { isBlank } from "./is-blank";
import { isType } from "./is-type";
type Filter = (item: any, i: number) => boolean;

/**
 * 找出所有符合条件的元素的index
 * @param arr 目标数组
 * @param filter 条件判断，返回true则会返回对应index，反之不返回；如果filter不传，则返回空数组
 * @returns 元素的index[]
 */
export function findIndexAll(arr: [], filter: Filter): number[] {
  const indexArr: number[] = [];
  if (isBlank(filter) || !isType(filter, "function")) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i)) {
      indexArr.push(i);
    }
  }
  return indexArr;
}
