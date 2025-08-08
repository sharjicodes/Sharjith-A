const countMultiples = require('../Problem-4');

test('Count multiples in given array', () => {
  const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  expect(countMultiples(input)).toEqual({
    1: 11,
    2: 8,
    3: 4,
    4: 4,
    5: 3,
    6: 2,
    7: 0,
    8: 1,
    9: 1
  });
});
