// Assuming you have a login function defined in your form.js file

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('pass');
    const showPasswordIcon = document.getElementById('show-password');

    if (showPasswordIcon) {
        showPasswordIcon.addEventListener('click', togglePasswordVisibility);
    }

    function togglePasswordVisibility() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        showPasswordIcon.classList.toggle('bx-lock-alt');
        showPasswordIcon.classList.toggle('bx-show');
    }
});

function login() {
    const usernameInput = document.getElementById('user');
    const passwordInput = document.getElementById('pass');
    const rememberCheckbox = document.getElementById('remember');

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberCheckbox.checked;

    // Perform basic validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return false;
    }

    // Simulate a login request (replace this with actual authentication logic)
    // For demonstration purposes, using a simple check for a sample username and password
    const validUsername = 'demoUser';
    const validPassword = 'demoPassword';

    if (username === validUsername && password === validPassword) {
        // Successful login
        alert('Login successful!');
        return true;
    } else {
        // Failed login
        alert('Invalid username or password. Please try again.');
        return false;
    }
}

