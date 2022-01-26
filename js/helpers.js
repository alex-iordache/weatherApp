import * as config from "./config.js";

export function fetchLocation(subStr, callBack) {
  $.ajax({
    async: true,
    type: "GET",
    url: config.locationApiUrl,
    data: { q: subStr, language: "ro-RO", apikey: config.apiKey },
    dataType: "json",
    success: function (response) {
      let locations = [];
      response.forEach((el) => {
        // console.log(
        //   `${el.Country.LocalizedName}, ${el.LocalizedName}, ${el.Key}`
        // );
        locations.push([el.Country.LocalizedName, el.LocalizedName, el.Key]);
      });

      callBack(locations);
    },
  });
}

export function fetchWeather(id, callBack) {
  $.ajax({
    type: "GET",
    url: config.weatherApiUrl + id,
    data: { apikey: config.apiKey, metric: true, details: false },
    dataType: "json",
    success: function (response) {
      callBack(response);
    },
  });
}
