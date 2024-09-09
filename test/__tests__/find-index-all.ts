import { isNull } from '../../main';
import { findIndexAll } from '../../main/find-index-all';
// null表示要测试的值，字符串'null'表示要对比的结果
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [[null, undefined, '', NaN], [0, 1, 2, 3]],
  [[1, null, undefined, '', NaN], [1, 2, 3, 4]],
  [[0, null, undefined, '', NaN, 0], [1, 2, 3, 4]],
]

test('findIndexAll', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(findIndexAll(v, a => isNull(a))).toEqual(t);
  });
})