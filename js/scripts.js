const form = document.getElementById("form");
const formGroup = document.querySelectorAll(".sign-up-form-group");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

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
	}

	return false;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!firstName.value) {
		generateErrorFeedBack(firstName, "First name can not be empty");
	}

	if (!lastName.value) {
		generateErrorFeedBack(lastName, "Last name can not be empty");
	}

	if (!validateEmail(email.value)) {
		generateErrorFeedBack(email, "Looks like this is not an email");
	} else {
		email.value = "";
	}

	if (!password.value) {
		generateErrorFeedBack(password, "Password can not be empty");
	}

	firstName.value = "";
	lastName.value = "";

	password.value = "";

	submitButton.disabled = true;
	const errorMessages = document.querySelectorAll(".error-message");

	setTimeout(() => {
		formGroup.forEach((group) => group.classList.remove("error"));
		errorMessages.forEach((message) => message.remove());
		submitButton.disabled = false;
	}, 2000);
});
