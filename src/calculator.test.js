const calculatorClass = require('./calculator.js');

let calculator = new calculatorClass()


describe('add', () => {
  test('testing add two positive number', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('testing add two negative number', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('testing add one positive number one negative number', () => {
    expect(calculator.add(1, -2)).toBe(-1);
  });
});

describe('subtract', () => {
  test('testing subtract two positive number', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test('testing add two negative number', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test('testing add one positive number one negative number', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });
});

describe('multiply', () => {
  test('testing multiply two positive number', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test('testing multiply two negative number', () => {
    expect(calculator.multiply(-1, -2)).toBe(2);
  });

  test('testing multiply one positive number one negative number', () => {
    expect(calculator.multiply(1, -2)).toBe(-2);
  });
});

describe('divide', () => {
  test('testing divide two positive number', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test('testing divide two negative number', () => {
    expect(calculator.divide(-1, -2)).toBe(0.5);
  });

  test('testing divide one positive number one negative number', () => {
    expect(calculator.divide(1, -2)).toBe(-0.5);
  });
});