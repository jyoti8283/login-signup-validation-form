const usernameval = document.getElementById("username");
const emailval = document.getElementById("email");
const numberval = document.getElementById("number");
const passwordval = document.getElementById("password");
const cpasswordval = document.getElementById("cpassword");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validate();
});
const isEmail = (emailval) => {
  var atSymbol = emailval.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailval.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailval.length - 1) return false;
  return true;
}

const validate = () => {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const numberval = number.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();
  if (usernameval === "") {
    showError(username, "username cannot be blank");
  } else if (usernameval.length <= 3) {
    showError(username, "username min 3char");
  } else {
    showSucces(username);
  }

  if (emailval === "") {
    showError(email, " email cannot be blank");
  } else if (!isEmail(emailval)) {
    showError(email, "Not a valid email");
  } else {
    showSucces(email);
  }
  if (numberval === "") {
    showError(number, " phone-number cannot be blank");
  } else if (numberval.length != 10) {
    showError(number, "Not a valid number");
  } else {
    showSucces(number);
  }
  if (passwordval === "") {
    showError(password, " password cannot be blank");
  } else if (passwordval.length <= 5) {
    showError(password, "minimum 6 char");
  } else {
    showSucces(password);
  }
  if (cpasswordval === "") {
    showError(cpassword, " confirm password cannot be blank");
  } else if (passwordval !== cpasswordval) {
    showError(cpassword, "password are not matched");
  } else {
    showSucces(cpassword);
  }
};

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// vgjhgkhg
// vhjbkjbhlkmbhlkihlikhki

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login");
    const createAccountForm = document.querySelector(".signup");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("signup-box");
        createAccountForm.classList.remove("signup-box");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("signup-box");
        createAccountForm.classList.add("signup-box");
    });
});


const loginemailval = document.getElementById("emaill");
const loginpasswordval = document.getElementById("logPassword");

const formmm = document.getElementById("formmm");
formmm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateform();
  });
  const islogEmail = (loginemailval) => {
    var atSymboll = loginemailval.indexOf("@");
    if (atSymboll < 1) return false;
    var dott = loginemailval.lastIndexOf(".");
    if (dott <= atSymboll + 2) return false;
    if (dott === loginemailval.length - 1) return false;
    return true;
  }
  
  const validateform = () => {
    // const loginemailval = username.value.trim();
    const loginemailval = emaill.value.trim();
    const loginpasswordval = logPassword.value.trim();
    if (loginemailval === "") {
        showError( emaill, " email cannot be blank");
      } else if (!islogEmail(loginemailval)) {
        showError( emaill, "Not a valid email");
      } else {
        showSucces(emaill)
      }
      if (loginpasswordval === "") {
        showError(logPassword, " password cannot be blank");
      } else if (loginpasswordval.length <= 5) {
        showError(logPassword, "minimum 6 char");
      } else {
        showSucces(logPassword);
    }
}

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
      }
      function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
      }
    
