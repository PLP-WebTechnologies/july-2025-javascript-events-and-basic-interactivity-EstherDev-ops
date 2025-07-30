// 🌙 Toggle Dark Mode
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🎮 Counter Feature
let count = 0;
const counterDisplay = document.getElementById('counter');
document.getElementById('increase').addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

// 📋 Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  let valid = true;

  // Name validation
  if (name === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Invalid email format';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});
