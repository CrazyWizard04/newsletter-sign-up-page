const signUpForm = document.getElementById("form-sign-up");
const emailInput = document.getElementById("email");
const errorDisplay = document.querySelector(".error-display");

const newsletterSignup = document.querySelector(".newsletter-sign-up");
const newsletterSuccess = document.querySelector(".newsletter-success");
const subscriptionEmail = document.querySelector(".subscription-email");

const dismissBtn = document.querySelector(".dismiss-btn");

// Custom submission logic (prevents default behavior)
const handleSubmit = (e) => {
  e.preventDefault();

  validateInputs();
};

// Sets the error state and error message in the form
const setError = (message) => {
  errorDisplay.innerText = message;
  emailInput.classList.add("error");
};

// Remove the error state and error message
const clearError = () => {
  errorDisplay.innerText = "";
  emailInput.classList.remove("error");
}

// Sets the email in the success message and reveals it
const subscribeNewsletter = (email) => {
  subscriptionEmail.innerText = email;
  emailInput.value = "";

  newsletterSignup.style.display = "none";
  newsletterSuccess.style.display = "flex";
};

// Checks the form for a valid email address
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

// Hides the success message and reveals the sign-up form
const hideMessage = (e) => {
  newsletterSignup.style.display = "flex";
  newsletterSuccess.style.display = "none";
};

emailInput.addEventListener("input", clearError);
signUpForm.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", hideMessage);
