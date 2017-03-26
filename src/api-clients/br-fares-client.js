import { json as fetchResJson } from 'fetchres';
import flags from '../dev-stuff/flags';

// note that this always returns peak, pay-as-you-go fare
export function fetchNationalRailFare(fromCode, toCode) {

	if(flags.fakeNationalRailFare) {
		console.log('faking national rail fare');
		return Promise.resolve(4.2); // whatever
	}

	return fetch(`http://api.brfares.com/querysimple?orig=${fromCode}&dest=${toCode}`)
		.then(fetchResJson)
		.then(json => json.fares.find(fare => fare.ticket.code === 'PAP').adult.fare / 100);
}
