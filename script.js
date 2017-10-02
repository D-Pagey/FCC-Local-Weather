/*
- get latitude and longitude, store in variables
- make an API call on London to test
- input lat + long into API call to get weather
- open weather API

*/

var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      latitude.innerHTML = "Geolocation not supported";
    }
}

function showPosition(position) {
  latitude.innerHTML = " " + position.coords.latitude;
  longitude.innerHTML = " " + position.coords.longitude;
}

getLocation();
