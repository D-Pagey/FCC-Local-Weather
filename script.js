/*
- toggle between Farenheit + Celcius
- if statements to determine what to display. maybe have 3 images then a switch function?
- investigate Fetch API
(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Create "theme" array of different options - desciptions
map that to a colour
- learn const vs var vs let
*/

// Get current location

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      h1.innerHTML = "Geolocation not supported";
    }
}

  const update = document.getElementById("current");
  const place = document.getElementById("place");
  const temperature = document.getElementById("temperature");
  const max = document.getElementById("max");
  const min = document.getElementById("min");
  const units1 = document.getElementById("units1");
  const units2 = document.getElementById("units2");
  const units3 = document.getElementById("units3");

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const finalURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";

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
  const celsius = weatherData.main.temp;
  const hi = weatherData.main.temp_max;
  const lo = weatherData.main.temp_min;
  max.innerHTML = "" + weatherData.main.temp_max;
  min.innerHTML = "" + weatherData.main.temp_min;
  const description = weatherData.weather[0].description;
  const themeClass = theme[description];
  document.body.className = themeClass || 'default';

  function cToF(a, b, c) {
    temperature.innerHTML = (a * 1.8) + 32;
    units1.innerHTML = " F";
    max.innerHTML = (b * 1.8) + 32;
    units2.innerHTML = " F";
    min.innerHTML = (c * 1.8) + 32;
    units3.innerHTML = " F";
  }

   // cToF(celsius, hi, lo);

}

}
const theme = {
  'clear sky': 'grey',
  'udefined': 'black',
  'broken clouds': 'black',
  'shower rain': 'grey',
  'overcast clouds': 'black'
}
getLocation();
