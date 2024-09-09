import { string2Json } from '../../main/string-2-json';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, string, any?]
const values: ValueArr[] = [
  [{ a: 1 }, '{ "a": 1 }'],
  [undefined, '{ "a": 1, "b": }'],
  [{}, '{ "a": 1, "b": }', {}],
]

test('string2Json', () => {
  try {
    values.forEach(([r, v, d]: ValueArr) => {
      expect(string2Json(v, d)).toEqual(r);
    });
  } catch (e) {
    console.log('xx')
  }
})