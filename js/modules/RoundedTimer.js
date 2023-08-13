import Timer from "./Timer.js";
import addZeroToSingleDigit from "../services/addZeroToSingleDigit.js";

export default class RoundedTimer extends Timer {
	constructor(minutes, seconds, rounds) {
		super(minutes, seconds)
		this.startRounds = +rounds;
		this.rounds = +rounds;
	}

	resetRounds() {
		this.rounds = this.startRounds;
	}
}