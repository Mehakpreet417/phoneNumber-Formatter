import { render, screen, fireEvent } from '@testing-library/react';
import PhoneInput from './PhoneInput';

test('formats phone number correctly', () => {
  render(<PhoneInput />);
  const input = screen.getByPlaceholderText('Mobile number');

  // Test 1: Empty input
  expect(screen.getByLabelText('')).toHaveTextContent('');

  // Test 2: Input with only digits
  fireEvent.change(input, { target: { value: '1234567890' } });
  expect(screen.getByLabelText('')).toHaveTextContent('(123) 456-7890');

  // Test 3: Input with additional characters
  fireEvent.change(input, { target: { value: '1a2b3c4d5e6f7g8h9i0' } });
  expect(screen.getByLabelText('')).toHaveTextContent('(123) 456-7890');

  // Test 4: Input with fewer digits
  fireEvent.change(input, { target: { value: '123' } });
  expect(screen.getByLabelText('')).toHaveTextContent('(123)');

  // Test 5: Input with some digits and non-digit characters
  fireEvent.change(input, { target: { value: '12a34b56c' } });
  expect(screen.getByLabelText('')).toHaveTextContent('(123) 456');

  // Test 6: Input with more than 10 digits
  fireEvent.change(input, { target: { value: '1234567890123456' } });
  expect(screen.getByLabelText('')).toHaveTextContent('(123) 456-7890');
});
