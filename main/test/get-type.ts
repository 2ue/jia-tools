export function getType1(value: any): string {
  return Object.prototype.toString.call(value);
}