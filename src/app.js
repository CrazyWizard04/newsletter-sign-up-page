const signUpForm = document.getElementById("form-sign-up");
const emailInput = document.getElementById("email");
const errorDisplay = document.querySelector(".error-display");

const newsletterSignup = document.querySelector(".newsletter-sign-up");
const newsletterSuccess = document.querySelector(".newsletter-success");
const subscriptionEmail = document.querySelector(".subscription-email");

const dismissBtn = document.querySelector(".dismiss-btn");

const handleSubmit = (e) => {
  e.preventDefault();

  validateInputs();
};

const setError = (message) => {
  errorDisplay.innerText = message;
  emailInput.classList.add("error");
};

const subscribeNewsletter = (email) => {
  errorDisplay.innerText = "";
  emailInput.classList.remove("error");

  subscriptionEmail.innerText = email;
  newsletterSignup.style.display = "none";
  newsletterSuccess.style.display = "flex";
};

const validateInputs = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue.length === 0) {
    return setError("Email is required");
  }

  if (!emailValue.match(emailRegex)) {
    return setError("Please enter a valid email");
  }

  subscribeNewsletter(emailValue);
};

const hideMessage = (e) => {
  newsletterSignup.style.display = "flex";
  newsletterSuccess.style.display = "none";
};

signUpForm.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", hideMessage);
