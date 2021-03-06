import React from 'react';
import moment from 'moment';

export default class BikeRideList extends React.Component {

	getBikeRideKey(ride) {
		return ride.startTime.toISOString();
	}

	renderLocationLatLng(lat, lng) {
		return (<a href={`https://www.google.co.uk/maps/place/${lat},${lng}`}>{lat.toFixed(3)},{lng.toFixed(3)}</a>);
	}

	renderLocationNiceName(niceName, lat, lng) {
		return (<a href={`https://www.google.co.uk/maps/place/${lat},${lng}`}>{niceName}</a>);
	}

	nanosToMinutesString(nanos) {
		return `${parseInt(nanos / 1000 / 60)} mins`
	}

	formatStartTime(date) {
		return moment(date).format('YYYY-MM-DD HH:mm');
	}

	formatJourneyLegSummaries(legSummaries) {
		return (
			<ol>
				{legSummaries.map((s, i) => (<li key={i}>{s}</li>))}
			</ol>
		);

	}

	renderJourneyCost(cost) {
		if (typeof cost === 'undefined') {
			return 'loading cost...'
		} else if (cost === 'uncostable') {
			return cost;
		} else {
			return '£' + cost.toFixed(2);
		}
	}

	renderJourneyTable(ride) {
		if (ride.showDeets) {
			if (ride.journeyPlan && ride.journeyPlan.isFetched) {
				return (
					<table className='bike-ride-list__table__journey-table'>
						<tbody>
							{ride.journeyPlan.getJourneys().map((journey, i) => (
								<tr key={i}>
									<td>{this.formatJourneyLegSummaries(journey.getLegSummaries())}</td>
									<td>{this.renderJourneyCost(journey.cost)}</td>
								</tr>
							))}
						</tbody>
					</table>
				);
			} else {
				return 'loading...'
			}
		}
	}

	renderRideSummary(ride) {
		if (ride.journeyPlan && !ride.journeyPlan.isFetched) {
			return (
				<span>Fetching info for journey from
					&nbsp;{this.renderLocationLatLng(ride.startLatLang.lat, ride.startLatLang.lng)}
					&nbsp;to
					&nbsp;{this.renderLocationLatLng(ride.endLatLang.lat, ride.endLatLang.lng)}
					&nbsp;at
					&nbsp;{this.formatStartTime(ride.startTime)}...
				</span>)
		} else if (ride.journeyPlan && ride.journeyPlan.isFetched) {
			const journey = ride.journeyPlan.getAssumedJourney();
			const startNiceName = journey.getStartLocationNiceName();
			const endNiceName = journey.getEndLocationNiceName();

			const startMoment = moment(ride.startTime);
			const timeOfDay = startMoment.hour() < 12 ? 'morning' : (startMoment.hour() < 17 ? 'afternoon' : 'evening');
			const niceDate = startMoment.format('Do MMM YYYY');
			const dateTime = startMoment.format();
			const dateTimeTitle = startMoment.format('YYYY-MM-DD HH:mm');

			return (<span>
				From {this.renderLocationNiceName(startNiceName, ride.startLatLang.lat, ride.startLatLang.lng)}
				&nbsp;to {this.renderLocationNiceName(endNiceName, ride.endLatLang.lat, ride.endLatLang.lng)}
				&nbsp;<time dateTime={dateTime} title={dateTimeTitle}>on {niceDate} in the {timeOfDay}</time></span>)
		}
	}

	renderRideCost(ride) {
		if (ride.journeyPlan && ride.journeyPlan.isFetched && ride.journeyPlan.getAssumedJourney().cost) {
			return `£${ride.journeyPlan.getAssumedJourney().cost.toFixed(2)}`;
		} else {
			return '\u2026';
		}
	}

	expandDeets(ride) {
		// lol bad react
		ride.showDeets = !ride.showDeets;
		this.forceUpdate();
	}

	render() {
		return (
			<div className='bike-ride-list'>
				<h2>Here's your bike rides:</h2>
				<table className='bike-ride-list__table'>
					{this.props.items.map(ride => {
						return (
							<tbody className="js-ride-container" key={this.getBikeRideKey(ride)}>
								<tr>
									<td>{this.renderRideSummary(ride)}</td>
									<td>{this.renderRideCost(ride)}</td>
									<td><button onClick={() => this.expandDeets(ride)}>See deets</button></td>
								</tr>
								<tr className="js-ride-details">
									<td colSpan='2'>
										{this.renderJourneyTable(ride)}
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
