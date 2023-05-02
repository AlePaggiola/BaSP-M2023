var nameInput = document.getElementById("Name");
var textValidationName = document.getElementById("textValidationName");
var lastNameInput = document.getElementById("Lastname");
var textValidationLastname = document.getElementById("textValidationLastname");
var dniInput = document.getElementById("DNI");
var textValidationDni = document.getElementById("textValidationDNI");
var dateBirthInput = document.getElementById("DateOfBirth");
var textValidationDate = document.getElementById("textValidationDate");
var phoneInput = document.getElementById("Phone");
var textValidationPhone = document.getElementById("textValidationPhone");
var locationInput = document.getElementById("Location");
var textValidationLocation = document.getElementById("textValidationLocation");
var adressInput = document.getElementById("Adress");
var textValidationAdress = document.getElementById("textValidationAdress");
var postalInput = document.getElementById("PostalCode");
var textValidationPostalCode = document.getElementById(
  "textValidationPostalCode"
);
var emailInput = document.getElementById("Email");
var textValidationEmail = document.getElementById("textValidationEmail");
var passwordInput = document.getElementById("Password");
var textValidationPassword = document.getElementById("textValidationPassword");
var repeatPasswordInput = document.getElementById("RepeatPassword");
var textValidationRepeatPassword = document.getElementById(
  "textValidationRepeatPassword"
);

nameInput.onfocus = function () {
  nameInput.classList.add("green-border");
  nameInput.classList.remove("red-border");
};

nameInput.onblur = function () {
  var nameCorrect = validationName();
  if (nameCorrect == true) {
    nameInput.classList.remove("green-border");
    textValidationName.style.display = "none";
  } else {
    nameInput.classList.add("red-border");
    textValidationName.style.display = "block";
  }
};

var valueName;
var arrayName;
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function validationName() {
  valueName = document.getElementById("Name").value;
  arrayName = valueName.split("");
  if (
    arrayName.filter(function (characters) {
      return letters.indexOf(characters) != -1;
    }).length > 0 &&
    valueName.length >= 3
  ) {
    return true;
  } else {
    return false;
  }
}

lastNameInput.onfocus = function () {
  lastNameInput.classList.add("green-border");
  lastNameInput.classList.remove("red-border");
};

lastNameInput.onblur = function () {
  var lastNameCorrect = validationLastName();
  if (lastNameCorrect == true) {
    lastNameInput.classList.remove("green-border");
    textValidationLastname.style.display = "none";
  } else {
    lastNameInput.classList.add("red-border");
    textValidationLastname.style.display = "block";
  }
};

var valueLastName;
var arrayLastName;
function validationLastName() {
  valueLastName = document.getElementById("Lastname").value;
  arrayLastName = valueLastName.split("");
  if (
    arrayLastName.filter(function (characters) {
      return letters.indexOf(characters) != -1;
    }).length > 0 &&
    valueLastName.length >= 3
  ) {
    return true;
  } else {
    return false;
  }
}

dniInput.onfocus = function () {
  dniInput.classList.add("green-border");
  dniInput.classList.remove("red-border");
};

dniInput.onblur = function () {
  var dniCorrect = validationDni();
  if (dniCorrect == true) {
    dniInput.classList.remove("green-border");
    textValidationDni.style.display = "none";
  } else {
    dniInput.classList.add("red-border");
    textValidationDni.style.display = "block";
  }
};

var dniValue;
var arrayDni = [];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function validationDni() {
  dniValue = dniInput.value;
  arrayDni = dniValue.split("");
  if (
    dniValue.length >= 7 &&
    arrayDni.filter(function (characters) {
      return numbers.indexOf(characters) != -1;
    }).length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

dateBirthInput.onfocus = function () {
  dateBirthInput.classList.add("green-border");
  dateBirthInput.classList.remove("red-border");
};

dateBirthInput.onblur = function () {
  var dateCorrect = validationDate();
  if (dateCorrect == true) {
    dateBirthInput.classList.remove("green-border");
    textValidationDate.style.display = "none";
  } else {
    dateBirthInput.classList.add("red-border");
    textValidationDate.style.display = "block";
  }
};

var dateInput;
function validationDate() {
  dateInput = dateBirthInput.value;
  var date = dateInput.split("-");
  var day = date[2];
  var month = date[1];
  var year = date[0];
  if (
    day > 0 &&
    day < 32 &&
    month > 0 &&
    month < 13 &&
    year > 1900 &&
    year < 2025
  ) {
    if (year % 400 === 0 && day < 29) {
      return true;
    }
    return true;
  } else {
    return false;
  }
}

phoneInput.onfocus = function () {
  phoneInput.classList.add("green-border");
  phoneInput.classList.remove("red-border");
};

phoneInput.onblur = function () {
  var phoneCorrect = validationPhone();
  if (phoneCorrect == true) {
    phoneInput.classList.remove("green-border");
    textValidationPhone.style.display = "none";
  } else {
    phoneInput.classList.add("red-border");
    textValidationPhone.style.display = "block";
  }
};

var numberPhone;
var arrayPhone = [];
function validationPhone() {
  numberPhone = document.getElementById("Phone").value;
  arrayPhone = numberPhone.split("");
  if (
    numberPhone.length === 10 &&
    arrayPhone.filter(function (characters) {
      return numbers.indexOf(characters) != -1;
    }).length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

locationInput.onfocus = function () {
  locationInput.classList.add("green-border");
  locationInput.classList.remove("red-border");
};

locationInput.onblur = function () {
  var locationCorrect = validationLocation();
  if (locationCorrect == true) {
    locationInput.classList.remove("green-border");
    textValidationLocation.style.display = "none";
  } else {
    locationInput.classList.add("red-border");
    textValidationLocation.style.display = "block";
  }
};

var locationValue;
var arrayLocation = [];
function validationLocation() {
  locationValue = document.getElementById("Location").value;
  arrayLocation = locationValue.split("");
  if (
    locationValue.length >= 3 ||
    (arrayLocation.filter(function (characters) {
      return numbers.indexOf(characters) != -1;
    }).length > 0 &&
      arrayLocation.filter(function (characters) {
        return letters.indexOf(characters) != -1;
      }).length > 0)
  ) {
    return true;
  } else {
    return false;
  }
}

adressInput.onfocus = function () {
  adressInput.classList.add("green-border");
  adressInput.classList.remove("red-border");
};

adressInput.onblur = function () {
  var adressCorrect = validationAdress();
  if (adressCorrect == true) {
    adressInput.classList.remove("green-border");
    textValidationAdress.style.display = "none";
  } else {
    adressInput.classList.add("red-border");
    textValidationAdress.style.display = "block";
  }
};

var adressValue;
var arrayAdress = [];
function validationAdress() {
  adressValue = document.getElementById("Adress").value;
  arrayAdress = adressValue.split(" ");
  arrayAdressNumber = parseInt(arrayAdress[1]);
  if (
    adressValue.length >= 5 &&
    typeof arrayAdress[0] === "string" &&
    typeof arrayAdressNumber === "number" &&
    adressValue.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
}

postalInput.onfocus = function () {
  postalInput.classList.add("green-border");
  postalInput.classList.remove("red-border");
};

postalInput.onblur = function () {
  var postalCorrect = validationPostalCode();
  if (postalCorrect == true) {
    postalInput.classList.remove("green-border");
    textValidationPostalCode.style.display = "none";
  } else {
    postalInput.classList.add("red-border");
    textValidationPostalCode.style.display = "block";
  }
};

var postalValue;
var arrayPostalCode = [];
function validationPostalCode() {
  postalValue = document.getElementById("PostalCode").value;
  arrayPostalCode = postalValue.split("");
  if (
    postalValue.length >= 4 &&
    postalValue.length <= 5 &&
    arrayPostalCode.filter(function (characters) {
      return numbers.indexOf(characters) != -1;
    }).length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

emailInput.onfocus = function () {
  emailInput.classList.add("green-border");
  emailInput.classList.remove("red-border");
};

emailInput.onblur = function () {
  var emailCorrect = validationEmail();
  if (emailCorrect == true) {
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
  email = document.getElementById("Email").value;
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

passwordInput.onfocus = function () {
  passwordInput.classList.add("green-border");
  passwordInput.classList.remove("red-border");
};

passwordInput.onblur = function () {
  var passCorrect = validationPassword();
  if (passCorrect == true) {
    passwordInput.classList.remove("green-border");
    textValidationPassword.style.display = "none";
  } else {
    passwordInput.classList.add("red-border");
    textValidationPassword.style.display = "block";
  }
};

var password;
function validationPassword() {
  password = document.getElementById("Password").value;
  if (password.length >= 8 && password != null && isNaN(password) == true) {
    return true;
  } else {
    return false;
  }
}

repeatPasswordInput.onfocus = function () {
  repeatPasswordInput.classList.add("green-border");
  repeatPasswordInput.classList.remove("red-border");
};

repeatPasswordInput.onblur = function () {
  var repeatPassCorrect = validationRepeatPassword();
  if (repeatPassCorrect == true) {
    repeatPasswordInput.classList.remove("green-border");
    textValidationRepeatPassword.style.display = "none";
  } else {
    repeatPasswordInput.classList.add("red-border");
    textValidationRepeatPassword.style.display = "block";
  }
};

var repeatPasswordValue;
function validationRepeatPassword() {
  repeatPasswordValue = document.getElementById("RepeatPassword").value;
  if (
    passwordInput.value == repeatPasswordValue &&
    repeatPasswordValue.length >= 8 &&
    password != null &&
    isNaN(password) == true
  ) {
    return true;
  } else {
    return false;
  }
}

var btnAccept = document.getElementById("accept");
btnAccept.onclick = function (event) {
  var nameValidate = validationName();
  var lastNameValidate = validationLastName();
  var dateValidate = validationDate();
  var phoneValidate = validationPhone();
  var locationValidate = validationLocation();
  var adressValidate = validationAdress();
  var postalValidate = validationPostalCode();
  var emailValidate = validationEmail();
  var passwordValidate = validationPassword();
  var repeatPasswordValidate = validationRepeatPassword();
  var dniValidate = validationDni();
  if (
    nameValidate &&
    lastNameValidate &&
    dniValidate &&
    dateValidate &&
    phoneValidate &&
    locationValidate &&
    adressValidate &&
    postalValidate &&
    emailValidate &&
    passwordValidate &&
    repeatPasswordValidate
  ) {
    alert(
      "Name: " +
        emailInput.value +
        "\nLastname: " +
        lastNameInput.value +
        "\nDNI: " +
        dniInput.value +
        "\nDate of birth: " +
        dateBirthInput.value +
        "\nPhone: " +
        phoneInput.value +
        "\nLocation: " +
        locationInput.value +
        "\nAdress: " +
        adressInput.value +
        "\nPostal Code: " +
        postalInput.value +
        "\nEmail: " +
        emailInput.value +
        "\npassword: " +
        "*".repeat(passwordInput.value.length) +
        "\nRepeat Password: " +
        "*".repeat(repeatPasswordInput.value.length)
    );
  } else {
    if (nameValidate == false) {
      alert("Invalid name: " + nameInput.value);
    }
    if (lastNameValidate == false) {
      alert("Invalid lastname: " + lastNameInput.value);
    }
    if (dniInput == false) {
      alert("Invalid DNI: " + dniInput.value);
    }
    if (dateBirthInput == false) {
      alert("Invalid date of birth: " + dateBirthInput.value);
    }
    if (phoneInput == false) {
      alert("Invalid phone: " + phoneInput.value);
    }
    if (locationInput == false) {
      alert("Invalid location: " + locationInput.value);
    }
    if (adressInput == false) {
      alert("Invalid adress: " + adressInput.value);
    }
    if (postalInput == false) {
      alert("Invalid Postal Code: " + postalInput.value);
    }
    if (emailInput == false) {
      alert("Invalid Email: " + emailInput.value);
    }
    if (passwordInput == false) {
      alert("Invalid Password: " + passwordInput.hidden);
    }
    if (repeatPasswordInput == false) {
      alert("Invalid Repeat Password: " + repeatPasswordInput.hidden);
    }
  }

  var dob =
    dateBirthInput.value.substring(5, 7) +
    "/" +
    dateBirthInput.value.substring(8, 10) +
    "/" +
    dateBirthInput.value.substring(0, 4);

  var params = new URLSearchParams();
  params.append("name", nameInput.value);
  params.append("lastName", lastNameInput.value);
  params.append("dni", dniInput.value);
  params.append("dob", dob);
  params.append("phone", phoneInput.value);
  params.append("address", adressInput.value);
  params.append("city", locationInput.value);
  params.append("zip", postalInput.value);
  params.append("email", emailInput.value);
  params.append("password", passwordInput.value);
  var request =
    "https://api-rest-server.vercel.app/signup" + "?" + params.toString();

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        alert("The request was successful.\n" + JSON.stringify(data.msg));
        localStorage.setItem("Name", nameInput.value);
        localStorage.setItem("Surname", lastNameInput.value);
        localStorage.setItem("Id Number", dniInput.value);
        localStorage.setItem("Birth Date", dateBirthInput.value);
        localStorage.setItem("Phone", phoneInput.value);
        localStorage.setItem("Address", adressInput.value);
        localStorage.setItem("City", locationInput.value);
        localStorage.setItem("Postal Code", postalInput.value);
        localStorage.setItem("Email", emailInput.value);
        localStorage.setItem("Password", passwordInput.value);
      } else {
        var errorMsg = "";
        for (var i = 0; i < data.errors.length; i++) {
          errorMsg += data.errors[i].msg + "\n";
        }
        alert("There were errors with your submission:\n" + errorMsg);
      }
    })
    .catch(function (error) {
      alert("There was an error:\n" + error.msg);
    });

  event.preventDefault();
};

function getLocalStorage() {
  nameInput.value = localStorage.getItem("Name");
  lastNameInput.value = localStorage.getItem("Surname");
  dniInput.value = localStorage.getItem("Id Number");
  dateBirthInput.value = localStorage.getItem("Birth Date");
  phoneInput.value = localStorage.getItem("Phone");
  adressInput.value = localStorage.getItem("Address");
  locationInput.value = localStorage.getItem("City");
  postalInput.value = localStorage.getItem("Postal Code");
  emailInput.value = localStorage.getItem("Email");
  passwordInput.value = localStorage.getItem("Password");
  repeatPasswordInput.value = localStorage.getItem("Password");
}

getLocalStorage();
console.log(nameInput.value);
console.log(lastNameInput.value);
console.log(dniInput.value);
console.log(dateBirthInput.value);
console.log(phoneInput.value);
console.log(locationInput.value);
console.log(adressInput.value);
console.log(postalInput.value);
console.log(emailInput.value);
console.log(passwordInput.value);
console.log(repeatPasswordInput.value);
