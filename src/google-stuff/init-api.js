/* global gapi */

const client_id = '447838384773-9n5pf96vipeuedm8ls2und2uu0ekteqt.apps.googleusercontent.com';
const apiKey = 'SqgxaJRRDVB4s3x9zEbkaR4B';

const scope = [
	'https://www.googleapis.com/auth/fitness.activity.read',
	'https://www.googleapis.com/auth/fitness.location.read'
].join(' ');

function loadAuth2 () {
	return new Promise(resolve => {
		gapi.load('client:auth2', resolve);
	});
}

function setApiKey () {
	gapi.client.setApiKey(apiKey);
	return Promise.resolve()
}

function initApi () {
	// todo cannot for the life of me work out why this fails without the then.
	// Something to do with the way the google api client implements its promise returning stuff ???
	return gapi.auth2.init({client_id, scope}).then(() => {});
}

// do this immediately so that log in is sync and Google login pop up isn't blocked
export default () => loadAuth2()
	.then(setApiKey)
	.then(initApi)
	.catch(console.error);
