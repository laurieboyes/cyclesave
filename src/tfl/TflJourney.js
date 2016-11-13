import moment from 'moment';
import { json as fetchResJson } from 'fetchres';

export default class TflJourney {
	constructor (startLatLng, endLatLng, startTime) {
		this.start = startLatLng;
		this.end = endLatLng;
		this.startTime = startTime;
		this.isFetched = false;
	}

	fetchInfo () {
		return fetch(`https://api.tfl.gov.uk/journey/journeyresults/${this.start.lat},${this.start.lng}/to/${this.end.lat},${this.end.lng}?time=${moment(this.startTime).format('HHmm')}`)
			.then(fetchResJson)
			.then(stuff => {
				this.isFetched = true;
				this.rawInfo = stuff.journeys[0];
			})
			.catch(err => {
				console.error(err);
				this.isFetched = true;
				this.inError = true;
			})
	}

	getLegSummaries () {
		if(this.inError) {
			return [];
		} else {
			return this.rawInfo.legs.map(leg => leg.instruction.summary);
		}

	}
}
