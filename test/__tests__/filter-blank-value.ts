import { filterEmptyValue } from '../../main/filter-blank-value';
// null表示要测试的值，字符串'null'表示要对比的结果
  type ValueArr = [any, any]
const values: ValueArr[] = [
  [{ a: 1, b: null, h: undefined, c: '', e: {}, f: [] }, { a: 1 }],
  [{ a: 0 }, { a: 0 }],
  [{ a: false }, { a: false }],
  [{ a: 'a' }, { a: 'a' }],
  [{ a: [1] }, { a: [1] }],
  [{ a: { a: 1 } }, { a: { a: 1 } }],
]

test('filterBlankValue', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(filterEmptyValue(v)).toEqual(t);
  });
})