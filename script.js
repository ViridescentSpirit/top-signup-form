function check() {
    password = document.getElementById(`password`);
    confirmPass = document.getElementById(`confirm-pass`);
    confirmMessage = document.getElementById(`conf-message`); 

    if (password.value == confirmPass.value) {
        confirmMessage.textContent = ``;
        password.setCustomValidity(``);
        confirmPass.setCustomValidity(``);
    } else {
        confirmMessage.style.color = `red`;
        confirmMessage.textContent = `Passwords do not match!`;
        password.setCustomValidity(`Passwords do not match!`);
        confirmPass.setCustomValidity(`Passwords do not match!`);
    }
}