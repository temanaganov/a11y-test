const play = document.querySelector('.video button');
const video = document.querySelector('video');

let isPlayed = false;

const startPlay = () => {
	video.play();
	video.controls = true;
	video.focus();
	play.hidden = true;
	isPlayed = true;
};

play.addEventListener('click', startPlay);
