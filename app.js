const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const gender = document.getElementById("gender");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
// let popup = document.getElementById("popup");
const btnOpenPopup = document.getElementById("btn-form-open");
const btnClosePopup = document.getElementById("popup-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const setErrorFor = (input, message, openPop, popCont) => {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error");
  errorDisplay.innerText = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  openPop = document.querySelector(".open-popup");
  popCont = document.querySelector(".popup-cont");
  openPop.style.display = "none";
  popCont.style.display = "none";
};

const setSuccessFor = (input, openPop, popCont) => {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error");
  errorDisplay.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
  // popup = document.getElementById("popup");
  openPop = document.querySelector(".open-popup");
  popCont = document.querySelector(".popup-cont");
  openPop.style.display = "block";
  popCont.style.display = "flex";
};

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  // const phoneNumberValue = phoneNumber.value;
  const genderValue = gender.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank and @ is required");
  } else {
    setSuccessFor(email);
  }

  // if (!phoneNumberValue) {
  //   setErrorFor(phoneNumber, "Please match the requested format");
  // } else {
  //   setSuccessFor(phoneNumber);
  // }

  if (genderValue === "") {
    setErrorFor(gender, "one must be selected");
  } else {
    setSuccessFor(gender);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be at least 8 characters");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Passwords does not match");
  } else {
    setSuccessFor(confirmPassword);
  }
};

// const handlePopup = () => {
//   btnClosePopup.addEventListener("click", closePopup());
// };
// const closePopup = () => {
//   popup.classList.remove("open-popup");
// };
