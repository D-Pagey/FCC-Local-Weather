/*
+ get latitude and longitude
+ make an API call on London to test
+ input lat + long into API call to get weather
- display the data needed from JSON
- toggle between Farenheit + Celcius
- if statements to determine what to display. maybe have 3 images then a switch function?
- investigate Fetch API
(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
*/


// Get current location
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      latitude.innerHTML = "Geolocation not supported";
    }
}

var update = document.getElementById("current");
var place = document.getElementById("place");

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var finalURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";
  latitude.innerHTML = " " + lat;
  longitude.innerHTML = " " + lon;

  var request = new XMLHttpRequest();
  request.open('GET', finalURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  var weatherData = request.response;
  console.log(weatherData);
  update.innerHTML = " " + weatherData.weather[0].description;
  place.innerHTML = "" + weatherData.name;
}

}

getLocation();

// Make the API call
