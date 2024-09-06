type pathArrValue = string[];
type PathValue = string | pathArrValue;

export function string2Path(path: PathValue): pathArrValue {
  if (Array.isArray(path)) return path;
  // const pathArr = path.replace(/[\\\|\/\[\]\,\-\?]/g, '.');
  const pathArr = path.replace(/[\[\]\?]/g, '.').split('.').filter(Boolean);
  return pathArr;
}
