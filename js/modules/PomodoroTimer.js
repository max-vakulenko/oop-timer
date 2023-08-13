import RoundedTimer from "./RoundedTimer.js";

export default class PomodoroTimer extends RoundedTimer {
	constructor() {
		super(25, 0, 7)
		this.isWorking = true;
	}

	changeTimer(mins) {
		this.startMinutes = +mins;

	}
}