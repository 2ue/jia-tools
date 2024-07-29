import { isBlank } from "./is-blank";
import { isType } from "./is-type";
type Filter = (item: any, i: number) => boolean;

export function findBy(arr: [], filter: Filter): number[] {
  const indexArr: number[] = [];
  if (isBlank(filter) || !isType<"Function">(filter, "function")) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i)) {
      indexArr.push(i);
    }
  }
  return indexArr;
}
