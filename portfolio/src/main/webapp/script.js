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
    console.log("fetching data!")
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

/*
 * Fetches the comments array and adds each element to the history 
 * unordered list on the homepage by calling addCommentToDom
 */
 function getComments(){
     fetch('/data').then(response => response.json()).then((comments) => {
        const historyEl = document.getElementById('history');
        console.log(comments + " and " + comments.length);
        addCommentToDom(historyEl, comments[comments.length-1]);
        /*
        for(i=0; i<comments.length; i++){
            addCommentToDom(historyEl, comments[i]);
        }*/
    });
 }

 /*
  * Adds comment to the element in param
  */
function addCommentToDom(element, comment){
    const liElement = document.createElement('li');
    liElement.innerText = comment;
    element.appendChild(liElement);
}
/** Creates a map and adds it to the page. */
function createMap() {
    var r1 = {lat: 34.082119, lng: -118.378906};
    var r2 = {lat: 34.0450563, lng: -118.2539964};
    var r3 = {lat: 34.0210869, lng: -118.4019363};
    var r4 = {lat: 34.095017, lng: -118.400399};
    var r5 = {lat: 33.407696, lng: -118.3739947};

    const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 34.052240, lng: -118.243340}, zoom: 11});
    var marker1 = new google.maps.Marker({position: r1, map: map});
    var marker1 = new google.maps.Marker({position: r2, map: map});
    var marker2 = new google.maps.Marker({position: r3, map: map});
    var marker3 = new google.maps.Marker({position: r4, map: map});
    var marker4 = new google.maps.Marker({position: r5, map: map});
}
/*
<script src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAF6Z09E_v1B5Jm0N6JkTRI-31KYqfxHwI&center=47.65,-122.35&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:geometry.fill%7Ccolor:0xffe29a%7Csaturation:-10%7Clightness:10%7Cweight:4.5&style=element:geometry.stroke%7Cweight:2&style=element:labels.text%7Cweight:2.5&style=element:labels.text.fill%7Ccolor:0x523735%7Cweight:2&style=element:labels.text.stroke%7Ccolor:0xf5f1e6%7Cweight:3&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360
"></script>
function createMap() {
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    const styledMapType = new google.maps.StyledMapType(
        [ {"elementType": "geometry", "stylers":[{ "color": "#ebe3cd"}]},
          {"elementType": "geometry.fill","stylers":[{"color": "#ffe29a"},
          {"saturation": -10
      },
      {
        "lightness": 10
      },
      {
        "weight": 4.5
      }
    ]
  },
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "weight": 2
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "weight": 2.5
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      },
      {
        "weight": 3
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
        ],
        {name: 'Styled Map'});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.647, lng: 37.581},
        zoom: 11,
        mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    }
*/