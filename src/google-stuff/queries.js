/* global gapi */

import getNanos from '../util/get-nanos';

export function queryFitnessDataSource (dataSourceId, fromDate, toDate) {
	const path = `fitness/v1/users/me/dataSources/${dataSourceId}/datasets/${getNanos(fromDate)}-${getNanos(toDate)}`;
	return gapi.client.request({path})
		.then(({result: {point}}) => point)
}
