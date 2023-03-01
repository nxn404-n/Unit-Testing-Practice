const stringLength = require('./stringLength.js');

test('stringLength returns correct length', () => {
  expect(stringLength("hello")).toBe(5);

  expect(stringLength("world")).toBe(5);
});

test('stringLength throws error if the length is invalid', () => {
  expect(() => {
    stringLength("");
  }).toThrow("String must be at least 1 character long.");

  expect(() => {
    stringLength("12345678901");
  }).toThrow("String must not be longer than 10 characters.");

  expect(() => {
    stringLength("valid");
  }).not.toThrow();
});