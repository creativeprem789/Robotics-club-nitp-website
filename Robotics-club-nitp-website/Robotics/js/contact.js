console.log("Contact script loaded");

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successState = document.getElementById('successState');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate
            const name = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            const message = document.getElementById('message').value.trim();
            const emailError = document.getElementById('emailError');

            // Email Regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                if (emailError) emailError.style.display = 'block';
                emailInput.style.borderColor = '#ef4444';
                return; // Stop submission
            } else {
                if (emailError) emailError.style.display = 'none';
                emailInput.style.borderColor = 'var(--glass-border)'; // Reset border
            }

            if (name && message) {
                // Simulate sending (UI update)
                contactForm.style.display = 'none';
                successState.style.display = 'flex';
                successState.style.animation = 'fadeInUp 0.5s ease-out';
            }
        });

        // Clear error on input
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('input', () => {
                const emailError = document.getElementById('emailError');
                if (emailError) emailError.style.display = 'none';
                emailInput.style.borderColor = ''; // Reset to default CSS
            });
        }
    }
});

function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'flex';
    document.getElementById('successState').style.display = 'none';
}
