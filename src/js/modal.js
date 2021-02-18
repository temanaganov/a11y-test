const modal = document.querySelector('.modal');
const input = document.querySelector('.modal input');
const openModalButton = document.querySelector('.js-open-modal');
const closeModalButton = document.querySelector('.modal__close');

openModalButton.addEventListener('click', () => {
	modal.classList.add('modal--active');
	modal.focus();
});

closeModalButton.addEventListener('click', () => {
	modal.classList.remove('modal--active');
	openModalButton.focus();
});

modal.addEventListener('keyup', e => {
	if (e.code === 'Escape') {
		modal.classList.remove('modal--active');
		openModalButton.focus();
	}
});

////////////////////////////////////////////////////////////////

const focusableEls = modal.querySelectorAll(
	'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
);
const firstFocusableEl = focusableEls[0];
const lastFocusableEl = focusableEls[focusableEls.length - 1];

modal.addEventListener('keydown', function (e) {
	const isTabPressed = e.key === 'Tab';

	if (!isTabPressed) {
		return;
	}

	if (e.shiftKey) {
		if (document.activeElement === firstFocusableEl) {
			lastFocusableEl.focus();
			e.preventDefault();
		}
	} else {
		if (document.activeElement === lastFocusableEl) {
			firstFocusableEl.focus();
			e.preventDefault();
		}
	}
});
