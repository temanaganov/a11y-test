const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.js-open-modal');
const closeModalButton = document.querySelector('.modal__close');

openModalButton.addEventListener('click', () => {
	modal.classList.add('modal--active');
	modal.focus();
})

closeModalButton.addEventListener('click', () => {
	modal.classList.remove('modal--active');
	openModalButton.focus();
})
