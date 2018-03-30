export function getPosition() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, { timeout: 20000});
      } else {
        alert("Geolocation not supported");
      }

    function success(position) {
      console.log(position);
      return 42;
    }

    function error(error) {
      console.log('something went wrong');
    }

  }
