import geodist from 'geodist';

export default function (from, to) {
	return geodist(
		{
			lat: from.lat,
			lon: from.lng
		},
		{
			lat: to.lat,
			lon: to.lng
		},
		{
			unit: 'meters'
		}
	)
}