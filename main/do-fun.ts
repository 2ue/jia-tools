import type {
  DoFunData,
  DoFunOptions,
  DoFunWithoutReturnOptions,
} from '../types';
import { getType } from './get-type';

function getDataNames(data: DoFunData) {
  const type = getType(data);
  if (type === 'array') {
    return data as string[];
  }
  if (type === 'string') {
    return [data] as string[];
  }
  if (type === 'object') {
    return Object.keys(data);
  }
  return [];
}

function getDataValues(data: DoFunData, vals?: any[]) {
  if (vals) {
    return vals;
  }
  const type = getType(data);
  if (type === 'object') {
    return Object.values(data);
  }
  return [];
}

/**
 * 将字符串转换成可行函数并返回结果
 * @param templateStr 模版字符串，支持${}写法，支持普通函数写法
 * @param data 必填，正常情况下如果没有data，则不必要使用这个方法来渲染，请谨慎使用
 * @returns 返回函数
 */
export function getFun(templateStr: string, data: DoFunData) {
  const names: string[] = getDataNames(data);
  return new Function(...names, `${templateStr}`);
}

export function doFunWithoutReturn(options: DoFunWithoutReturnOptions) {
  const { templateStr, data, value } = options;
  const vals = getDataValues(data, value);
  return getFun(templateStr, data)(...vals);
}

export function doFunWithReturn(options: DoFunWithoutReturnOptions) {
  const { templateStr } = options;
  return doFunWithoutReturn({
    ...options,
    templateStr: `return ${templateStr}`,
  });
}

export function doFun(options: DoFunOptions) {
  // 根据是否多行来判断是否需要return
  if (options.autoReturn && /\r?\n/.test(options.templateStr)) {
    return doFunWithReturn(options);
  }
  return doFunWithoutReturn(options);
}
