import React from 'react';
import moment from 'moment';

export default class BikeRideList extends React.Component {

	getBikeRideKey (ride) {
		return ride.startTime.toISOString();
	}

	renderLocation (lat, lng) {
		return (<a href={`https://www.google.co.uk/maps/place/${lat},${lng}`}>{lat.toFixed(3)},{lng.toFixed(3)}</a>);
	}

	nanosToMinutesString (nanos) {
		return `${parseInt(nanos / 1000 / 60)} mins`
	}

	formatStartTime (date) {
		return moment(date).format('YYYY-MM-DD HH:mm');
	}

	formatJourneyLegSummaries (journey) {
		if(journey.isFetched) {
			return (
				<ol>
					{journey.getLegSummaries().map((s, i) => (<li key={i}>{s}</li>))}
				</ol>
			);
		} else {
			return 'loading...'
		}

	}

	consoleLogTheJourneyStuff (ride) {
		console.log(ride.journeyPlans.getJourneyLegs());
	}

	render () {
		return (
			<div className='bike-ride-list'>
				<h2>Here's your bike rides:</h2>
				<table className='bike-ride-list__table'>
					<thead>
					<tr>
						<th>Start loc</th>
						<th>End loc</th>
						<th>Start time</th>
						<th>Duration</th>
						<th>TFL Journey</th>
						<th></th>
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
								<td>{this.formatJourneyLegSummaries(ride.journeyPlans)}</td>
								<td><button onClick={() => this.consoleLogTheJourneyStuff(ride)}>Show stuff</button></td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		);
	}
}
