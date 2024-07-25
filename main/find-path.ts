type Item = {
  value: any;
  __xpath: string[];
  children?: Item[];
  [key: string]: any;
};

export function findPath(tree: Item[], value: any): (string | number)[] {
  const xpath = []; // 存放路径
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      const item = tree[i];
      if (item.value === value) {
        xpath.push(i);
        break;
      } else if (item.children) {
        const tempPath = findPath(item.children, value);
        if (tempPath.length) {
          xpath.push(i);
          xpath.push("children");
          xpath.push(...tempPath);
        }
      }
    }
  }
  return xpath;
}
