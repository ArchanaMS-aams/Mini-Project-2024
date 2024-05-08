
function openSignUpPage() {
  window.location.href = 'signup.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Check login credentials here
  // If login is successful, redirect to dashboard
  window.location.href = 'dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Submit sign up form here
  // After successful signup, redirect to login page
  window.location.href = 'index.html';
});

