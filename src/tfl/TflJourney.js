export default class TflJourney {
	constructor (rawJourney) {
		this.legs = rawJourney.legs.map(rawLeg => Object.assign(
				{
					type: rawLeg.mode.id
				},
				(['overground', 'national-rail', 'tube'].includes(rawLeg.mode.id) ? {
					fromNaptanId: rawLeg.departurePoint.naptanId,
					toNaptanId: rawLeg.arrivalPoint.naptanId
				} : {})
			)
		);
	}
}
