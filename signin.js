var userEmail = document.getElementById("email");
var userPassword = document.getElementById("pass");
var logIn = document.getElementById("logIn");
var form = document.getElementById("log");

console.log(form.childNodes);

var alert = document.getElementById("alert");
form.appendChild(alert);
var validateEmail = false;
var validatePassword = false;

function verifyUser(event) {
    function verifyEmail() {
        var emailLetter = userEmail.value.split("");
        emailLetter.forEach(function (item) {
            if (item === "@") {
                validateEmail = true;
            }
        });
        if (validateEmail === false) {
            userEmail.setAttribute("style", "border:3px solid rgb(139 129 118)");
            alert.innerText = "Please insert a valid email address";
            form.appendChild(alert);
        } else {
            userEmail.setAttribute("style", "border:3px solid rgb(139 129 118)");
        }
    }
    function verifyPassword() {
        var passwordLetter = userPassword.value;
        if (passwordLetter.length > 8) {
            validatePassword = true;
        }
        if (validatePassword === false) {
            userPassword.setAttribute("style", "border:3px solid rgb(139 129 118)");
            alert.innerText = "The password is too short";
            form.appendChild(alert);
        }
    }
    verifyPassword();
    verifyEmail();
    if (validateEmail === false || validatePassword === false) {
        event.preventDefault();
    } else {
        window.location.replace("../Scarlet/index.html");
    }
}
logIn.addEventListener("click", verifyUser);