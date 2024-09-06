export type FindPathItem = {
  value?: any;
  children?: FindPathItem[];
  [key: string]: any;
};

export type FindPathFieldKeys = {
  value?: string
  children?: string
}

const FIELD_KEYS = {
  value: 'value',
  children: 'children'
}

/**
 * @function 根据value和key查找对应路径
 * @param tree 
 * @param value 
 * @param fieldKeys 
 * @returns 
 */
export function findPath(tree: FindPathItem[], value: any, fieldKeys?: FindPathFieldKeys): (string | number)[] {
  const xpath = []; // 存放路径
  const keys: FindPathFieldKeys = {
    ...FIELD_KEYS,
    ...(fieldKeys ?? {}),
  }
  const valueKey = keys.value as string;
  const childrenkey = keys.children as string;
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      const item = tree[i];
      if (item[valueKey] === value) {
        xpath.push(i);
        break;
      } else if (item[childrenkey]) {
        const tempPath = findPath(item[childrenkey], value, fieldKeys);
        if (tempPath.length) {
          xpath.push(i);
          xpath.push(childrenkey);
          xpath.push(...tempPath);
        }
      }
    }
  }
  return xpath;
}
