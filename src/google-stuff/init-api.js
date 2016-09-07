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

function initApi() {
	return gapi.auth2.init({client_id, scope})
		//todo make sign-in happen from user triggered action to get around pop-up blocker
		.then(() => gapi.auth2.getAuthInstance().signIn())
		.then(() => console.log('Google API ready'));
}

export default () => loadAuth2()
		.then(setApiKey)
		.then(initApi);
