// Get the phone input element
const phoneInput = document.getElementById('phone');

// Attach the input event listener
phoneInput.addEventListener('input', formatPhoneNumber);

// Format the phone number
function formatPhoneNumber() {
  const phoneNumber = phoneInput.value.replace(/\D/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength >= 3 && phoneNumberLength <= 6) {
    phoneInput.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else if (phoneNumberLength > 6) {
    phoneInput.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
}

  