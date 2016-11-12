import React from 'react';
import moment from 'moment';

export default class BikeRideList extends React.Component {

	getBikeRideKey (ride) {
		return ride.startTime.toISOString();
	}

	renderLocation (lat, lng) {
		return `${lat},${lng}`;
	}

	nanosToMinutesString (nanos) {
		return `${parseInt(nanos / 1000 / 60)} mins`
	}

	formatStartTime (date) {
		return moment(date).format('YYYY-MM-DD HH:mm');
	}

	getTflLink (start, end) {
		return `https://api.tfl.gov.uk/journey/journeyresults/${start.lat},${start.lng}/to/${end.lat},${end.lng}`;
	}

	render () {
		return (
			<div className='bike-ride-list'>
				<h2>Here's your bike rides:</h2>
				<table>
					<thead>
					<tr>
						<th>Start loc</th>
						<th>End loc</th>
						<th>Start time</th>
						<th>Duration</th>
					</tr>
					</thead>
					<tbody>
					{this.props.items.map(ride => {
						return (
							<tr key={this.getBikeRideKey(ride)}>
								<td>{this.renderLocation(ride.startLatLang.lat, ride.startLatLang.lng)}</td>
								<td>{this.renderLocation(ride.endLatLang.lat, ride.endLatLang.lng)}</td>
								<td>{this.formatStartTime(ride.startTime)}</td>
								<td>{this.nanosToMinutesString(ride.durationMs)}</td>
								<td><a href={this.getTflLink(ride.startLatLang,ride.endLatLang)}>TFL</a></td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		);
	}
}
