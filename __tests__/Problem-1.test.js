const Calculator = require('../Problem-1');

test('Addition', () => {
  let calc = new Calculator(5, 3, 'add');
  expect(calc.calculate()).toBe(8);
});

test('Division by zero', () => {
  let calc = new Calculator(5, 0, 'divide');
  expect(calc.calculate()).toBe('Error: Division by zero');
});
