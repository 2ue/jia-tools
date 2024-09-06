import { string2Path } from '../../main/string-2-path';

const values: Record<string, string[]> = {
  '0.0.children.0.name': ['0', '0', 'children', '0', 'name'],
  '0.0.children.0?.name': ['0', '0', 'children', '0', 'name'],
  '0.0.children[0]name': ['0', '0', 'children', '0', 'name'],
  '[0][0]children.0?.name': ['0', '0', 'children', '0', 'name'],
};
const arrValue = ['0', '0', 'children', '0', 'name']


test('string2Path', () => {
  Object.keys(values).forEach((v: string) => {
    expect(string2Path(v)).toEqual(values[v]);
  });
  expect(string2Path(arrValue)).toEqual(arrValue);
});