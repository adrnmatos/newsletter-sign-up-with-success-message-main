function formValidate(event) {
	if (!inputElement.value.includes('@')) validateError();
	else validateSuccess();

	event.preventDefault();
}

function validateError() {
	errorMessage.classList.remove('hidden');
	inputElement.classList.add('input-error');
}

function validateSuccess() {
	signUpPanel.classList.add('hidden');
	successPanel.classList.remove('hidden');
}

function cleanUpEmailInput() {
	errorMessage.classList.add('hidden');
	inputElement.classList.remove('input-error');
	inputElement.value = '';
}

function dismissSuccessPanel(event) {
	signUpPanel.classList.remove('hidden');
	successPanel.classList.add('hidden');
	event.preventDefault();
}

// get elements
let form = document.getElementById('form');
let signUpPanel = document.getElementById('sign-up-pane');
let inputElement = document.getElementById('email');
let errorMessage = document.getElementById('error-label');
let successPanel = document.getElementById('success-pane');
let successBtn = document.getElementById('successButton');

// add event listeners
form.addEventListener('submit', formValidate);
inputElement.addEventListener('focus', cleanUpEmailInput);
successBtn.addEventListener('click', dismissSuccessPanel);
