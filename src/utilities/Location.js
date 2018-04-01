export default function getUrl() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation not supported");
  }

  function showPosition(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let finalUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";
    return finalUrl;
    }

}

// I need to put together a URL to fetch from. I then need to use that in my
// App.js file. I can't get the getCurrentPosition to consistently work here.
// However, in my native app it works fine. 
