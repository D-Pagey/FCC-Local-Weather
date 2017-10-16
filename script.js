/*
1) Math round down temp
2) Change image based off description
3) Smaller functions
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

// Switches state of button
let state = 'c';

function switchState() {
  if (state === 'c') {
    state = 'f';
    console.log("State was c and is now " + state);
    return state;
  } else {
    state = 'c';
    console.log("State was f and is now " + state);
    return state;
  }
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

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const finalUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";


// fetching the weather data
fetch(finalUrl)
  .then((resp) => resp.json())
  .then(function(weatherData) {

    // Values from API Call
    const temp = weatherData.main.temp;
    const max = weatherData.main.temp_max;
    const min = weatherData.main.temp_min;
    const description = weatherData.weather[0].description;
    const themeClass = theme[description];

    // Changing HTML
    placeEl.innerHTML = "" + weatherData.name;
    explanationEl.innerHTML = " " + description;
    temperatureEl.innerHTML = "" + temp;
    maxEl.innerHTML = "" + max;
    minEl.innerHTML = "" + min;

    document.body.className = themeClass || 'default';

    // Convert to Farenheit
    function celsiusConverter(a, b, c) {
      temperatureEl.innerHTML = (a * 1.8) + 32;
      units1.innerHTML = " F";
      maxEl.innerHTML = (b * 1.8) +32;
      units2.innerHTML = " F";
      minEl.innerHTML = (c * 1.8) + 32;
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

    function toggle() {
      switchState();
      console.log("Double checking state is now " + state);
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
  'clear sky': 'grey',
  'undefined': 'black',
  'broken clouds': 'black',
  'shower rain': 'grey',
  'overcast clouds': 'black',
  'light rain': 'black',
  'moderate rain': 'black',
  'drizzle rain': 'black',
  'mist':'black',
  'haze':'black',
  'scattered clouds':'black',
  'few clouds':'black'
}
