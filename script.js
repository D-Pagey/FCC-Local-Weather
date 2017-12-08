/*
Bonus To Do:
- Smaller functions
- Optimise styling
  loop through forEach/map. HTMl elements in Array.
  [...HTMLQUEryselector] --> spread operator
*/

// Constants
const explanationEl = document.getElementById("description");
const placeEl = document.getElementById("place");
const temperatureEl = document.getElementById("temperature");
const maxEl = document.getElementById("max");
const minEl = document.getElementById("min");
const units1 = document.getElementById("units1");
const units2 = document.getElementById("units2");
const units3 = document.getElementById("units3");
const image = document.getElementById("image");

// Switches state of button
function switchState(state) {
  return (state === 'c' ? 'f':'c');
}

// Get current location
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      h1.innerHTML = "Geolocation not supported";
    }
}

// Callback function for API call
function showPosition(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const finalUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";


// fetching the weather data
fetch(finalUrl)
  .then((resp) => resp.json())
  .then(function(weatherData) {

    // Values from API Call
    console.log(weatherData);
    const temp = Math.floor(weatherData.main.temp);
    const max = Math.floor(weatherData.main.temp_max);
    const min = Math.floor(weatherData.main.temp_min);
    const main = weatherData.weather[0].main;
    const themeClass = theme[main];

    image.className = themeClass || 'weather-img error';

    // Changing HTML
    placeEl.innerHTML = "" + weatherData.name;
    explanationEl.innerHTML = " " + weatherData.weather[0].description;
    temperatureEl.innerHTML = "" + temp;
    maxEl.innerHTML = "" + max;
    minEl.innerHTML = "" + min;

    // Convert to Farenheit
    function celsiusConverter(a, b, c) {
      temperatureEl.innerHTML = Math.floor((a * 1.8) + 32);
      units1.innerHTML = " F";
      maxEl.innerHTML = Math.floor((b * 1.8) +32);
      units2.innerHTML = " F";
      minEl.innerHTML = Math.floor((c * 1.8) + 32);
      units3.innerHTML = " F";
    }

    // Convert to Celsius
    function fahrenConverter() {
      temperatureEl.innerHTML = temp;
      units1.innerHTML = " &#176C"
      maxEl.innerHTML = max;
      units2.innerHTML = " &#176C";
      minEl.innerHTML = min;
      units3.innerHTML = " &#176C";
    }

    let state;
    function toggle() {
      state = switchState(state);
      if (state === 'c') {
      celsiusConverter(temp, max, min);
      } else {
      fahrenConverter();
      }
    }

    document.getElementById("toggler").addEventListener("click", toggle);

})
  // unsuccessful fetch
  .catch(function(error) {
    console.log("Something went wrong");
})

};

getLocation();

// theme classes
const theme = {
  'Clouds': 'weather-img cloudy',
  'Rain': 'weather-img rainy',
  'Clear': 'weather-img sunny',
  'Drizzle': 'weather-img drizzly',
  'Thunderstorm': 'weather-img stormy',
  'Snow': 'weather-img snowy',
  'Mist':'weather-img drizzly',
  'Fog':'weather-img snowy',
  'Haze':'weather-img snowy'
}
