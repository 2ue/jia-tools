import { formateMoney } from '../../main/formate-money';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [null, 'null'],
]

test('formateMoney', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(formateMoney(v)).toEqual(t);
  });
})