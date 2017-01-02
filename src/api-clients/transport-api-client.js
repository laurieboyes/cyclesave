import { json as fetchResJson } from 'fetchres';

const appKey = '3968ae871b868f880765cc404398eb83';
const appId = 'b8d9e01a';

export function getStationCodeFromLatLng(lat, lng) {
	return fetch(`https://transportapi.com/v3/uk/train/stations/near.json?app_id=${appId}&app_key=${appKey}&lat=${lat}}&lon=${lng}&rpp=1`)
		.then(fetchResJson)
        .then(json => json.stations[0].station_code);
}