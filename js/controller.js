import * as config from "./config.js";
import { fetchLocation, fetchWeather } from "./helpers.js";
import * as view from "./view.js";
import model from "./model.js";

$("#autocomplete").on("keyup", function (e) {
  if (
    (e.key === "Delete" || e.key === "Backspace") &&
    $("#autocomplete").val().length < 3
  ) {
    $(".result-container").hide();
  }
  if ($("#autocomplete").val().length >= 3) {
    fetchLocation($("#autocomplete").val(), view.renderLocations);
  }
});

function selectLocation(e) {
  const id = e.target.closest(".result").dataset.id;
  const city = e.target.closest(".result").textContent;
  $(".result-container").hide();
  $("#autocomplete").val(city);
  fetchWeather(id, view.renderWeather);
}

$(".result-container").on("click", selectLocation);
