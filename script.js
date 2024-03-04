function formsubmit() {
	// obtem os panels
	let signUpPanel = document.getElementById('sign-up');
	let successPanel = document.getElementById('success');

	// toogle signUpPanel and successPanel display
	signUpPanel.classList.toggle('hidden');
	successPanel.classList.toggle('hidden');
}
