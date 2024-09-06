import { isBlank } from '../../main/is-blank';

const trueValues = [[], {}, '', null, NaN, undefined]
const falseValue = [[''], { a: 1 }, 'x', 2, 0, true, false, new Date(), new Set(['1'])]

test('isBlank', () => {
  trueValues.forEach((v) => {
    expect(isBlank(v)).toEqual(true);
  });
  falseValue.forEach((v) => {
    expect(isBlank(v)).toEqual(false);
  });
});