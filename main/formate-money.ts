import { isBlank } from './is-blank';
import { isNumber } from './is-number';

/**
 * 格式化金额格式
 * @param {string|number} m: 需要格式化的金额
 * @param {Record<string, any>} format
 * @param {any} any>
 * @returns {any}
 */
export function formateMoney(
  m: string | number,
  format?: Record<string, any>
): string {
  if (isBlank(m) || !isNumber(m)) return '0.00';
  return Number(Number(m).toFixed(2)).toLocaleString(
    'zh-CN',
    format,
  );
}
