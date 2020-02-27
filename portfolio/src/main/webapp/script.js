// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function music(){
    const songs = 
        ['The Night Has Opened My Eyes - The Smiths', 'Wild Irish Roses - Smino', 'Lost in the World - Kanye West' , 'Te Metiste - Ariel Camacho'];
    //Pick a random quote
    const song = songs[Math.floor(Math.random() * songs.length)];

    //Add 2 page
    const quoteContainer = document.getElementById('greeting-container');
    quoteContainer.innerText = song;
}

function getData(){
    console.log('Fetching a data.'); 
    // The fetch() function returns a Promise because the request is asynchronous.
    const responsePromise = fetch('/data');
    // When the request is complete, pass the response into handleResponse().
    responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addDataToDom() function.
  textPromise.then(addDataToDom);
}

/** Adds a random data to the DOM. */
function addDataToDom(data) {
  console.log('Adding quote to dom: ' + data);

  const dataContainer = document.getElementById('data-container');
  dataContainer.innerText = data;
}

/**
 * Fetches array from the servers and adds them to the DOM.
 */
function getArray() {
fetch('/data').then(response => response.json()).then((myData) => {
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerText = myData; });
}
