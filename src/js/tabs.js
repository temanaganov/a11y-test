const tablists = document.querySelectorAll('.tablist');
const tablistButtons = document.querySelectorAll('.tablist button');

const changeTab = (prev, next) => {
	const prevPanel = document.getElementById(prev.getAttribute('aria-controls'));
	const nextPanel = document.getElementById(next.getAttribute('aria-controls'));
	prev.setAttribute('tabindex', '-1');
	prev.setAttribute('aria-selected', 'false');
	prevPanel.classList.remove('active');
	next.setAttribute('tabindex', '0');
	next.setAttribute('aria-selected', 'true');
	nextPanel.classList.add('active');
};

for (const button of tablistButtons) {
	button.addEventListener('click', e => {
		const currentButton = e.target.parentElement.querySelector('[tabindex="0"]');
		changeTab(currentButton, e.target);
	});
}

for (const button of tablistButtons) {
	button.addEventListener('keyup', e => {
		if (e.key === 'ArrowRight') {
			const nextEl = e.target.nextElementSibling;
			if (nextEl) {
				changeTab(e.target, nextEl);
				nextEl.focus();
			} else {
				changeTab(e.target, e.target.parentElement.firstElementChild);
				e.target.parentElement.firstElementChild.focus();
			}
		}
		if (e.key === 'ArrowLeft') {
			const prevEl = e.target.previousElementSibling;
			if (prevEl) {
				changeTab(e.target, prevEl);
				prevEl.focus();
			} else {
				changeTab(e.target, e.target.parentElement.lastElementChild);
				e.target.parentElement.lastElementChild.focus();
			}
		}
	});
}
