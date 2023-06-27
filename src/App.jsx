import React, { useState } from 'react';

function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to format the phone number
  function formatPhoneNumber(input) {
    let phoneNumber = input.replace(/\D/g, '').slice(0, 10); // Remove non-digit characters and limit to 10 digits
    let formattedNumber = '';

    if (phoneNumber.length > 0) {
      formattedNumber = '(' + phoneNumber.slice(0, 3) + ')';

      if (phoneNumber.length > 3) {
        formattedNumber += ' ' + phoneNumber.slice(3, 6);

        if (phoneNumber.length > 6) {
          formattedNumber += '-' + phoneNumber.slice(6);
        }
      }
    }

    return formattedNumber;
  }

  // Event handler for input changes
  function handleInputChange(event) {
    const input = event.target.value;
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
  }

  return (
    <div className="container text-center">
      <h5>React</h5>
      <div>
        <label htmlFor="phone">{phoneNumber}</label>
      </div>
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="Mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default PhoneInput;
