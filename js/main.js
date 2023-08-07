import Timer from './modules/Timer.js'

let timer;

const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');
const openSettingsBtn = document.querySelector('#open_settings');
const closeSettingsBtn = document.querySelector('#close_settings');
const settingForm = document.forms[0];

startBtn.onclick = () => {
	if (timer) {
		timer.startTimer()
		toggleButtons()
	} else {
		alert('Configurate timer');
		settingForm.classList.remove('translate-x-full')
	}

}
pauseBtn.onclick = () => {
	timer.pauseTimer()
	toggleButtons()
}
resetBtn.onclick = () => {
	timer.resetTimer()
	timer.resetRounds()
	toggleButtons()
}
openSettingsBtn.onclick = () => {
	settingForm.classList.remove('translate-x-full')
}
closeSettingsBtn.onclick = () => {
	settingForm.classList.add('translate-x-full')
}
settingForm.onsubmit = event => {
	event.preventDefault();
	const form = event.target;
	if (timer) {
		clearInterval(timer.counter);
	}
	timer = new Timer(form.elements.inputMinutes.value, form.elements.inputSeconds.value, form.elements.inputRounds.value);

	timer.init();
	settingForm.classList.add('translate-x-full');
}

function toggleButtons() {
	if (timer?.currentState === 'running') {
		startBtn.classList.add('hidden');
		resetBtn.classList.remove('hidden');
		pauseBtn.classList.remove('hidden');
	} else if (timer?.currentState === 'paused') {
		startBtn.classList.remove('hidden');
		resetBtn.classList.remove('hidden');
		pauseBtn.classList.add('hidden');
	} else if (timer?.currentState === 'stop') {
		startBtn.classList.add('hidden');
		resetBtn.classList.remove('hidden');
		pauseBtn.classList.add('hidden');
	} else {
		resetBtn.classList.add('hidden');
		pauseBtn.classList.add('hidden');
	}
}

toggleButtons()