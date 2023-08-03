import Timer from './modules/Timer.js'

let timer = new Timer(15);
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

function toggleButtons() {
	if (timer.isRunning) {
		startBtn.classList.add('hidden');
		resetBtn.classList.remove('hidden');
		pauseBtn.classList.remove('hidden');
	} else {
		startBtn.classList.remove('hidden');
		resetBtn.classList.add('hidden');
		pauseBtn.classList.add('hidden');
	}
}
startBtn.onclick = () => {
	timer.init()
	toggleButtons()
}
pauseBtn.onclick = () => {
	timer.pauseTimer()
	toggleButtons()
}
resetBtn.onclick = () => {
	timer.resetTimer()
	toggleButtons()
}

toggleButtons()