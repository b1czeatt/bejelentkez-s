document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            
            if (username === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            
            alert('Logging in as ' + username);
            
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;
            const confirmPassword = registerForm.confirmPassword.value;

           
            if (username === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            
            alert('Registering user ' + username);
            
        });
    }
});