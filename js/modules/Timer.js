import addZeroToSingleDigit from "../services/addZeroToSingleDigit.js";
import addCounter from "../services/addCounter.js";
export default class Timer {

	constructor(minutes, seconds, rounds) {
		this.startMinutes = +minutes;
		this.minutes = +minutes;
		this.startSeconds = +seconds;
		this.seconds = +seconds;
		this.minutesElem = document.querySelector('#minutes');
		this.secondsElem = document.querySelector('#seconds');
		this.currentState = 'stop'; // can be stop running, paused;
		this.counter = null;
		this.alarm = document.querySelector('#alarm');
	}

	init() {
		this.minutesElem.innerText = addZeroToSingleDigit(this.minutes);
		this.secondsElem.innerText = addZeroToSingleDigit(this.seconds);
	}

	startTimer() {
		this.currentState = 'running';
		this.counter = setInterval(addCounter.bind(this), 1);
	}

	resetTimer() {
		this.minutesElem.innerText = addZeroToSingleDigit(this.startMinutes);
		this.minutes = this.startMinutes;
		this.secondsElem.innerText = addZeroToSingleDigit(this.startSeconds);
		this.seconds = this.startSeconds;
	}
	pauseTimer() {
		this.currentState = 'paused';
		clearInterval(this.counter)
	}
}