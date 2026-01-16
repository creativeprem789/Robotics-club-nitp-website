document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Simple client-side check (dummy credentials)
            if (username === 'admin' && password === 'admin') {
                // Successful login
                console.log('Login successful');
                window.location.href = 'admin.html';
            } else {
                // Failed login
                loginError.style.display = 'block';
                // Shake animation
                loginForm.classList.add('shake');
                setTimeout(() => {
                    loginForm.classList.remove('shake');
                }, 500);
            }
        });
    }
});

// Add shake animation style dynamically if not present
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
.shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}
`;
document.head.appendChild(style);
