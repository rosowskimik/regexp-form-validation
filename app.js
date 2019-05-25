//Event listeners
document.querySelector('#username').addEventListener('blur', validateUsername);
document.querySelector('#zipcode').addEventListener('blur', validateZipcode);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateUsername() {
	const username = document.querySelector('#username');
	const re = /^[a-zA-Z0-9]{2,10}$/;
	//validate
	validateInput(username, re);
}

function validateZipcode() {
	const zipcode = document.querySelector('#zipcode');
	const re = /^\d{2}\-\d{3}$/;
	//validate
	validateInput(zipcode, re);
}

function validateEmail() {
	const email = document.querySelector('#email');
	const re = /^[a-zA-Z0-9_\-\.]+\@[a-zA-Z0-9_\-\.]+\.[a-z]{2,}$/;
	//validate
	validateInput(email, re);
}

function validatePhone() {
	const phone = document.querySelector('#phone');
	const re = /^(\(?\+\d{2}\)?[ -]?)?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{3}$/;
	//validate
	validateInput(phone, re);
}

//Validate 
function validateInput(input, re) {
	if(input.value === '') {
		input.classList.remove('is-invalid');
	} else {
		if(!re.test(input.value)){
			phone.classList.add('is-invalid');
		} else {
			phone.classList.remove('is-invalid');
		}
	}
}