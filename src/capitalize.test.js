const capitalize = require('./capitalize.js');

test('capitalize first letter check', () => {
  expect(capitalize("hello")).toBe("Hello");
});
