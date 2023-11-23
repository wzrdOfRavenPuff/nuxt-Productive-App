<script setup>
// import type { useHeadSafe } from '#imports';


// Client ID and API key from the Developer Console
const CLIENT_ID = '309865875848-gvsqkvbs8iqc48fou8tvnrer5ndpld1k.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB7tJWRC0DHB99lmtw7zAVZWTcqGq8I4e4';
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const items = ref(null);
const api = ref(null);
const authorized = ref(false);


api.value = gapi;
handleClientLoad();
/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  console.log("handling client load", api.value)
  api.value.load('client:auth2', initClient());
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  console.log("initClient")
  api.value.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(_ => {
    // Listen for sign-in state changes.
    api.value.auth2.getAuthInstance().isSignedIn.listen(authorized.value);
  });
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  console.log("handleAuthClick")
  Promise.resolve(api.value.auth2.getAuthInstance().signIn())
    .then(_ => {
      authorized.value = true;
    });
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  console.log("handleSignoutClick")
  Promise.resolve(api.value.auth2.getAuthInstance().signOut())
    .then(_ => {
      authorized.value = false;
    });
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function getData() {
  console.log("getData")
  api.value.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(response => {
    items.value = syntaxHighlight(response.result.items);
    console.log(items.value);
  });
}

function syntaxHighlight(json) {
  console.log("syntaxHighlight")
  if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}


</script>

<template>
  <div class='authentification'>
    <h2>VueJS + Google Calendar Example</h2>
    <p>Authorized: {{ authorized }}</p>
    Authentification
    <button v-if='!authorized' @click="handleAuthClick">Sign In</button>
    <button v-if='authorized' @click="handleSignoutClick">Sign Out</button>
  </div>
  <hr>
  <button v-if='authorized' @click="getData">Get Data</button>
  <div class="item-container" v-if="authorized && items">
    <pre v-html="items"></pre>
  </div>
</template>