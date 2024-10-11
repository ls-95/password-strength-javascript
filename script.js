let passwordInput = document.getElementById("password");
let message = document.getElementById("message");
let strengthText = document.getElementById("strength");

message.style.display = "none";

function passwordStrength() {
  let password = passwordInput.value;
  let passwordLength = password.length;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  message.style.display = "block";
  message.style.color = "#fff";
  passwordInput.style.borderColor = "#ccc";

  if (passwordLength < 8 || passwordLength > 16) {
    strengthText.textContent = " invalid";
    message.style.color = "red";
    passwordInput.style.borderColor = "red";
    return;
  }

  //checks if password contains one of the requirements
  if (!hasUpperCase || !hasNumber || !hasSpecialChar) {
    strengthText.textContent = " invalid";
    message.style.color = "red";
    passwordInput.style.borderColor = "red";
    return;
  }

  if (passwordLength >= 14 && passwordLength <= 16) {
    strengthText.textContent = " strong";
    message.style.color = "green";
    passwordInput.style.borderColor = "green";
  } else if (passwordLength >= 11 && passwordLength <= 13) {
    strengthText.textContent = " medium";
    message.style.color = "yellow";
    passwordInput.style.borderColor = "yellow";
  } else if (passwordLength >= 8 && passwordLength <= 10) {
    strengthText.textContent = " weak";
    message.style.color = "orange";
    passwordInput.style.borderColor = "orange";
  }
}

function submit() {
  location.reload();
}

document.getElementById("password").addEventListener("input", passwordStrength);
