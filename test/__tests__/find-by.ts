import { findBy } from '../../main/find-by';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [[1, 1.1, 2, 3, 4, -6], [3, 4]],
]

test('findBy', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(findBy<number>(v, (a) => a > 2)).toEqual(t);
  });
})