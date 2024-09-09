import { string2Json } from '../../main/string-2-json';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [null, 'null'],
]

test('string2Json', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(string2Json(v)).toEqual(t);
  });
})