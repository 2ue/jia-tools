/**
 * 获取值的类型，并返回全小写的字符串
 * @export
 * @param {*} value
 * @returns {string} 全小写的字符串
 */
export function getType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
