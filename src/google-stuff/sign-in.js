/* global gapi */

import flags from '../dev-stuff/flags';

export default () => {
    if (flags.fakeGoogleStuff) {
        console.log('faking google sign in');
        return Promise.resolve();
    } else {
        return gapi.auth2.getAuthInstance().signIn();
    }
}
