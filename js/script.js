const footerYear = document.querySelector('.footer__year');

const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav-mobile-items-item');

const formIcon = document.querySelector('.form-icon');
const sendBtn = document.querySelector('.send');
const cancelBtn = document.querySelector('.cancel');
const form = document.querySelector('.popup');
const nameForm = document.querySelector('#name');
const mailForm = document.querySelector('#mail');
const messageForm = document.querySelector('#message');
const error = document.querySelector('.error');

// FORM
const showForm = () => {
	form.style.display = 'block';
	navMobile.classList.remove('nav-mobile--active');
	navBtn.classList.remove('is-active');
};

const sendForm = () => {
	if (nameForm === '' || mailForm === '' || messageForm === '') {
		error.textContent = 'Uzupełnij wszystkie pola';
	}
};

const closeForm = () => {
	form.style.display = 'none';
};

// NAV
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

// FOOTER

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

navBtn.addEventListener('click', handleNav);
formIcon.addEventListener('click', showForm);
sendBtn.addEventListener('click', sendForm);
cancelBtn.addEventListener('click', closeForm);
