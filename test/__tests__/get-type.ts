import { getType } from '../../main/get-type';

class User {
  name = 1
}

const aUser = new User();

const values: [any, string][] = [
  [null, 'null'],
  [undefined, 'undefined'],
  ['', 'string'],
  ['0', 'string'],
  ['1', 'string'],
  ['x', 'string'],
  [NaN, 'number'],
  [1, 'number'],
  [0, 'number'],
  [-1, 'number'],
  [{}, 'object'],
  [{ a: 1 }, 'object'],
  [aUser, 'object'],
  [() => 1, 'function'],
  [User, 'function'],
  [new Date(), 'date'],
  [new Map(), 'map'],
  [new Set(), 'set'],
  [true, 'boolean'],
  [false, 'boolean'],
]

test('getType', () => {
  values.forEach(([v, t]) => {
    // console.log('v', v, t);
    expect(getType(v)).toEqual(t);
  });
});