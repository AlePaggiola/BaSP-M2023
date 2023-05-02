var emailInput = document.querySelector("#email");
var textValidationEmail = document.querySelector("#textValidationEmail");
var textValidationPassword = document.querySelector("#textValidationPassword");

emailInput.onfocus = function () {
  emailInput.classList.add("green-border");
  emailInput.classList.remove("red-border");
};

emailInput.onblur = function () {
  var emailValido = validationEmail();
  if (emailValido == true) {
    emailInput.classList.remove("green-border");
    textValidationEmail.style.display = "none";
  } else {
    emailInput.classList.add("red-border");
    textValidationEmail.style.display = "block";
  }
};

var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var email;
var listEmail;
function validationEmail() {
  email = document.querySelector("#email").value;
  listEmail = email.split(".");
  if (
    validEmail.test(email) &&
    listEmail.pop().length >= 3 &&
    email != null &&
    email.length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

var passwordInput = document.querySelector("#password");
passwordInput.onfocus = function () {
  passwordInput.classList.add("green-border");
  passwordInput.classList.remove("red-border");
};

passwordInput.onblur = function () {
  var passValido = validationPassword();
  if (passValido == true) {
    passwordInput.classList.remove("green-border");
    textValidationPassword.style.display = "none";
  } else {
    passwordInput.classList.add("red-border");
    textValidationPassword.style.display = "block";
  }
};

var password;
function validationPassword() {
  password = document.querySelector("#password").value;
  if (password.length >= 8 && password != null && isNaN(password) == true) {
    return true;
  } else {
    return false;
  }
}

var formLogin = document.querySelector(".form-login");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var email = emailInput.value;
  var password = passwordInput.value;

  var url = "https://api-rest-server.vercel.app/login";

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  fetch(url, options)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("invalid login information.");
      }
    })
    .then(function (data) {
      alert("Login successful!");
    })
    .catch(function (error) {
      alert("Error: " + error.message);
    });
});

var acceptBtn = document.querySelector("#enter");
acceptBtn.onclick = function (event) {
  var emailValido = validationEmail();
  var passwordValido = validationPassword();
  if (emailValido && passwordValido) {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var email = emailInput.value;
    var password = passwordInput.value;

    var url = "https://api-rest-server.vercel.app/login";
    var requestUrl = url + "?email=" + email + "&password=" + password;

    fetch(requestUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("invalid login information.");
        }
      })
      .then(function (data) {
        alert("Login successful!");
      })
      .catch(function (error) {
        alert("Error: " + error.message);
      });
  } else {
    if (emailValido == false) {
      alert("Invalid email: " + emailInput.value);
    }
    if (passwordValido == false) {
      alert("Invalid password: " + passwordInput.hidden);
    }
  }

  console.log(emailInput.value);
  console.log(passwordInput.value);
};
