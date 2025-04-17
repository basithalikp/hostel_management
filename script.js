document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');

    loginButton.addEventListener('click', () => {
        alert('Login button clicked');
    });

    signupButton.addEventListener('click', () => {
        alert('Sign-Up button clicked');
    });
});
