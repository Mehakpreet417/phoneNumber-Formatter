const formatPhoneNumber = require('./index');

test('formats phone number correctly', () => {
  // Test 1: Empty input
  expect(formatPhoneNumber('')).toBe('');

  // Test 2: Input with only digits
  expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');

  // Test 3: Input with additional characters
  expect(formatPhoneNumber('1a2b3c4d5e6f7g8h9i0')).toBe('(123) 456-7890');

  // Test 4: Input with fewer digits
  expect(formatPhoneNumber('123')).toBe('(123)');

  // Test 5: Input with some digits and non-digit characters
  expect(formatPhoneNumber('12a34b56c')).toBe('(123) 456');

  // Test 6: Input with more than 10 digits
  expect(formatPhoneNumber('1234567890123456')).toBe('(123) 456-7890');
});
