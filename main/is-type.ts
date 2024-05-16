import { getType } from './get-type';

export function isType(value: any, type: string): boolean {
  return getType(value).includes(type);
}