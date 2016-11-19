import getJourneyCost from './get-journey-cost';

export default class TflJourney {
	constructor (rawJourney) {
		this.legs = rawJourney.legs.map(rawLeg => Object.assign(
				{
					type: rawLeg.mode.id,
					summary: rawLeg.instruction.summary
				},
				(['overground', 'national-rail', 'tube'].includes(rawLeg.mode.id) ? {
					fromNaptanId: rawLeg.departurePoint.naptanId,
					toNaptanId: rawLeg.arrivalPoint.naptanId
				} : {})
			)
		);
	}

	getLegSummaries () {
		if(this.inError) {
			return [];
		} else {
			return this.legs.map(leg => leg.summary);
		}
	}

	fetchCost () {
		getJourneyCost(this.legs)
			.then(cost => this.cost = cost);
	}
}
