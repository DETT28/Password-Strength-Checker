document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const strengthMeter = document.getElementById('strength-bar');
    const passwordInputStrength = document.getElementById('password-input-strength');
    
    const charReq = document.getElementById('characters');
    const upperReq = document.getElementById('uppercase');
    const lowerReq = document.getElementById('lowercase');
    const numberReq = document.getElementById('number');
    const specialReq = document.getElementById('special-character');
    const strengthText = document.querySelector('.password-input-strength');

    passwordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        let passwordStrength = 0;

        if (password.length === 0) {
            strengthMeter.className = 'strength-bar';
            strengthText.className = 'password-input-strength';
            strengthText.textContent = 'NO INPUT';
            [charReq, upperReq, lowerReq, numberReq, specialReq].forEach(req => {
                req.className = 'requirements';
            });
        } else {
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[-!@#$%^&*(),.?":{}|<>\[\]]/.test(password);
            const hasLength = password.length >= 8;

            // Character length requirement
            if (hasLength) {
                charReq.className = 'requirements fulfilled';
                passwordStrength++;
            } else {
                charReq.className = 'requirements unfulfilled';
                passwordStrength--;
            }

            // Uppercase requirement
            if (hasUpperCase) {
                upperReq.className = 'requirements fulfilled';
                passwordStrength++;
            } else {
                upperReq.className = 'requirements unfulfilled';
                passwordStrength--;
            }

            // Lowercase requirement
            if (hasLowerCase) {
                lowerReq.className = 'requirements fulfilled';
                passwordStrength++;
            } else {
                lowerReq.className = 'requirements unfulfilled';
                passwordStrength--;
            }

            // Number requirement
            if (hasNumber) {
                numberReq.className = 'requirements fulfilled';
                passwordStrength++;
            } else {
                numberReq.className = 'requirements unfulfilled';
                passwordStrength--;
            }

            if (hasSpecial) {
                specialReq.className = 'requirements fulfilled';
                passwordStrength++;
            } else {
                specialReq.className = 'requirements unfulfilled';
                passwordStrength--;
            }

            if (password.length >= 12) {
                passwordStrength++;
            }

            if (passwordStrength <= 0) {
                strengthMeter.className = 'strength-bar very-weak';
                strengthText.className = 'password-input-strength very-weak';
                strengthText.textContent = 'VERY WEAK';
            } else if (passwordStrength <= 2) {
                strengthMeter.className = 'strength-bar weak';
                strengthText.className = 'password-input-strength weak';
                strengthText.textContent = 'WEAK';
            } else if (passwordStrength <= 4) {
                strengthMeter.className = 'strength-bar medium';
                strengthText.className = 'password-input-strength medium';
                strengthText.textContent = 'MEDIUM';
            } else if (passwordStrength <= 5) {
                strengthMeter.className = 'strength-bar strong';
                strengthText.className = 'password-input-strength strong';
                strengthText.textContent = 'STRONG';
            } else {
                strengthMeter.className = 'strength-bar very-strong';
                strengthText.className = 'password-input-strength very-strong';
                strengthText.textContent = 'VERY STRONG';
            }
        } 
    });
});