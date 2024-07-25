export function isNull(value: any): value is null | undefined | "" {
  return ["", null, NaN, undefined].includes(value);
}
