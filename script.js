const formContainer = document.getElementById('form-container');
const showSignIn = document.getElementById('show-sign-in');
const showSignUp = document.getElementById('show-sign-up');

// Event listener for Sign In button
showSignIn.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(0)'; // Move to Sign In form
    showSignIn.classList.add('active');
    showSignUp.classList.remove('active');
});

// Event listener for Sign Up button
showSignUp.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(-50%)'; // Move to Sign Up form
    showSignUp.classList.add('active');
    showSignIn.classList.remove('active');
});
