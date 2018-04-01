export default async function getUrl() {
  const url = await getLocation().then(constructUrl).catch(alert);
}

function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocation not supported');
    }
  });
}

function constructUrl(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  let finalUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" +
  lat + "&lon=" + lon + "&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric";
  return finalUrl;
}
