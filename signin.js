var userEmail = document.getElementById("email");
var userPassword = document.getElementById("pass");
var logIn = document.getElementById("logIn");
var form = document.getElementById("log");

console.log(form.childNodes);

var alert = document.getElementById("alert");
form.appendChild(alert);
var validateEmail = false;
var validatePassword = false;

function showErr(field, msg) {
    field.setAttribute("style", "border:3px solid rgb(139 129 118)");
    alert.innerText = msg;
    form.appendChild(alert);
}

function verifyEmail() {
    var emailLetter = userEmail.value.split("");
    emailLetter.forEach(function (item) {
        if (item === "@") {
            validateEmail = true;
        }
    });
    if (!validateEmail) {
        showErr(userEmail, "Please insert a valid email address");
    } else {
        userEmail.setAttribute("style", "border:3px solid rgb(139 129 118)");
    }
}

function verifyPassword() {
    var passwordLetter = userPassword.value;
    if (passwordLetter.length > 5) {
        validatePassword = true;
    }
    if (!validatePassword) {
        showErr(userPassword, "The password is too short");
    }
}

function verifyUser(event) {
    verifyPassword();
    verifyEmail();

    if (!validateEmail || !validatePassword) {
        event.preventDefault();
    } else {
        window.location.replace("./index.html");
    }
}
logIn.addEventListener("click", verifyUser);