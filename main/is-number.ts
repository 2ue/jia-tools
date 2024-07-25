import { isNull } from "./is-null";

// 直接使用isNaN判断不准确，需要使用Number方法将其转换成数字再比较
// 在使用Number方法进行转换时，‘',null等情况会被转换成0，所有需要使用isNull进行判断
export function isNumber(value: any): value is number {
  return !(isNull(value) || isNaN(Number(value)));
}
