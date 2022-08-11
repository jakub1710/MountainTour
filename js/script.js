const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav-mobile-items-item');

const formName = document.querySelector('#name');
const formMail = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const sendBtn = document.querySelector('.send-btn');
const errorText = document.querySelector('.error-text');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.button-popup');

const footerYear = document.querySelector('.footer__year');

// --- NAV ---

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtn.classList.remove('is-active');
		});
	});
};

// --- FORM ---

const showError = (input) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el);
		} else {
			clearError(el);
		}
	});
};

const checkEmail = (formMail) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(formMail.value)) {
		clearError(formMail);
	} else {
		showError(formMail);
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box');
	let errors = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) errors++;
	});

	if (errors === 0) {
		popup.classList.add('active-popup');
	}
};

const closePopup = () => {
	popup.classList.remove('active-popup');
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([formName, formMail, formMessage]);
	checkEmail(formMail);
	checkErrors();
});

// --- FOOTER ---

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);
popupBtn.addEventListener('click', closePopup);
