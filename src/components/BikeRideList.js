import React from 'react';

export default class BikeRideList extends React.Component {

	getBikeRideKey (ride) {
		return ride.startTime.toISOString();
	}

	renderLocation (lat, lng) {
		return `lat:${lat} lng:${lng}`;
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
								<td>{ride.startTime.toISOString()}</td>
								<td>{ride.durationMs}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		);
	}
}
