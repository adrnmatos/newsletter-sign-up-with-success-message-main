function formSubmit(event) {
	alert('chegou');
	let email = document.getElementById('email');
	if (!email.value.includes('@')) failure();
	else success();

	event.preventDefault();
}

function failure() {
	let errorMessage = document.getElementById('error-label');
	errorMessage.classList.toggle('hidden');

	let inputElement = document.getElementById('email');
	inputElement.classList.toggle('input-error');
}

function success() {
	let signUpPanel = document.getElementById('sign-up-pane');
	signUpPanel.classList.toggle('hidden');
}

let form = document.getElementById('form');
form.addEventListener('submit', formSubmit);
