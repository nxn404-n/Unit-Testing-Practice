const reverseString = require('./reverseString.js');

test('reverse string check', () => {
  expect(reverseString("hello")).toBe("olleh");
})