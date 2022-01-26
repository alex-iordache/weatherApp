export function renderLocations(locations) {
  $(".result-container").html("").show();
  if (locations.length >= 1) {
    $(".result-container").html("");
    locations.forEach((el) => {
      $(".result-container").append(
        `<div class="result" data-id="${el[2]}">${el[1]}, ${el[0]}</div>`
      );
    });
  }
}

export function renderWeather(weather) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  $(".weather-container .weather-details").html("");
  let day = {};
  weather.DailyForecasts.forEach((el) => {
    day = {
      d: new Date(el.Date),
      dayName: days[new Date(el.Date).getDay()],
      temp: `${el.Temperature.Minimum.Value} ... ${el.Temperature.Maximum.Value}`,
      description: el.Day.IconPhrase,
    };
    $(".weather-container .weather-details").append(`
        <div class="daily-weather">
            <div class="day-name">${day.dayName}</div>
            <div class="temp">${day.temp} Celsius</div>
            <div class="description">${day.description}</div>
        </div>
      `);
  });
}

// {
//     "Date": "2022-01-24T07:00:00+02:00",
//     "EpochDate": 1643000400,
//     "Temperature": {
//         "Minimum": {
//             "Value": -7.8,
//             "Unit": "C",
//             "UnitType": 17
//         },
//         "Maximum": {
//             "Value": -7.3,
//             "Unit": "C",
//             "UnitType": 17
//         }
//     },
//     "Day": {
//         "Icon": 19,
//         "IconPhrase": "Flurries",
//         "HasPrecipitation": true,
//         "PrecipitationType": "Snow",
//         "PrecipitationIntensity": "Light"
//     },
//     "Night": {
//         "Icon": 22,
//         "IconPhrase": "Snow",
//         "HasPrecipitation": true,
//         "PrecipitationType": "Snow",
//         "PrecipitationIntensity": "Moderate"
//     },
//     "Sources": [
//         "AccuWeather"
//     ],
//     "MobileLink": "http://www.accuweather.com/en/md/bucuria/242147/daily-weather-forecast/242147?day=1&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/md/bucuria/242147/daily-weather-forecast/242147?day=1&unit=c&lang=en-us"
// }
