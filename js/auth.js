let signupForm = document.querySelector(".signup-form");

const handleSignUp = (e) => {
  e.preventDefault();
  let nameInput = document.querySelector(".name-input").value;
  let emailInput = document.querySelector(".email-input").value;
  let passwordInput = document.querySelector(".password-input").value;
  let confirmPasswordInput = document.querySelector(
    ".confirm-password-input",
  ).value;
  let phoneNumberInput = document.querySelector(".phone-nummber-input").value;
  let termInput = document.querySelector(".term-input");

  console.log(phoneNumberInput);

  if (phoneNumberInput < 10) {
    return alert("Enter Valid Phone Number");
  }

  if (passwordInput.length < 4) {
    return alert("password length should be greater than 3");
  } else if (passwordInput !== confirmPasswordInput) {
    return alert("passwords are not same");
  }

  let formData = {
    name: nameInput,
    email: emailInput,
    password: passwordInput,
    phoneNumber: phoneNumberInput,
  };

  localStorage.setItem("savedData", JSON.stringify(formData));
  let data = JSON.parse(localStorage.getItem("savedData"));

  if (data) {
    alert("Signup Succesfull");
    window.location.replace("./login.html");
  }
};

if (signupForm) {
  signupForm.addEventListener("submit", handleSignUp);
}

let loginForm = document.querySelector(".login-form");

let handleLogin = (e) => {
  e.preventDefault();

  let emailInput = document.querySelector(".login-email-input").value;
  let passwordInput = document.querySelector(".login-password-input").value;
  let checkBox = document.querySelector("#remember");

  let data = JSON.parse(localStorage.getItem("savedData"));

  

  if (
    (emailInput === data.email && passwordInput === data.password) ||
    (emailInput === data.phoneNumber && passwordInput === data.password)
  ) {
    if (checkBox.checked === true) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      window.location.replace("./homepage.html");
    } else  {
      sessionStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      window.location.replace("./homepage.html");
    }

    
  } else if (emailInput !== data.email) {
    return alert("Invalid Email");
  } else if (emailInput !== data.email && emailInput !== data.phoneNumber) {
    return alert("Invalid Phone Number");
  } else if (passwordInput !== data.password) {
    return alert("Invalid Password");
  }
};

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}
