const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__slide');
const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];
const prev = slider.querySelector('.slider__prev');
const next = slider.querySelector('.slider__next');

let activeSlide = slider.querySelector('.slider__slide--active');

next.addEventListener('click', () => {
	if (activeSlide === lastSlide) {
		activeSlide.classList.remove('slider__slide--active');
		firstSlide.classList.add('slider__slide--active');
		activeSlide = firstSlide;
	} else {
		const nextSlide = activeSlide.nextElementSibling;
		activeSlide.classList.remove('slider__slide--active');
		nextSlide.classList.add('slider__slide--active');
		activeSlide = nextSlide;
	}
});

prev.addEventListener('click', () => {
	if (activeSlide === firstSlide) {
		activeSlide.classList.remove('slider__slide--active');
		lastSlide.classList.add('slider__slide--active');
		activeSlide = lastSlide;
	} else {
		const prevSlide = activeSlide.previousElementSibling;
		activeSlide.classList.remove('slider__slide--active');
		prevSlide.classList.add('slider__slide--active');
		activeSlide = prevSlide;
	}
});
