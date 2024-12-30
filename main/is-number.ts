import { isBlank } from './is-blank';
import { isType } from './is-type';

// 直接使用isNaN判断不准确，需要使用Number方法将其转换成数字再比较
// 在使用Number方法进行转换时，‘',null等情况会被转换成0，所有需要使用isNull进行判断
/**
 * 判断值是否是一个直觉上的数字
 * 直接使用isNaN判断不准确：当值为NaN或者undefined是会被识别成true，''，null, true, false会被识别成false
 * @export
 * @param {*} value
 * @returns {value is number}
 */
export function isNumber(value: any): value is number {
  if (isType<boolean>(value, 'boolean')) return false;
  if (isBlank(value)) return false;
  if (isNaN(Number(value))) return false;
  return true;
}

// typeof，isNaN， Number，Number.isFinite， Object.prototype.toString，正则

// var nullValue = ['', undefined, null, false, true, NaN, '0', 0, '-1', -1, '+1', 'a', '%', 'x'];

// const obj = {
//   'typeof(v)': {},
//   'isNaN(v)': {},
//   'Number(v)': {},
//   'Number.isFinite(v)': {},
//   'Object.prototype.toString.call(v)': {},
//   'Reg(v)^-?\\d+(\\.\\d+)?$': {},
// }

// nullValue.forEach(v => {
//   obj['typeof(v)'][String(v)] = typeof v;
//   obj['isNaN(v)'][String(v)] = isNaN(v);
//   obj['Number.isFinite(v)'][String(v)] = Number.isFinite(v);
//   obj['Number(v)'][String(v)] = Number(v);
//   obj['Object.prototype.toString.call(v)'][String(v)] = Object.prototype.toString.call(v)
//   obj['Reg(v)^-?\\d+(\\.\\d+)?$'][String(v)] = /^-?\d+(\.\d+)?$/.test(v)
// });
// console.table(obj);
