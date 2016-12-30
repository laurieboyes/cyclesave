import getJourneyCost from './get-journey-cost';

function getTypeSpecificInfo(rawLeg) {
	switch (rawLeg.mode.id) {
		case 'overground':
		case 'tube':
			return {
				fromNaptanId: rawLeg.departurePoint.naptanId,
				toNaptanId: rawLeg.arrivalPoint.naptanId
			};
		case 'national-rail':
			return {
				fromLat: rawLeg.departurePoint.lat,
				fromLng: rawLeg.departurePoint.lon,
				toLat: rawLeg.arrivalPoint.lat,
				toLng: rawLeg.arrivalPoint.lon
			}
		default:
			return {}
	}
}

export default class TflJourney {
	constructor (rawJourney) {
		this.legs = rawJourney.legs.map(rawLeg => Object.assign(
				{
					type: rawLeg.mode.id,
					summary: rawLeg.instruction.summary
				},
				getTypeSpecificInfo(rawLeg)
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
			.then(cost => this.cost = cost)
			.catch(err => {
				console.log(err);
				this.cost = 'uncostable';
			});
	}
}
