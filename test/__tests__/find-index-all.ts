import { findIndexAll } from '../../main/find-index-all';
// null表示要测试的值，字符串'null'表示要对比的结果1
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [null, 'null'],
]

test('findIndexAll', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(findIndexAll(v)).toEqual(t);
  });
})