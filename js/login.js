function getValue(inputValue) {
    const fromValue = document.getElementById(inputValue).value;
    return fromValue;
}

document.getElementById('login-btn').addEventListener('click', function() {
    // get value from input
    const emailValue = getValue('user-email');
    const passValue = getValue('user-password');
    
    if (emailValue == 'user@email.com' && passValue == 'password') {
        window.location.href = 'big-bank.html';
    }
})