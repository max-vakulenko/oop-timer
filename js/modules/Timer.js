import addZeroToSingleDigit from "../services/addZeroToSingleDigit.js";
export default class Timer {

	constructor(minutes, seconds, rounds) {
		this.startMinutes = +minutes;
		this.minutes = +minutes;
		this.startSeconds = +seconds;
		this.seconds = +seconds;
		this.startRounds = +rounds;
		this.rounds = +rounds;
		this.minutesElem = document.querySelector('#minutes');
		this.secondsElem = document.querySelector('#seconds');
		this.roundsElem = document.querySelector('#rounds');
		this.currentState = 'stop'; // can be stop running, paused;
		this.counter = null;
		this.alarm = document.querySelector('#alarm');
	}

	init() {
		this.minutesElem.innerText = addZeroToSingleDigit(this.minutes);
		this.secondsElem.innerText = addZeroToSingleDigit(this.seconds);
		this.roundsElem.innerText = this.rounds;
	}

	startTimer() {
		this.currentState = 'running';
		this.rounds--;
		this.roundsElem.innerText = this.rounds;
		this.counter = setInterval(() => {
			if (this.seconds > 0) {
				this.secondsElem.innerText = addZeroToSingleDigit(--this.seconds);
			} else if (this.minutes > 0 && this.seconds <= 0) {
				this.minutesElem.innerText = addZeroToSingleDigit(--this.minutes);
				this.seconds = 60;
				this.secondsElem.innerText = addZeroToSingleDigit(--this.seconds);
			} else if (this.rounds > 0) {
				this.alarm.setAttribute('src', 'audio/CJ.wav');
				this.alarm.play();
				this.rounds--;
				this.roundsElem.innerText = this.rounds;
				this.resetTimer();
			} else {
				this.currentState = 'stop';
				this.alarm.setAttribute('src', 'audio/alarm.wav');
				this.alarm.play();
				setTimeout(function () {
					this.alarm.pause();
				}, 3000)
				clearInterval(this.counter);

			}
		}, 1000);
	}

	resetTimer() {
		this.minutesElem.innerText = addZeroToSingleDigit(this.startMinutes);
		this.minutes = this.startMinutes;
		this.secondsElem.innerText = addZeroToSingleDigit(this.startSeconds);
		this.seconds = this.startSeconds;
	}

	resetRounds() {
		this.roundsElem.innerText = addZeroToSingleDigit(this.startRounds);
		this.rounds = this.startRounds;
	}
	pauseTimer() {
		this.currentState = 'paused';
		clearInterval(this.counter)
	}
}