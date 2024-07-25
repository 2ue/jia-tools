export function string2Json(str: string, defaultValue?: any) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error(e);
    return defaultValue;
  }
}
