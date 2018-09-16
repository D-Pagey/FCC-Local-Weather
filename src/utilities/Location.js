function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation not supported'));
    }
  });
}

function constructUrl(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const FINAL_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' // eslint-disable-line prefer-template
  + lat + '&lon=' + lon + '&appid=b8a569af62cc3d2b113f0b42813c6929&units=metric';
  return FINAL_URL;
}

export default async function getUrl() {
  return getLocation().then(constructUrl).catch(alert);
}
