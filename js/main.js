document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');

    function isValidEmail(email) {
        
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = loginForm.email ? loginForm.email.value : '';
            const password = loginForm.password ? loginForm.password.value : '';

            if (loginError) loginError.textContent = '';

            if (email === '' || password === '') {
                if (loginError) loginError.textContent = 'Please fill in all fields.';
                return;
            }

            if (!isValidEmail(email)) {
                if (loginError) loginError.textContent = 'Invalid email format.';
                return;
            }

            if (loginError) loginError.textContent = 'Logging in as ' + email;
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = registerForm.username ? registerForm.username.value : '';
            const email = registerForm.email ? registerForm.email.value : '';
            const password = registerForm.password ? registerForm.password.value : '';
            const confirmPassword = registerForm.confirmPassword ? registerForm.confirmPassword.value : '';

            if (registerError) registerError.textContent = '';

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                if (registerError) registerError.textContent = 'Please fill in all fields.';
                return;
            }

            if (!isValidEmail(email)) {
                if (registerError) registerError.textContent = 'Invalid email format.';
                return;
            }

            if (password !== confirmPassword) {
                if (registerError) registerError.textContent = 'Passwords do not match.';
                return;
            }

            if (registerError) registerError.textContent = 'Registering user ' + username;
        });
    }
});