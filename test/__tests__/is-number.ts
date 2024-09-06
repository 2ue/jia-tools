import { isNumber } from '../../main/is-number';

const trueValues = ['0', 0, '-1', -1, '+1'];
const falseValues = ['', undefined, null, false, true, NaN, 'a', '%', 'x', '1x', '-1x', {}, [], new Map(), new Set()];

test('isBlank', () => {
  trueValues.forEach((v) => {
    expect(isNumber(v)).toEqual(true);
  });
  falseValues.forEach((v) => {
    expect(isNumber(v)).toEqual(false);
  });
});