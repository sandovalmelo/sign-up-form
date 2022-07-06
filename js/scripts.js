const form = document.getElementById("form");
const formGroup = document.querySelectorAll(".sign-up-form-group");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const signUpTerms = document.querySelector(".sign-up-terms");

function generateErrorFeedBack(element, message) {
	const errorMessage = document.createElement("p");
	errorMessage.classList.add("error-message");
	errorMessage.innerText = message;
	element.parentElement.appendChild(errorMessage);
	element.parentElement.classList.add("error");
}

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	} else {
		return false;
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let isFirstNameValid;
	let isLastNameValid;
	let isEmailValid = validateEmail(email.value);

	if (!firstName.value) {
		generateErrorFeedBack(firstName, "First name can not be empty");
		isFirstNameValid = false;
	} else {
		isFirstNameValid = true;
	}

	if (!lastName.value) {
		generateErrorFeedBack(lastName, "Last name can not be empty");
		isLastNameValid = false;
	} else {
		isLastNameValid = true;
	}

	if (!isEmailValid) {
		generateErrorFeedBack(email, "Looks like this is not an email");
	} else {
		email.value = "";
	}

	if (!password.value) {
		generateErrorFeedBack(password, "Password can not be empty");
		isPasswordValid = false;
	} else {
		isPasswordValid = true;
	}

	submitButton.disabled = true;

	firstName.value = "";
	lastName.value = "";
	password.value = "";

	let successMessage;

	if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
		signUpTerms.hidden = true;
		successMessage = document.createElement("p");
		successMessage.classList.add("success-message");
		successMessage.innerText = "Thank you for filling out our sign up form.";
		form.appendChild(successMessage);
	}

	const errorMessages = document.querySelectorAll(".error-message");

	setTimeout(() => {
		formGroup.forEach((group) => group.classList.remove("error"));
		errorMessages.forEach((message) => message.remove());
		successMessage ? successMessage.remove() : null;
		submitButton.disabled = false;
		signUpTerms.hidden = false;
	}, 2000);
});
