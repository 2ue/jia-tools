import { findByValue } from '../../main/find-by-value';

const data = [
  {
    value: '1',
    children: [
      { value: '1-1', children: [{ value: '1-1-1', children: [] }] },
      { value: '1-2', children: [] },
    ],
  },
  { value: '2' },
];

// null表示要测试的值，字符串'null'表示要对比的结果
type ValueArr = [any, any]
const values: ValueArr[] = [
  ['1', {
    value: '1',
    children: [
      { value: '1-1', children: [{ value: '1-1-1', children: [] }] },
      { value: '1-2', children: [] },
    ],
  }],
  ['1-1', { value: '1-1', children: [{ value: '1-1-1', children: [] }] }],
  ['1-1-1', { value: '1-1-1', children: [] }],
  ['1-1-2', undefined],
  ['2', { value: '2' }],
]
test('findByValue', () => {
  values.forEach(([v, t]: ValueArr) => {
    expect(findByValue(data, v)).toEqual(t);
  });
})