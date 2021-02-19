const searchForm = document.querySelector('form[name="search"]');
const subscribeForm = document.querySelector('form[name="subscribe"]');
const loginForm = document.querySelector('form[name="login"]');

searchForm.addEventListener('submit', e => {
	e.preventDefault();
	alert(`Вы ввели: ${document.forms.search.text.value}`);
});

subscribeForm.addEventListener('submit', e => {
	e.preventDefault();
	alert('Вы подписались на новости');
});

loginForm.addEventListener('submit', e => {
	e.preventDefault();
	alert('Добро пожаловать');
});
