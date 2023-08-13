import addZeroToSingleDigit from "./addZeroToSingleDigit.js";

export default function () {
	if (this.seconds > 0) {
		this.secondsElem.innerText = addZeroToSingleDigit(--this.seconds);
	} else if (this.minutes > 0 && this.seconds <= 0) {
		this.minutesElem.innerText = addZeroToSingleDigit(--this.minutes);
		this.seconds = 60;
		this.secondsElem.innerText = addZeroToSingleDigit(--this.seconds);
	} else if (this.rounds > 1) {
		if (this.hasOwnProperty('isWorking')) {
			this.changeTimer(this.isWorking ? 5 : 25)
			this.isWorking = !this.isWorking
			this.pauseTimer()
		}
		this.rounds--;
		this.resetTimer();
	} else {
		this.currentState = 'stop';
		this.alarm.play();
		setTimeout(function () {
			this.alarm.pause();
		}, 1000)
		clearInterval(this.counter);
	}
}