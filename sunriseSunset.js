const NO_OF_POINTS = 100;

function getRandomLatLong() {
  return (Math.random() * 360 - 180).toFixed(3);
}

class Point {
  constructor(lat, long, sunrise, sunset) {
    this.lat = lat;
    this.long = long;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}

// I could not get this to work so have mocked the output to demonstrate rest of code.
// With working api this function will take latitude and longitude as parameters and interpolate into the API URL
function getSunriseAndSunset() {
  // const apiURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`;
  // axios.get(apiURL)
  // .then(function (response) {
  //   return response;
  //   // Then extract sunrise and sunset times from JSON response
  // })
  // .catch(function (error) {
  //   console.log("An error occurred with the API Call: ");
  // })
  var sunrise = Math.floor(Math.random() * 12) + 1;
  var sunset = Math.floor(Math.random() * 12) + 1;
  return { sunrise, sunset };
}

function dayLength(point) {
  hours = point.sunset + (12 - point.sunrise);
  return hours + " hrs";
}

// Initialise points
var points = [];
for (var i = 0; i < NO_OF_POINTS; i++) {
  var lat = getRandomLatLong();
  var long = getRandomLatLong();
  // Here I would pass the lat and long to the function
  var apiResponse = getSunriseAndSunset();
  var sunrise = apiResponse.sunrise;
  var sunset = apiResponse.sunset;
  points.push(new Point(lat, long, sunrise, sunset));
}

earliestPoint = points.reduce(function (prev, curr) {
  return prev.sunrise < curr.sunrise ? prev : curr;
});

dayLengthOfEarliest = dayLength(earliestPoint);

console.log(
  `The earliest day starts at ${earliestPoint.sunrise} AM and has a day length of ${dayLengthOfEarliest}.`
);
