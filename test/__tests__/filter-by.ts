import { filterBy } from '../../main/filter-by';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [{ a: 1, b: 1.1, c: 2, d: 3, f: 5 }, { d: 3, f: 5 }],
]

test('filterBy', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(filterBy<number>(v, (a) => a > 2)).toEqual(t);
  });
})