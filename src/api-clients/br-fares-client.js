import { json as fetchResJson } from 'fetchres';

// note that this always returns peak, pay-as-you-go fare
export function fetchNationalRailFare(fromCode, toCode) {
	return fetch(`http://api.brfares.com/querysimple?orig=${fromCode}&dest=${toCode}`)
		.then(fetchResJson)
		.then(json => json.fares.find(fare => fare.ticket.code === 'PAP').adult.fare / 100);
}
