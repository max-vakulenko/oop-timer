export default class Timer {

	constructor(seconds) {
		this.startSeconds = +seconds;
		this.seconds = +seconds;
		this.secondsElem = document.querySelector('#seconds');
		this.isRunning = false;
	}

	init() {
		this.secondsElem.innerText = this.seconds;
		this.startTimer();
	}

	secondsRule() {
		const format = this.seconds >= 10 ? this.seconds : `0${this.seconds}`;
		this.secondsElem.innerText = format;
	}

	startTimer() {
		this.isRunning = true;
		this.interval = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds--
				this.secondsRule()
			} else {
				this.isRunning = false;
				return
			}
		}, 1000);
	}

	resetTimer() {
		this.secondsElem.innerText = this.startSeconds;
		this.seconds = this.startSeconds;
	}

	pauseTimer() {
		this.isRunning = false;
		clearInterval(this.interval)
	}
}