export function getType(value: any): string {
  return Object.prototype.toString.call(value);
}