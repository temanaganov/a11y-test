const searchForm = document.querySelector('header form');

searchForm.addEventListener('submit', e => {
	e.preventDefault();
	alert(`Вы ввели: ${document.forms.search.text.value}`);
});
