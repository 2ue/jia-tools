import { isTrimNull } from '../../main/is-trim-null';

const trueValues = ['', null, NaN, undefined, '     ']
const falseValue = ['  1   ', [], {}, [''], { a: 1 }, 'x', 2, 0, true, false, new Date(), new Set(['1'])]

test('isTrimNull', () => {
  trueValues.forEach((v) => {
    expect(isTrimNull(v)).toEqual(true);
  });
  falseValue.forEach((v) => {
    expect(isTrimNull(v)).toEqual(false);
  });
});