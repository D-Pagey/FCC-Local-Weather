/*
1) Toggle button: check old commits, array of temps.
2) Math round down temp
*/

// Constants

  const update = document.getElementById("current");
  const place = document.getElementById("place");
  const temperature = document.getElementById("temperature");
  const max = document.getElementById("max");
  const min = document.getElementById("min");
  const units1 = document.getElementById("units1");
  const units2 = document.getElementById("units2");
  const units3 = document.getElementById("units3");

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

    // changing the HTML
    update.innerHTML = " " + weatherData.weather[0].description;
    place.innerHTML = "" + weatherData.name;
    temperature.innerHTML = "" + weatherData.main.temp;
    max.innerHTML = "" + weatherData.main.temp_max;
    min.innerHTML = "" + weatherData.main.temp_min;

    const celsius = weatherData.main.temp;
    const hi = weatherData.main.temp_max;
    const lo = weatherData.main.temp_min;
    const description = weatherData.weather[0].description;
    const themeClass = theme[description];

    document.body.className = themeClass || 'default';

  })
  // unsuccessful fetch
  .catch(function(error) {
    console.log("Something went wrong");
  })

};

getLocation();

const theme = {
  'clear sky': 'grey',
  'udefined': 'black',
  'broken clouds': 'black',
  'shower rain': 'grey',
  'overcast clouds': 'black',
  'light rain': 'black',
  'moderate rain': 'black',
  'drizzle rain': 'black',
  'mist':'black',
  'haze':'black'
}
