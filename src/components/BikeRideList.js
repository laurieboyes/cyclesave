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

	formatJourneyLegSummaries (legSummaries) {
		return (
			<ol>
				{legSummaries.map((s, i) => (<li key={i}>{s}</li>))}
			</ol>
		);

	}

	renderJourneyTable (journeyPlan) {

		if (journeyPlan.isFetched) {
			return (
				<table className='bike-ride-list__table__journey-table'>
					<tbody>
					{journeyPlan.getJourneys().map((journey, i) => (
						<tr key={i}>
							<td>{this.formatJourneyLegSummaries(journey.getLegSummaries())}</td>
							<td>£££</td>
						</tr>
					))}
					</tbody>
				</table>
			);
		} else {
			return 'loading...'
		}
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
					</tr>
					</thead>
					{this.props.items.map(ride => {
						return (
							<tbody key={this.getBikeRideKey(ride)}>
								<tr>
									<td>{this.renderLocation(ride.startLatLang.lat, ride.startLatLang.lng)}</td>
									<td>{this.renderLocation(ride.endLatLang.lat, ride.endLatLang.lng)}</td>
									<td>{this.formatStartTime(ride.startTime)}</td>
									<td>{this.nanosToMinutesString(ride.durationMs)}</td>
								</tr>
								<tr>
									<td colSpan='4'>
										{this.renderJourneyTable(ride.journeyPlan)}
									</td>
								</tr>
							</tbody>
						)
					})}
				</table>
			</div>
		);
	}
}
