export default class TflJourney {
	constructor (rawJourney) {
		this.legs = rawJourney.legs.map(rawLeg => ({
			type: rawLeg.mode.id
		}));
	}
}
