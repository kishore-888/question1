let generatedCaptcha = '';

// Function to generate a random captcha text
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    generatedCaptcha = '';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedCaptcha += characters.charAt(randomIndex);
    }

    document.getElementById('captcha-text').textContent = generatedCaptcha;
}

// Function to verify the entered captcha
function buttonClicked() {
    const enteredCaptcha = document.getElementById('input1').value.trim();

    if (enteredCaptcha === generatedCaptcha) {
        alert('CAPTCHA Verified SuccessFully!');
    } else {
        alert('CAPTCHA Verification Failed! Please try again.');
    }
}


// Initial captcha generation on page load
generateCaptcha();
