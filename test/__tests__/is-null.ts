import { isNull } from '../../main/is-null';

const trueValues = ['', null, NaN, undefined]
const falseValue = [[], {}, [''], { a: 1 }, 'x', 2, 0, true, false, new Date(), new Set(['1'])]

test('isNull', () => {
  trueValues.forEach((v) => {
    expect(isNull(v)).toEqual(true);
  });
  falseValue.forEach((v) => {
    expect(isNull(v)).toEqual(false);
  });
});