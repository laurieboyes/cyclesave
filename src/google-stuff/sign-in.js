/* global gapi */
export default () => gapi.auth2.getAuthInstance().signIn();
