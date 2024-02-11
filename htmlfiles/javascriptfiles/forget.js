// Existing JavaScript code

// Function to open the Forget Password Modal
function openForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'block';
}

// Function to close the Forget Password Modal
function closeForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'none';
}

// Function to send a password reset email (placeholder function)
function sendPasswordResetEmail() {
    const resetEmailInput = document.getElementById('resetEmail');
    const resetEmail = resetEmailInput.value;

    // Perform validation on the email address
    if (!resetEmail) {
        alert('Please enter a valid email address.');
        return;
    }

    // Placeholder logic to send a reset link
    alert('Password reset link sent to ' + resetEmail);
    closeForgotPasswordModal();
}
