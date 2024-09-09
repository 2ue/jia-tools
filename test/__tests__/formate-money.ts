import { formateMoney } from '../../main/formate-money';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [-123456789, '-123,456,789'],
  [-12345678, '-12,345,678'],
  [-12, '-12'],
  [-1, '-1'],
  [0, '0'],
  [1, '1'],
  [2, '2'],
  [12345678, '12,345,678'],
  [123456789, '123,456,789'],
  [1234.1, '1,234.1'],
  [1234.12, '1,234.12'],
  // ???? 只能保留两位小数
  [1234.123, '1,234.12'],
  // ???? 只能保留两位小数
  [1234.1234, '1,234.12']
]

test('formateMoney', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(formateMoney(v)).toEqual(t);
  });
})