/*
+ get latitude and longitude
+ make an API call on London to test
+ input lat + long into API call to get weather
+ display the data needed from JSON
- toggle between Farenheit + Celcius
- if statements to determine what to display. maybe have 3 images then a switch function?
- investigate Fetch API
(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
*/

/*
Create "theme" array of different options - desciptions
map that to a colour
learn const vs var vs let
*/


// Get current location
let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      latitude.innerHTML = "Geolocation not supported";
    }
}

const update = document.getElementById("current");
const place = document.getElementById("place");
const temperature = document.getElementById("temperature");
const max = document.getElementById("max");
const min = document.getElementById("min");

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const finalURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";
  latitude.innerHTML = " " + lat;
  longitude.innerHTML = " " + lon;

  const request = new XMLHttpRequest();
  request.open('GET', finalURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
  const weatherData = request.response;
  console.log(weatherData);
  update.innerHTML = " " + weatherData.weather[0].description;
  place.innerHTML = "" + weatherData.name;
  temperature.innerHTML = "" + weatherData.main.temp;
  max.innerHTML = "" + weatherData.main.temp_max;
  min.innerHTML = "" + weatherData.main.temp_min;
    const description = weatherData.weather[0].description;
    const themeClass = theme[description];
document.body.className = themeClass || 'default';
}

}
const theme = {
  'clear sky': 'grey',
  'udefined': 'black',
  'broken clouds': 'grey',
  'shower rain': 'grey',
  'overcast clouds': 'black'
}
getLocation();
