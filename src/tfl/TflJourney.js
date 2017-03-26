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

		this.startLocationNiceName = rawJourney.legs[0].departurePoint.commonName;
		this.endLocationNiceName = rawJourney.legs[rawJourney.legs.length - 1].arrivalPoint.commonName;
	}

	getLegSummaries () {
		if(this.inError) {
			return [];
		} else {
			return this.legs.map(leg => leg.summary);
		}
	}

	fetchCost () {
		return getJourneyCost(this.legs)
			.then(cost => this.cost = cost)
			.catch(err => {
				console.log(err);
				this.cost = 'uncostable';
			});
	}
	
	getStartLocationNiceName() {
		return this.startLocationNiceName;
	}

	getEndLocationNiceName() {
		return this.endLocationNiceName;
	}
	
}
